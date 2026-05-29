import { NextRequest, NextResponse, after } from "next/server";
import { getUserByEmail, upsertUser, upsertSubscription } from "@/lib/db";
import { sendPurchaseEmail } from "@/lib/njin";

const GHL_TOKEN = process.env.GHL_API_TOKEN!;
const GHL_LOCATION = process.env.GHL_LOCATION_ID!;

// ── GHL Tag Map ────────────────────────────────────────────────────────────────
// 5 purchase tags as defined in the Developer Handoff doc
const GHL_TAGS: Record<string, string[]> = {
  toolkit: ["ai-toolkit-buyer", "ai-economy-member"],
  bump_prompts: ["myo-stack-buyer", "ai-economy-member"], // Change start_right to bump_prompts
  build_your_own_ai_stack: ["build-your-own-ai-stack-buyer", "ai-economy-member"],
  membership: ["fresh-stack-member", "ai-economy-member"],
  ask_sarah: ["ask-sarah-subscriber", "ai-economy-member"],
};

// ── Product Type Resolver ──────────────────────────────────────────────────────
// Returns [mainProductType, bumpProductType | null]
function resolveProductTypes(productName: string, bumpName: string): [string, string | null] {
  const p = productName.toLowerCase();
  const b = bumpName.toLowerCase();

  let main = "toolkit";
  if (p.includes("fresh stack") || p.includes("membership")) main = "membership";
  else if (p.includes("ask sarah")) main = "ask_sarah";
  else if (p.includes("build your own ai stack") || p.includes("build your own")) main = "build-your-own-ai-stack";
  else if (p.includes("start right")) main = "bump_prompts"; // Change start_right to bump_prompts
  let bump: string | null = null;
  if (b.includes("start right") || b.includes("prompt")) bump = "bump_prompts"; // Change start_right to bump_prompts
  else if (b.includes("fresh stack")) bump = "membership";
  else if (b.includes("ask sarah")) bump = "ask_sarah";
  return [main, bump];
}

// ── GHL: Find or Create Contact ────────────────────────────────────────────────
async function findOrCreateGhlContact(email: string, name?: string): Promise<string | null> {
  try {
    // Search by email
    const searchRes = await fetch(
      `https://services.leadconnectorhq.com/contacts/?locationId=${GHL_LOCATION}&query=${encodeURIComponent(email)}`,
      {
        headers: {
          Authorization: `Bearer ${GHL_TOKEN}`,
          Version: "2021-07-28",
        },
      }
    );
    const searchData = await searchRes.json();

    if (searchData.contacts && searchData.contacts.length > 0) {
      return searchData.contacts[0].id as string;
    }

    // Create new contact
    const createRes = await fetch(`https://services.leadconnectorhq.com/contacts/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GHL_TOKEN}`,
        Version: "2021-07-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        locationId: GHL_LOCATION,
        ...(name ? { firstName: name.split(" ")[0], lastName: name.split(" ").slice(1).join(" ") } : {}),
      }),
    });
    const createData = await createRes.json();
    return createData.contact?.id ?? null;
  } catch (err) {
    console.error("GHL findOrCreateContact error:", err);
    return null;
  }
}

// ── GHL: Apply Tags ────────────────────────────────────────────────────────────
async function applyGhlTags(contactId: string, tags: string[]): Promise<void> {
  try {
    await fetch(`https://services.leadconnectorhq.com/contacts/${contactId}/tags`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GHL_TOKEN}`,
        Version: "2021-07-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tags }),
    });
    console.log(`GHL tags applied: [${tags.join(", ")}] → contact ${contactId}`);
  } catch (err) {
    console.error("GHL applyTags error:", err);
  }
}

// ── GHL: Remove Tags (on cancellation) ────────────────────────────────────────
async function removeGhlTags(contactId: string, tags: string[]): Promise<void> {
  try {
    await fetch(`https://services.leadconnectorhq.com/contacts/${contactId}/tags`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${GHL_TOKEN}`,
        Version: "2021-07-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tags }),
    });
    console.log(`GHL tags removed: [${tags.join(", ")}] → contact ${contactId}`);
  } catch (err) {
    console.error("GHL removeTags error:", err);
  }
}

// ── Supabase REST PATCH helper ─────────────────────────────────────────────────
async function patchSubscriptionStatus(userId: string, productType: string, status: string) {
  const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  const url = new URL(`${SUPABASE_URL}/rest/v1/subscriptions`);
  url.searchParams.set("user_id", `eq.${userId}`);
  url.searchParams.set("product_type", `eq.${productType}`);
  await fetch(url.toString(), {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      apikey: SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
    },
    body: JSON.stringify({ status, updated_at: new Date().toISOString() }),
  });
}

