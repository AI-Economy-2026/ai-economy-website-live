/**
 * Database layer using Supabase REST API (PostgREST)
 * Uses the service role key for server-side operations — bypasses RLS
 * No direct Postgres connection needed — works from any environment
 */

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

function getHeaders() {
  return {
    "Content-Type": "application/json",
    "apikey": SERVICE_ROLE_KEY,
    "Authorization": `Bearer ${SERVICE_ROLE_KEY}`,
    "Prefer": "return=representation",
  };
}

// ─── Generic REST helpers ──────────────────────────────────────────────────

async function restGet<T>(
  table: string,
  params: Record<string, string> = {}
): Promise<T[]> {
  const url = new URL(`${SUPABASE_URL}/rest/v1/${table}`);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));

  const res = await fetch(url.toString(), { headers: getHeaders() });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`DB GET ${table} failed: ${err}`);
  }
  return res.json();
}

async function restPost<T>(table: string, body: Record<string, unknown>): Promise<T> {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`DB POST ${table} failed: ${err}`);
  }
  const rows = await res.json();
  return Array.isArray(rows) ? rows[0] : rows;
}

async function restPatch(
  table: string,
  filter: Record<string, string>,
  body: Record<string, unknown>
): Promise<void> {
  const url = new URL(`${SUPABASE_URL}/rest/v1/${table}`);
  Object.entries(filter).forEach(([k, v]) => url.searchParams.set(k, `eq.${v}`));

  const res = await fetch(url.toString(), {
    method: "PATCH",
    headers: getHeaders(),
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`DB PATCH ${table} failed: ${err}`);
  }
}

async function restDelete(
  table: string,
  filter: Record<string, string>
): Promise<void> {
  const url = new URL(`${SUPABASE_URL}/rest/v1/${table}`);
  Object.entries(filter).forEach(([k, v]) => url.searchParams.set(k, `eq.${v}`));

  const res = await fetch(url.toString(), {
    method: "DELETE",
    headers: getHeaders(),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`DB DELETE ${table} failed: ${err}`);
  }
}

// ─── Domain-specific types ─────────────────────────────────────────────────

export interface DbUser {
  id: string;
  email: string;
  full_name: string | null;
  created_at: string;
}

export interface DbOtpCode {
  id: string;
  email: string;
  code: string;
  expires_at: string;
  used: boolean;
}

export interface DbSessionToken {
  id: string;
  user_id: string;
  token: string;
  expires_at: string;
}

export interface DbSubscription {
  id: string;
  user_id: string;
  status: string;
  product_type: string;
  current_period_end: string | null;
}

// ─── Users ─────────────────────────────────────────────────────────────────

export async function getUserByEmail(email: string): Promise<DbUser | null> {
  const rows = await restGet<DbUser>("users", { email: `eq.${email}` });
  return rows[0] ?? null;
}

export async function getUserById(id: string): Promise<DbUser | null> {
  const rows = await restGet<DbUser>("users", { id: `eq.${id}` });
  return rows[0] ?? null;
}

export async function createUser(email: string, fullName?: string): Promise<DbUser> {
  return restPost<DbUser>("users", {
    email,
    full_name: fullName ?? null,
  });
}

export async function upsertUser(email: string, fullName?: string): Promise<DbUser> {
  const existing = await getUserByEmail(email);
  if (existing) {
    if (fullName && !existing.full_name) {
      await restPatch("users", { email }, { full_name: fullName });
      return { ...existing, full_name: fullName };
    }
    return existing;
  }
  return createUser(email, fullName);
}

// ─── Magic Link Tokens (stored in otp_codes table) ─────────────────────────

const MAGIC_LINK_TTL_MS = 24 * 60 * 60 * 1000;

export async function createMagicLinkToken(
  email: string,
  token: string
): Promise<void> {
  // Invalidate any existing unused tokens for this email
  try {
    await restPatch("otp_codes", { email, used: "false" }, { used: true });
  } catch {
    // Ignore — no existing tokens is fine
  }

  await restPost("otp_codes", {
    email,
    code: token,
    expires_at: new Date(Date.now() + MAGIC_LINK_TTL_MS).toISOString(),
    used: false,
  });
}

