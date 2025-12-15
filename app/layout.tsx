import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/lib/theme-context"
import { ChatbotProvider } from "@/components/chatbot/ChatbotContext"
import { ChatbotWidget } from "@/components/chatbot/chatbot-widget"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AInnova - Transformación Digital con IA",
  description: "Soluciones de inteligencia artificial que transforman empresas",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <ChatbotProvider>
            {children}
            <ChatbotWidget position="bottom-right" theme="brand" />
          </ChatbotProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}