// ── Shared order processor ─────────────────────────────────────────────────────
async function processOrder(
  customerEmail: string,
  customerName: string | undefined,
  customerId: string,
  orderId: string,
  productName: string,
  bumpName: string,
) {
  const [mainType, bumpType] = resolveProductTypes(productName, bumpName);

  // Upsert user
  let user = await getUserByEmail(customerEmail);
  if (!user) user = await upsertUser(customerEmail, customerName);

  // Create subscription for main product
  await upsertSubscription(user.id, mainType, orderId, customerId);
  console.log(`Subscription activated: ${customerEmail} (${mainType})`);

  // Create subscription for bump if present
  if (bumpType) {
    await upsertSubscription(user.id, bumpType, orderId, customerId);
    console.log(`Bump subscription activated: ${customerEmail} (${bumpType})`);
  }

  // Sync to GHL
  const ghlContactId = await findOrCreateGhlContact(customerEmail, customerName);
  if (ghlContactId) {
    const tags = [
      ...(GHL_TAGS[mainType] ?? GHL_TAGS.toolkit),
      ...(bumpType ? (GHL_TAGS[bumpType] ?? []) : []),
    ];
    await applyGhlTags(ghlContactId, [...new Set(tags)]);

    // Send welcome email directly via API
    await sendPurchaseEmail(customerEmail, productName, bumpName, customerName);
  }
}

// ── ThriveCart GET (success URL — customer's browser lands here after payment) ──
export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const email = params.get("thrivecart[customer][email]");

  // No email = ThriveCart verification ping
  if (!email) return new NextResponse("OK", { status: 200 });

  // Parse order items immediately (fast — no async)
  let productName = "";
  let bumpName = "";
  for (let i = 0; i < 10; i++) {
    const type = params.get(`thrivecart[order][${i}][t]`);
    const name = params.get(`thrivecart[order][${i}][n]`) ?? "";
    if (type === "product") productName = name;
    if (type === "bump") bumpName = name;
  }

  const orderId = params.get("thrivecart[order_id]") ?? "";
  const customerName = params.get("thrivecart[customer][name]") ?? undefined;
  const customerId = params.get("thrivecart[customer][id]") ?? orderId;
  const customerEmail = email.toLowerCase().trim();

  // Determine redirect destination based on product (no DB call needed)
  const [mainType] = resolveProductTypes(productName, bumpName);
  const redirectTo = mainType === "bump_prompts" ? "/start-right/access" : "/login";

  // Process order in background — don't block the redirect
  after(async () => {
    try {
      console.log(`ThriveCart success URL: ${customerEmail} | product: ${productName} | bump: ${bumpName}`);
      await processOrder(customerEmail, customerName, customerId, orderId, productName, bumpName);
    } catch (err) {
      console.error("ThriveCart GET webhook error:", err);
    }
  });

  return NextResponse.redirect(new URL(redirectTo, req.url));
}

// ── ThriveCart POST (main webhook) ────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const event = body.event as string;
    const customerEmail = (body.customer?.email as string)?.toLowerCase()?.trim();
    const customerName = body.customer?.name as string | undefined;
    const customerId = String(body.customer?.id ?? body.order?.id ?? "");
    const orderId = String(body.order?.id ?? "");
    const productName = String((body.product as Record<string, unknown>)?.name ?? "");
    const bumpName = String((body.bump as Record<string, unknown>)?.name ?? "");
    const [productType] = resolveProductTypes(productName, bumpName);

    if (!customerEmail) {
      return NextResponse.json({ error: "Missing customer email" }, { status: 400 });
    }

    console.log(`ThriveCart POST webhook: ${event} | ${customerEmail} | product: ${productName} | bump: ${bumpName}`);

    // ── PURCHASE / REBILL ──────────────────────────────────────────────────────
    if (event === "order.success" || event === "rebill.success") {
      await processOrder(customerEmail, customerName, customerId, orderId, productName, bumpName);
    }

    // ── CANCELLATION / REFUND ──────────────────────────────────────────────────
    else if (event === "subscription.cancelled" || event === "order.refund") {
      const user = await getUserByEmail(customerEmail);
      if (user) {
        await patchSubscriptionStatus(user.id, productType, "cancelled");
        console.log(`Subscription cancelled: ${customerEmail} (${productType})`);

        // Remove GHL tags on cancellation
        const ghlContactId = await findOrCreateGhlContact(customerEmail);
        if (ghlContactId) {
          const tags = GHL_TAGS[productType] ?? GHL_TAGS.toolkit;
          await removeGhlTags(ghlContactId, tags);
        }
      }
    }

    // ── FAILED REBILL ──────────────────────────────────────────────────────────
    else if (event === "rebill.failed") {
      const user = await getUserByEmail(customerEmail);
      if (user) {
        await patchSubscriptionStatus(user.id, productType, "expired");
        console.log(`Subscription expired (rebill failed): ${customerEmail} (${productType})`);

        // Tag as lapsed in GHL
        const ghlContactId = await findOrCreateGhlContact(customerEmail);
        if (ghlContactId) {
          await applyGhlTags(ghlContactId, ["rebill-failed"]);
        }
      }
    }

    // ── UNHANDLED ──────────────────────────────────────────────────────────────
    else {
      console.log(`Unhandled ThriveCart event: ${event} for ${customerEmail}`);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("ThriveCart webhook error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
