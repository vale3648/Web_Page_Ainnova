"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { DynamicIcon } from "@/components/ui/dynamic-icon"
import Image from "next/image"
import { ChatMessage } from "./chat-message"
import { ChatInput } from "./chat-input"

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

interface ChatbotWidgetProps {
  position?: "bottom-right" | "bottom-left" | "bottom-center"
  theme?: "light" | "dark" | "brand"
}

export function ChatbotWidget({ position = "bottom-right", theme = "brand" }: ChatbotWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "¡Hola! Soy Nova, tu asistente de IA. ¿En qué puedo ayudarte hoy?",
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser: true,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setIsTyping(true)

    // Aquí es donde integrarías tu API del chatbot
    // Por ahora simulo una respuesta
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(text),
        isUser: false,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  // Función temporal para simular respuestas - reemplaza con tu lógica
  const getBotResponse = (userMessage: string): string => {
    const responses = [
      "Interesante pregunta. Nuestros servicios de IA pueden ayudarte con eso.",
      "Te puedo conectar con un especialista para discutir tu proyecto específico.",
      "Basándome en tu consulta, creo que nuestras soluciones de automatización serían perfectas.",
      "¿Te gustaría agendar una consulta gratuita para explorar las opciones?",
    ]
    return responses[Math.floor(Math.random() * responses.length)]
  }

  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "bottom-center": "bottom-6 left-1/2 transform -translate-x-1/2",
  }

  const themeClasses = {
    light: "bg-white border-gray-200 text-gray-900",
    dark: "bg-brand-navy-darkest border-brand-navy-dark text-white",
    brand: "bg-gradient-to-br from-white to-brand-gold/5 border-brand-gold/20 text-gray-900",
  }

  return (
    <div className={`fixed ${positionClasses[position]} z-50`}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`mb-4 w-80 h-96 rounded-2xl border shadow-2xl ${themeClasses[theme]} flex flex-col overflow-hidden`}
          >
            {/* Header del chat */}
            <div className="p-4 border-b border-gray-200 dark:border-brand-navy-dark bg-brand-gold/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Image
                    src="/images/second-dog.png"
                    alt="Bot Logo"
                    width={28}
                    height={28}
                    className="rounded"
                  />
                  <div>
                    <h3 className="font-semibold text-brand-navy-dark">Nova AI Assistant</h3>
                    <p className="text-xs text-gray-600">En línea</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 p-0 hover:bg-gray-100"
                >
                  <DynamicIcon name="X" className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Área de mensajes */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2"
                >
                  <Image
                    src="/images/second-dog.png"
                    alt="Bot Logo"
                    width={28}
                    height={28}
                    className="rounded"
                  />
                  <div className="bg-gray-100 rounded-2xl px-4 py-2">
                    <div className="flex space-x-1">
                      <motion.div
                        className="w-2 h-2 bg-brand-gold rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-brand-gold rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-brand-gold rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input del chat */}
            <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón flotante */}
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="relative">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-brand-gold hover:bg-brand-gold-dark text-brand-navy-dark shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <DynamicIcon name="X" className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/images/second-dog.png"
                  alt="Bot Logo"
                  fill
                  className="object-contain"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>

        {/* Indicador de notificación */}
        {!isOpen && (
          <motion.div
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <span className="text-xs text-white font-bold">1</span>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
