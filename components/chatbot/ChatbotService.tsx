// ./ChatbotService.ts (para uso en el cliente)
export class ChatbotService {
  private static readonly URL = "/api/chatbot"; // ← proxy interno

  static async enviarMensaje(message: string): Promise<string> {
    const res = await fetch(this.URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data?.error ?? "Error en /api/chatbot");
    }
    if (typeof data === "object" && "reply" in data) {
      return data.reply as string;
    }
    // si tu n8n devuelve { id, reply, ... } esto funcionará
    throw new Error("Respuesta inesperada del proxy");
  }
}
