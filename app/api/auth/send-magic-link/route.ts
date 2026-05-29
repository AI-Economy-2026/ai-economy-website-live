import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { getUserByEmail, createMagicLinkToken } from "@/lib/db";
import { sendMagicLinkEmail } from "@/lib/njin";

/**
 * Resolve the public base URL for outbound links (magic-link emails).
 * Priority:
 *   1. APP_URL env var (set this in production — e.g. https://aieconomy.ai)
 *   2. x-forwarded-proto/host headers (when behind a reverse proxy / Vercel)
 *   3. req.url (dev fallback — will be http://localhost:<port>)
 */
function resolveBaseUrl(req: NextRequest): string {
  const fromEnv = process.env.APP_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/$/, "");

  const forwardedHost = req.headers.get("x-forwarded-host");
  const forwardedProto = req.headers.get("x-forwarded-proto");
  if (forwardedHost) {
    return `${forwardedProto ?? "https"}://${forwardedHost}`;
  }

  return new URL(req.url).origin;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = body?.email?.toLowerCase()?.trim();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    const user = await getUserByEmail(email);

    if (!user) {
      return NextResponse.json({ exists: false });
    }

    // 32-byte URL-safe token (hex). 24-hour TTL is enforced inside createMagicLinkToken.
    const token = crypto.randomBytes(32).toString("hex");
    await createMagicLinkToken(email, token);

    // Build absolute magic-link URL using the configured public origin
    const url = new URL("/api/auth/magic-link", resolveBaseUrl(req));
    url.searchParams.set("token", token);
    const magicUrl = url.toString();

    const sent = await sendMagicLinkEmail(
      email,
      magicUrl,
      user.full_name ?? undefined
    );

    if (!sent) {
      // Dev fallback — link is logged so the developer can complete sign-in
      console.log(`[DEV FALLBACK] Magic link for ${email}: ${magicUrl}`);
    }

    return NextResponse.json({
      success: true,
      message: "Sign-in link sent. Check your inbox.",
    });
  } catch (err) {
    console.error("send-magic-link error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
