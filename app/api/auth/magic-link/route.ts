import { NextRequest, NextResponse } from "next/server";
import {
  getValidMagicLinkToken,
  markMagicLinkUsed,
  getUserByEmail,
} from "@/lib/db";
import { createSession } from "@/lib/session";

const POST_LOGIN_PATH = "/dashboard";

function failureRedirect(req: NextRequest, reason: string): NextResponse {
  const url = new URL("/login", req.url);
  url.searchParams.set("error", reason);
  return NextResponse.redirect(url);
}

export async function GET(req: NextRequest) {
  try {
    const token = req.nextUrl.searchParams.get("token");

    if (!token) {
      return failureRedirect(req, "missing_token");
    }

    const record = await getValidMagicLinkToken(token);
    if (!record) {
      return failureRedirect(req, "invalid_or_expired");
    }

    // Mark used immediately so the link can't be replayed
    await markMagicLinkUsed(record.id);

    const user = await getUserByEmail(record.email);
    if (!user) {
      return failureRedirect(req, "account_not_found");
    }

    // createSession enforces single-session: prior tokens for this user are deleted
    await createSession(user.id);

    return NextResponse.redirect(new URL(POST_LOGIN_PATH, req.url));
  } catch (err) {
    console.error("magic-link GET error:", err);
    return failureRedirect(req, "server_error");
  }
}
