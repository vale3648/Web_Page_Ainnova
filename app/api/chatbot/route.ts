// app/api/chatbot/route.ts
import { NextResponse } from "next/server";

// Si usas Edge en algún archivo, fuerza nodejs aquí:
export const runtime = "nodejs";          // <- opcional, pero recomendado

const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL;

export async function GET() {
  return NextResponse.json({
    ok: true,
    n8nConfigured: Boolean(N8N_WEBHOOK_URL), // no expone el valor
    hint: "Usa POST con { message }"
  });
}

export async function POST(req: Request) {
  try {
    if (!N8N_WEBHOOK_URL) {
      return NextResponse.json(
        { error: "Missing env N8N_WEBHOOK_URL" },
        { status: 500 }
      );
    }

    const payload = await req.json().catch(() => ({}));
    const upstream = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    const ct = upstream.headers.get("content-type") || "";
    const raw = await upstream.text();
    const parsed = raw && ct.includes("application/json") ? safeJson(raw) : null;

    if (!upstream.ok) {
      return NextResponse.json(
        { error: `Webhook ${upstream.status}`, details: raw || parsed },
        { status: 502 }
      );
    }

    if (parsed && typeof parsed === "object") return NextResponse.json(parsed, { status: 200 });
    if (!raw) return NextResponse.json({ reply: "" }, { status: 200 });
    return NextResponse.json({ reply: raw }, { status: 200 });
  } catch (e: any) {
    console.error("Proxy /api/chatbot error:", e);
    return NextResponse.json({ error: e?.message ?? "Proxy error" }, { status: 500 });
  }
}

function safeJson(s: string) {
  try { return JSON.parse(s); } catch { return null; }
}
