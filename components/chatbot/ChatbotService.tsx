// ./ChatbotService.ts (lado cliente)
export class ChatbotService {
  private static readonly URL = "https://juandada.app.n8n.cloud/webhook/chatbot";

  static async enviarMensaje(message: string): Promise<string> {
    const res = await fetch(this.URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    // lee como texto primero para evitar "Unexpected end of JSON input"
    const raw = await res.text();
    let data: any = null;
    try { data = raw ? JSON.parse(raw) : null; } catch { /* no JSON */ }

    if (!res.ok) {
      const msg = data?.error || raw || `HTTP ${res.status}`;
      throw new Error(msg);
    }

    // normalizado por el route: { reply: string } o similar
    if (data && typeof data === "object" && "reply" in data) {
      return String(data.reply ?? "");
    }
    if (typeof data === "string") return data; // por si el route devolviera string
    if (raw) return raw; // texto plano
    return ""; // vacío
  }
}
