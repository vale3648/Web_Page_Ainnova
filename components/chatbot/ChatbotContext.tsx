"use client"

import { createContext, useContext, useState } from "react"

interface ChatbotContextType {
  isOpen: boolean
  openChat: () => void
  closeChat: () => void
  toggleChat: () => void
}

const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined)

export function ChatbotProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openChat = () => setIsOpen(true)
  const closeChat = () => setIsOpen(false)
  const toggleChat = () => setIsOpen(prev => !prev)

  return (
    <ChatbotContext.Provider value={{ isOpen, openChat, closeChat, toggleChat }}>
      {children}
    </ChatbotContext.Provider>
  )
}

export function useChatbot() {
  const context = useContext(ChatbotContext)
  if (!context) {
    throw new Error("useChatbot debe usarse dentro de ChatbotProvider")
  }
  return context
}