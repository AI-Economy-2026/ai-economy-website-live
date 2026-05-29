import { NextResponse } from "next/server";
import { getSessionUser, destroySession } from "@/lib/session";

// GET /api/auth/session — return current user
export async function GET() {
  try {
    const user = await getSessionUser();

    if (!user) {
      return NextResponse.json({ user: null }, { status: 200 });
    }

    return NextResponse.json({ user });
  } catch (err) {
    console.error("session GET error:", err);
    return NextResponse.json({ user: null }, { status: 200 });
  }
}

// DELETE /api/auth/session — sign out
export async function DELETE() {
  try {
    await destroySession();
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("session DELETE error:", err);
    return NextResponse.json({ error: "Failed to sign out." }, { status: 500 });
  }
}
