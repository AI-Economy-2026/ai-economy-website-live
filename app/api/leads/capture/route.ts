import { NextRequest, NextResponse } from "next/server";

const GHL_TOKEN = process.env.GHL_API_TOKEN!;
const GHL_LOCATION = process.env.GHL_LOCATION_ID!;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, source = "homepage" } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Upsert contact in GHL with a pre-checkout tag
    if (GHL_TOKEN && GHL_LOCATION) {
      try {
        // Search for existing contact
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
        let contactId: string | null = null;

        if (searchData.contacts && searchData.contacts.length > 0) {
          contactId = searchData.contacts[0].id;
        } else {
          // Create new contact
          const nameParts = (name ?? "").trim().split(" ");
          const createRes = await fetch(`https://services.leadconnectorhq.com/contacts/`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${GHL_TOKEN}`,
              Version: "2021-07-28",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email.toLowerCase().trim(),
              locationId: GHL_LOCATION,
              firstName: nameParts[0] ?? "",
              lastName: nameParts.slice(1).join(" ") ?? "",
              source: `AI Economy - ${source}`,
            }),
          });
          const createData = await createRes.json();
          contactId = createData.contact?.id ?? null;
        }

        // Apply pre-checkout tag
        if (contactId) {
          await fetch(`https://services.leadconnectorhq.com/contacts/${contactId}/tags`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${GHL_TOKEN}`,
              Version: "2021-07-28",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ tags: ["checkout-started", "ai-economy-lead"] }),
          });
        }
      } catch (ghlErr) {
        // Non-blocking — log but don't fail the request
        console.error("GHL lead capture error:", ghlErr);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Lead capture error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
