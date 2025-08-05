import { AnimatedBackground } from "@/components/ui/animated-background"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { ProblemStatement } from "@/components/sections/problem-statement"
import { HowItWorks } from "@/components/sections/how-it-works"
import { ServicesSection } from "@/components/sections/services-section"
import { ConsultancySection } from "@/components/sections/consultancy-section"
import { ScalableProductsSection } from "@/components/sections/scalable-products-section"
import { ChatbotWidget } from "@/components/chatbot/chatbot-widget"

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Header />

      <main className="pt-20">
        <HeroSection />
        <ProblemStatement />
        <HowItWorks />
        <ServicesSection />
        <ConsultancySection />
        <ScalableProductsSection />
      </main>

      <Footer />

      {/* Chatbot Widget */}
      <ChatbotWidget position="bottom-right" theme="brand" />
    </div>
  )
}
