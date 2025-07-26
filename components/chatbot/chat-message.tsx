"use client"

import { motion } from "framer-motion"
import { RobotMascot } from "@/components/ui/robot-mascot"

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

interface ChatMessageProps {
  message: Message
}

export function ChatMessage({ message }: ChatMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${message.isUser ? "justify-end" : "justify-start"} items-end space-x-2`}
    >
      {!message.isUser && (
        <div className="flex-shrink-0">
          <RobotMascot size="sm" animated={false} />
        </div>
      )}

      <div
        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
          message.isUser
            ? "bg-brand-gold text-brand-navy-dark rounded-br-sm"
            : "bg-gray-100 text-gray-900 rounded-bl-sm"
        }`}
      >
        <p className="text-sm leading-relaxed">{message.text}</p>
        <p className="text-xs opacity-70 mt-1">
          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </p>
      </div>

      {message.isUser && (
        <div className="flex-shrink-0 w-8 h-8 bg-brand-navy-dark rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-medium">U</span>
        </div>
      )}
    </motion.div>
  )
}
