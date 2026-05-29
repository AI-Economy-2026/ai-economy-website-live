import { NextRequest, NextResponse } from "next/server";
import { getSessionUser } from "@/lib/session";
import { readFileSync } from "fs";
import { join } from "path";

// ── Load Sarah's knowledge base at startup (RAG context) ─────────────────────
let SARAH_KNOWLEDGE = "";
try {
  SARAH_KNOWLEDGE = readFileSync(
    join(process.cwd(), "content", "sarah-knowledge.md"),
    "utf-8"
  );
} catch {
  console.warn("sarah-knowledge.md not found — using minimal context");
  SARAH_KNOWLEDGE = "Sarah Balmer is an AI expert who helps business owners find the right AI tools.";
}

function buildSystemPrompt(): string {
  return `You are Ask Sarah — an AI assistant that speaks with the voice, knowledge, and personality of Sarah Balmer, founder of AI Economy.

Sarah's voice: Warm, direct, no-nonsense. She gives honest opinions, never sugarcoats, always ends with a specific actionable recommendation. She uses plain English, never jargon without explanation. She's encouraging but realistic.

Your role:
- Help users find the right AI tools for their specific business challenges
- Give honest, practical advice based on Sarah's tested experience
- Reference tools from the toolkit when relevant
- Be direct and actionable — no fluff, no filler
- Keep responses concise: 2–4 short paragraphs maximum
- Always end with one clear, specific recommendation or next step

IMPORTANT: Only recommend tools that are in Sarah's toolkit (documented below). If asked about a tool not in the toolkit, you can acknowledge it exists but steer back to what Sarah has personally tested.

---

${SARAH_KNOWLEDGE}

---

Remember: You are Sarah's AI assistant. Speak as if Sarah is answering. Be warm, be direct, be helpful.`;
}

export async function POST(req: NextRequest) {
  try {
    // Verify the user is authenticated
    const user = await getSessionUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { message, history = [] } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    // Build messages array with RAG-enriched system prompt
    const messages = [
      { role: "system", content: buildSystemPrompt() },
      // Keep last 8 exchanges (16 messages) for context window efficiency
      ...history.slice(-16),
      { role: "user", content: message },
    ];

    const apiKey = process.env.OPENAI_API_KEY;
    const baseUrl = process.env.OPENAI_BASE_URL ?? "https://api.openai.com/v1";
    const model = process.env.AI_MODEL ?? "gpt-4.1-mini";

    if (!apiKey) {
      return NextResponse.json(
        { error: "AI service is not configured." },
        { status: 503 }
      );
    }

    const res = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages,
        max_tokens: 600,
        temperature: 0.7,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("AI API error:", res.status, errText);
      // Surface a helpful message based on the error type
      let userMessage = "Sarah is taking a short break. Please try again in a moment.";
      try {
        const errJson = JSON.parse(errText);
        if (errJson?.error?.code === "invalid_api_key") {
          userMessage = "Sarah is currently unavailable. The AI service needs to be reconfigured — please contact support.";
        } else if (errJson?.error?.code === "insufficient_quota") {
          userMessage = "Sarah has reached her usage limit for today. Please try again tomorrow.";
        } else if (errJson?.error?.type === "tokens") {
          userMessage = "Your message was too long. Please try a shorter question.";
        }
      } catch { /* not JSON */ }
      return NextResponse.json(
        { error: userMessage },
        { status: 503 }
      );
    }

    const data = await res.json();
    const reply =
      data.choices?.[0]?.message?.content ??
      "I'm sorry, I couldn't generate a response. Please try again.";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("ask-sarah error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
