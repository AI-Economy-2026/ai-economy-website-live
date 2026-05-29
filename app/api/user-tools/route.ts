import { NextRequest, NextResponse } from "next/server";
import { getSessionUser } from "@/lib/session";
import {
  getUserTools,
  upsertUserTool,
  deleteUserTool,
} from "@/lib/db";

export async function GET() {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const tools = await getUserTools(user.id);
    return NextResponse.json({ tools });
  } catch (err) {
    console.error("user-tools GET error:", err);
    return NextResponse.json({ error: "Failed to load tools" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const body = await req.json();
    const toolName = typeof body?.tool_name === "string" ? body.tool_name.trim() : "";
    const isCurated = body?.is_curated === true;
    const customData =
      body?.custom_data && typeof body.custom_data === "object"
        ? (body.custom_data as Record<string, unknown>)
        : null;

    if (!toolName) {
      return NextResponse.json({ error: "tool_name required" }, { status: 400 });
    }

    await upsertUserTool(user.id, toolName, isCurated, customData);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("user-tools POST error:", err);
    return NextResponse.json({ error: "Failed to save tool" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const toolName = req.nextUrl.searchParams.get("name");
    if (!toolName) {
      return NextResponse.json({ error: "name query param required" }, { status: 400 });
    }
    await deleteUserTool(user.id, toolName);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("user-tools DELETE error:", err);
    return NextResponse.json({ error: "Failed to delete tool" }, { status: 500 });
  }
}
