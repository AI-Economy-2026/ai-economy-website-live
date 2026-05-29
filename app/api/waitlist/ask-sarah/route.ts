import { NextRequest, NextResponse } from "next/server";

const GHL_TOKEN = process.env.GHL_API_TOKEN!;
const GHL_LOCATION = process.env.GHL_LOCATION_ID!;

export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json();
    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    // 1. Find or create contact in GHL
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
      // Create contact
      const createRes = await fetch(
        `https://services.leadconnectorhq.com/contacts/`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${GHL_TOKEN}`,
            Version: "2021-07-28",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            firstName: name ?? "",
            locationId: GHL_LOCATION,
            tags: ["ask-sarah-waitlist"],
          }),
        }
      );
      const createData = await createRes.json();
      contactId = createData.contact?.id;
    }

    // 2. Add tag to existing contact
    if (contactId) {
      await fetch(
        `https://services.leadconnectorhq.com/contacts/${contactId}/tags`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${GHL_TOKEN}`,
            Version: "2021-07-28",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ tags: ["ask-sarah-waitlist"] }),
        }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
