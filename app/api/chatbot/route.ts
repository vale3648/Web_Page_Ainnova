// app/api/chatbot/route.ts
import { NextResponse } from "next/server";

const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL!;

export async function GET() {
  return NextResponse.json({ ok: true, hint: "Usa POST con { message }" }, { status: 200 });
}

export async function POST(req: Request) {
  try {
    const payload = await req.json().catch(() => ({}));
    const upstream = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    const contentType = upstream.headers.get("content-type") || "";
    const raw = await upstream.text();
    const parsed = raw && contentType.includes("application/json") ? safeJson(raw) : null;

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
    return NextResponse.json({ error: e?.message ?? "Proxy error" }, { status: 500 });
  }
}

function safeJson(s: string) {
  try { return JSON.parse(s); } catch { return null; }
}
