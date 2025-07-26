"use client"

import { useState, type KeyboardEvent } from "react"
import { Button } from "@/components/ui/button"
import { DynamicIcon } from "@/components/ui/dynamic-icon"

interface ChatInputProps {
  onSendMessage: (message: string) => void
  disabled?: boolean
}

export function ChatInput({ onSendMessage, disabled = false }: ChatInputProps) {
  const [message, setMessage] = useState("")

  const handleSend = () => {
    if (message.trim() && !disabled) {
      onSendMessage(message.trim())
      setMessage("")
    }
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="p-4 border-t border-gray-200 dark:border-brand-navy-dark bg-gray-50/50">
      <div className="flex space-x-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Escribe tu mensaje..."
          disabled={disabled}
          className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <Button
          onClick={handleSend}
          disabled={!message.trim() || disabled}
          size="sm"
          className="w-10 h-10 rounded-full bg-brand-gold hover:bg-brand-gold-dark text-brand-navy-dark p-0 disabled:opacity-50"
        >
          <DynamicIcon name="ArrowRight" className="w-4 h-4" />
        </Button>
      </div>

      {/* Sugerencias rápidas */}
      <div className="flex flex-wrap gap-2 mt-3">
        {["¿Qué servicios ofrecen?", "Quiero una consulta", "Precios"].map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => !disabled && onSendMessage(suggestion)}
            disabled={disabled}
            className="px-3 py-1 text-xs bg-white border border-gray-200 rounded-full hover:bg-brand-gold/10 hover:border-brand-gold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  )
}
