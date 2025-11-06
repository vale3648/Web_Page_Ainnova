// ./ChatbotService.ts
export class ChatbotService {
  private static readonly URL = "/api/chatbot"; // proxy interno

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

    // ✅ Ajuste para aceptar 'text' o 'reply'
    if (typeof data === "object" && (data.reply || data.text)) {
      return data.reply ?? data.text;
    }

    console.warn("Respuesta inesperada del backend:", data);
    throw new Error("Respuesta inesperada del proxy");
  }
}
