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
      text: config.welcomeMessage || "¡Hola! Soy Rex, tu asistente de IA. ¿En qué puedo ayudarte hoy?",
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
        // Aquí integrarías tu API real
        // const response = await fetch(config.apiEndpoint, {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //     'Authorization': `Bearer ${config.apiKey}`
        //   },
        //   body: JSON.stringify({ message: text })
        // })
        // const data = await response.json()

        // Simulación temporal
        await new Promise((resolve) => setTimeout(resolve, 1500))

        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: getBotResponse(text),
          isUser: false,
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, botResponse])
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
        text: config.welcomeMessage || "¡Hola! Soy Rex, tu asistente de IA. ¿En qué puedo ayudarte hoy?",
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

// Función temporal para respuestas - reemplaza con tu lógica
function getBotResponse(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase()

  if (lowerMessage.includes("servicio") || lowerMessage.includes("qué hacen")) {
    return "Ofrecemos soluciones de IA como chatbots, automatización de procesos, análisis de Big Data, CRM personalizado y ciberseguridad. ¿Te interesa algún servicio en particular?"
  }

  if (lowerMessage.includes("precio") || lowerMessage.includes("costo")) {
    return "Nuestros precios varían según el proyecto. Los chatbots empiezan desde $2,500/mes. ¿Te gustaría agendar una consulta gratuita para un presupuesto personalizado?"
  }

  if (lowerMessage.includes("consulta") || lowerMessage.includes("reunión")) {
    return "¡Perfecto! Puedes agendar una consulta gratuita. Te conectaré con uno de nuestros especialistas. ¿Cuál es tu disponibilidad?"
  }

  return "Interesante pregunta. Nuestro equipo puede ayudarte con eso. ¿Te gustaría que te conecte con un especialista para discutir tu proyecto específico?"
}
