"use client"

import { useState, useCallback } from "react"

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

interface ChatbotConfig {
  apiEndpoint?: string
  apiKey?: string
  welcomeMessage?: string
}

export function useChatbot(config: ChatbotConfig = {}) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: config.welcomeMessage || "¡Hola! Soy Nova, tu asistente de IA. ¿En qué puedo ayudarte hoy?",
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const [isConnected, setIsConnected] = useState(true)

  const sendMessage = useCallback(
    async (text: string) => {
      const userMessage: Message = {
        id: Date.now().toString(),
        text,
        isUser: true,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, userMessage])
      setIsTyping(true)

      try {
        // llamada real a n8n sin API Key
        const res = await fetch(config.apiEndpoint!, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: text }),
        });

        if (!res.ok) {
          throw new Error("Error de conexión con el servidor");
        }

        const data = await res.json(); // { id, reply }

        const botResponse: Message = {
          id: data.id || (Date.now() + 1).toString(),
          text: data.reply || "Respuesta vacía.",
          isUser: false,
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, botResponse]);

      } catch (error) {
        console.error("Error sending message:", error)
        setIsConnected(false)
      } finally {
        setIsTyping(false)
      }
    },
    [config.apiEndpoint, config.apiKey],
  )

  const clearChat = useCallback(() => {
    setMessages([
      {
        id: "welcome",
        text: config.welcomeMessage || "¡Hola! Soy Nova, tu asistente de IA. ¿En qué puedo ayudarte hoy?",
        isUser: false,
        timestamp: new Date(),
      },
    ])
  }, [config.welcomeMessage])

  return {
    messages,
    isTyping,
    isConnected,
    sendMessage,
    clearChat,
  }
}
