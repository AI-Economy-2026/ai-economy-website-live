import { NextRequest, NextResponse } from "next/server";
import { getSessionByToken } from "@/lib/db";

const SESSION_COOKIE = "ae_session";

// Routes that require authentication
const PROTECTED_PATHS = [
  "/dashboard",
  "/ask-sarah",
  "/toolkit",
  "/start-right/access",
  "/sales/dashboard",
];

// Routes that should redirect to dashboard if already logged in
const AUTH_PATHS = ["/login"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionToken = request.cookies.get(SESSION_COOKIE)?.value;

  if (pathname === "/") {
    console.log(`[Home Page Visit] ${new Date().toISOString()} - IP: ${request.headers.get("x-forwarded-for") ?? request.headers.get("x-real-ip") ?? "unknown"}`);
  }

  // The public "AI Toolkit" entry point shows the Blueprint sales page, but the
  // URL must stay the same (/toolkit or /product/ai-toolkit) — so we REWRITE
  // (serve /sales content at the requested path) rather than redirect. Runs
  // BEFORE the auth gate; the deeper member pages (/toolkit/[id],
  // /toolkit/cluster) stay gated by PROTECTED_PATHS below.
  if (
    pathname === "/toolkit" ||
    pathname === "/product/ai-toolkit" ||
    pathname.startsWith("/product/ai-toolkit/")
  ) {
    return NextResponse.rewrite(new URL("/sales", request.url));
  }

  const isProtected = PROTECTED_PATHS.some((p) => pathname.startsWith(p));
  const isAuthPage = AUTH_PATHS.some((p) => pathname.startsWith(p));

  // Skip the DB check entirely for paths the middleware doesn't gate.
  if (!isProtected && !isAuthPage) {
    return NextResponse.next();
  }

  // Validate the cookie against the DB. A cookie left over from a logged-out
  // or single-session-evicted user must not pass middleware — otherwise
  // middleware (cookie present → /sales/dashboard) and the protected layout
  // (no DB session → /login) bounce each other forever.
  let isValid = false;
  if (sessionToken) {
    try {
      const session = await getSessionByToken(sessionToken);
      isValid = !!session;
    } catch {
      isValid = false;
    }
  }
  const hasStaleCookie = !!sessionToken && !isValid;

  if (isProtected && !isValid) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    const res = NextResponse.redirect(loginUrl);
    if (hasStaleCookie) res.cookies.delete(SESSION_COOKIE);
    return res;
  }

  if (isAuthPage && isValid) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // /login reached with a stale cookie — let the page render but clear the cookie.
  if (isAuthPage && hasStaleCookie) {
    const res = NextResponse.next();
    res.cookies.delete(SESSION_COOKIE);
    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths EXCEPT:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico
     * - public files
     * - api routes (handled separately)
     */
    "/((?!_next/static|_next/image|favicon.ico|api/|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
