import { cookies } from "next/headers";
import crypto from "crypto";
import {
  getSessionByToken,
  getUserById,
  getUserSubscriptions,
  createSessionToken,
  deleteSessionToken,
  deleteUserSessions,
} from "./db";
import type { AuthUser } from "@/types";

const SESSION_COOKIE = "ae_session";
const SESSION_DURATION_DAYS = 30;

/**
 * Normalise product type strings so that "bump_prompts" is treated
 * identically to "start_right" throughout the app.
 */
function normaliseProductType(pt: string): string {
  if (pt === "bump_prompts") return "start_right";
  return pt;
}

/**
 * Get the current user from the session cookie.
 * Returns null if no valid session exists.
 */
export async function getSessionUser(): Promise<AuthUser | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;

  if (!token) return null;

  const session = await getSessionByToken(token);
  if (!session) return null;

  const user = await getUserById(session.user_id);
  if (!user) return null;

  const subscriptions = await getUserSubscriptions(user.id);
  const activeSub = subscriptions[0] ?? null;

  // Build a de-duplicated list of all owned product types
  const owned = Array.from(
    new Set(subscriptions.map((s) => normaliseProductType(s.product_type)))
  );

  return {
    id: user.id,
    email: user.email,
    full_name: user.full_name,
    created_at: user.created_at,
    subscription: {
      active: !!activeSub,
      product_type: activeSub ? normaliseProductType(activeSub.product_type) : null,
    },
    owned_products: owned,
  };
}

/**
 * Create a new session token in the database and set the cookie.
 */
export async function createSession(userId: string): Promise<string> {
  // Single-session: invalidate any prior active sessions for this user
  await deleteUserSessions(userId);

  const token = crypto.randomBytes(32).toString("hex");
  const expiresAt = new Date(
    Date.now() + SESSION_DURATION_DAYS * 24 * 60 * 60 * 1000
  );

  await createSessionToken(userId, token);

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: expiresAt,
    path: "/",
  });

  return token;
}

/**
 * Delete the session from the database and clear the cookie.
 */
export async function destroySession(): Promise<void> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;

  if (token) {
    await deleteSessionToken(token);
    cookieStore.delete(SESSION_COOKIE);
  }
}

/**
 * Get the raw session token from cookies (for middleware use).
 */
export function getSessionToken(cookieHeader: string | null): string | null {
  if (!cookieHeader) return null;
  const match = cookieHeader.match(new RegExp(`${SESSION_COOKIE}=([^;]+)`));
  return match?.[1] ?? null;
}
