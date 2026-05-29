const GHL_API_TOKEN = process.env.GHL_API_TOKEN!;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID!;
const GHL_BASE = "https://services.leadconnectorhq.com";

interface GHLContact {
  id: string;
  email: string;
  contactName: string;
}

/**
 * Find a contact in Njin CRM by email, or create one if not found.
 */
export async function findOrCreateContact(
  email: string,
  fullName?: string
): Promise<string | null> {
  try {
    // Search for existing contact
    const searchRes = await fetch(
      `${GHL_BASE}/contacts/?locationId=${GHL_LOCATION_ID}&query=${encodeURIComponent(email)}&limit=1`,
      {
        headers: {
          Authorization: `Bearer ${GHL_API_TOKEN}`,
          Version: "2021-07-28",
          "Content-Type": "application/json",
        },
      }
    );

    if (searchRes.ok) {
      const data = await searchRes.json();
      if (data.contacts?.length > 0) {
        return (data.contacts[0] as GHLContact).id;
      }
    }

    // Create new contact
    const createRes = await fetch(`${GHL_BASE}/contacts/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GHL_API_TOKEN}`,
        Version: "2021-07-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        locationId: GHL_LOCATION_ID,
        email,
        contactName: fullName ?? email.split("@")[0],
      }),
    });

    if (createRes.ok) {
      const data = await createRes.json();
      return data.contact?.id ?? null;
    }

    return null;
  } catch (err) {
    console.error("GHL findOrCreateContact error:", err);
    return null;
  }
}

/**
 * Send a magic-link sign-in email via Njin CRM (GHL Conversations API).
 */
export async function sendMagicLinkEmail(
  email: string,
  magicUrl: string,
  fullName?: string
): Promise<boolean> {
  const contactId = await findOrCreateContact(email, fullName);

  if (!contactId) {
    console.error(`Could not find/create GHL contact for ${email}`);
    return false;
  }

  const emailHtml = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 480px; margin: 0 auto; padding: 40px 20px;">
      <div style="margin-bottom: 32px;">
        <span style="font-weight: 900; font-size: 16px; letter-spacing: -0.5px;">AIECONOMY</span>
      </div>
      <h1 style="font-size: 28px; font-weight: 900; color: #111; margin: 0 0 8px;">Your Sign-In Link</h1>
      <p style="color: #666; font-size: 15px; margin: 0 0 32px; line-height: 1.6;">
        Click the button below to sign in to your AI Economy Toolkit. This link expires in 24 hours and can only be used once.
      </p>
      <div style="text-align: center; margin-bottom: 32px;">
        <a href="${magicUrl}" style="display: inline-block; background: #004AAD; color: #fff; text-decoration: none; padding: 16px 36px; border-radius: 999px; font-size: 15px; font-weight: 600;">Sign In to AI Economy</a>
      </div>
      <p style="color: #999; font-size: 13px; line-height: 1.6;">
        If you didn't request this link, you can safely ignore this email.<br>
        This link is valid for 24 hours and can only be used once.
      </p>
      <hr style="border: none; border-top: 1px solid #eee; margin: 32px 0;" />
      <p style="color: #bbb; font-size: 12px;">AI Economy · Sarah Balmer · aieconomy.ai</p>
    </div>
  `;

  try {
    const res = await fetch(`${GHL_BASE}/conversations/messages`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GHL_API_TOKEN}`,
        Version: "2021-04-15",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "Email",
        contactId,
        locationId: GHL_LOCATION_ID,
        subject: "Your AI Economy sign-in link",
        html: emailHtml,
        emailFrom: "hello@aieconomy.ai",
        emailTo: email,
      }),
    });

    if (!res.ok) {
      const errBody = await res.text();
      console.error("GHL email send error:", errBody);
      return false;
    }

    console.log(`Magic-link email sent via Njin for ${email}`);
    return true;
  } catch (err) {
    console.error("GHL sendMagicLinkEmail error:", err);
    return false;
  }
}

/**
 * Send a purchase confirmation email via GHL.
 */
export async function sendPurchaseEmail(
  email: string,
  productName: string,
  bumpName?: string,
  fullName?: string
): Promise<boolean> {
  const contactId = await findOrCreateContact(email, fullName);

  if (!contactId) {
    console.error(`Could not find/create GHL contact for ${email}`);
    return false;
  }

  const productList = bumpName ? `${productName} & ${bumpName}` : productName;

  const emailHtml = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 500px; margin: 0 auto; padding: 40px 20px; border: 1px solid #eee; border-radius: 12px;">
      <div style="margin-bottom: 32px;">
        <span style="font-weight: 900; font-size: 18px; letter-spacing: -0.5px; color: #004AAD;">AI ECONOMY</span>
      </div>
      <h1 style="font-size: 26px; font-weight: 900; color: #111; margin: 0 0 16px;">Welcome to the family!</h1>
      <p style="color: #444; font-size: 16px; margin: 0 0 24px; line-height: 1.6;">
        Your order for <strong>${productList}</strong> was successful. We're excited to have you with us!
      </p>
      <p style="color: #444; font-size: 16px; margin: 0 0 32px; line-height: 1.6;">
        You can now access your toolkit and resources directly from your dashboard.
      </p>
      <div style="text-align: center; margin-bottom: 32px;">
        <a href="https://aieconomy.ai/login" style="display: inline-block; background: #004AAD; color: #fff; text-decoration: none; padding: 16px 40px; border-radius: 999px; font-size: 15px; font-weight: 600;">Access Your Dashboard</a>
      </div>
      <p style="color: #888; font-size: 14px; line-height: 1.6;">
        If you have any questions or need help getting started, just reply to this email.
      </p>
      <hr style="border: none; border-top: 1px solid #eee; margin: 32px 0;" />
      <p style="color: #bbb; font-size: 12px; text-align: center;">AI Economy · Sarah Balmer · aieconomy.ai</p>
    </div>
  `;

  try {
    const res = await fetch(`${GHL_BASE}/conversations/messages`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GHL_API_TOKEN}`,
        Version: "2021-04-15",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "Email",
        contactId,
        locationId: GHL_LOCATION_ID,
        subject: `Welcome to AI Economy! Access your ${productName}`,
        html: emailHtml,
        emailFrom: "hello@aieconomy.ai",
        emailTo: email,
      }),
    });

    return res.ok;
  } catch (err) {
    console.error("GHL sendPurchaseEmail error:", err);
    return false;
  }
}