export async function getValidMagicLinkToken(
  token: string
): Promise<DbOtpCode | null> {
  const now = new Date().toISOString();
  const rows = await restGet<DbOtpCode>("otp_codes", {
    code: `eq.${token}`,
    used: `eq.false`,
    expires_at: `gt.${now}`,
  });
  return rows[0] ?? null;
}

export async function markMagicLinkUsed(id: string): Promise<void> {
  await restPatch("otp_codes", { id }, { used: true });
}

// ─── Session Tokens ────────────────────────────────────────────────────────

export async function createSessionToken(
  userId: string,
  token: string
): Promise<void> {
  await restPost("session_tokens", {
    user_id: userId,
    token,
    expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
  });
}

export async function getSessionByToken(
  token: string
): Promise<DbSessionToken | null> {
  const now = new Date().toISOString();
  const rows = await restGet<DbSessionToken>("session_tokens", {
    token: `eq.${token}`,
    expires_at: `gt.${now}`,
  });
  return rows[0] ?? null;
}

export async function deleteSessionToken(token: string): Promise<void> {
  await restDelete("session_tokens", { token });
}

export async function deleteUserSessions(userId: string): Promise<void> {
  await restDelete("session_tokens", { user_id: userId });
}

// ─── Subscriptions ─────────────────────────────────────────────────────────

export async function getUserSubscriptions(
  userId: string
): Promise<DbSubscription[]> {
  return restGet<DbSubscription>("subscriptions", {
    user_id: `eq.${userId}`,
    status: `eq.active`,
  });
}

export async function upsertSubscription(
  userId: string,
  productType: string,
  thrivecartOrderId: string,
  thrivecartCustomerId?: string
): Promise<void> {
  const existing = await restGet<DbSubscription>("subscriptions", {
    user_id: `eq.${userId}`,
    product_type: `eq.${productType}`,
  });

  if (existing.length > 0) {
    await restPatch(
      "subscriptions",
      { user_id: userId, product_type: productType },
      {
        status: "active",
        thrivecart_order_id: thrivecartOrderId,
        thrivecart_customer_id: thrivecartCustomerId ?? null,
        updated_at: new Date().toISOString(),
      }
    );
  } else {
    await restPost("subscriptions", {
      user_id: userId,
      product_type: productType,
      status: "active",
      thrivecart_order_id: thrivecartOrderId,
      thrivecart_customer_id: thrivecartCustomerId ?? null,
    });
  }
}

// ─── User Tools (MYO stack — starred catalog tools + custom tools) ─────────

export interface DbUserTool {
  id: string;
  user_id: string;
  tool_name: string;
  is_curated: boolean;
  custom_data: Record<string, unknown> | null;
  created_at: string;
  updated_at: string;
}

export async function getUserTools(userId: string): Promise<DbUserTool[]> {
  return restGet<DbUserTool>("user_tools", {
    user_id: `eq.${userId}`,
    order: "created_at.asc",
  });
}

export async function upsertUserTool(
  userId: string,
  toolName: string,
  isCurated: boolean,
  customData: Record<string, unknown> | null = null,
): Promise<void> {
  const existing = await restGet<DbUserTool>("user_tools", {
    user_id: `eq.${userId}`,
    tool_name: `eq.${toolName}`,
  });

  if (existing.length > 0) {
    await restPatch(
      "user_tools",
      { id: existing[0].id },
      {
        is_curated: isCurated,
        custom_data: customData,
        updated_at: new Date().toISOString(),
      },
    );
  } else {
    await restPost("user_tools", {
      user_id: userId,
      tool_name: toolName,
      is_curated: isCurated,
      custom_data: customData,
    });
  }
}

export async function deleteUserTool(
  userId: string,
  toolName: string,
): Promise<void> {
  await restDelete("user_tools", {
    user_id: userId,
    tool_name: toolName,
  });
}
