"use client"

import { motion } from "framer-motion"
import { DynamicIcon } from "@/components/ui/dynamic-icon"
import { RobotMascot } from "@/components/ui/robot-mascot"

const productFeatures = [
  {
    title: "Soluciones Modulares",
    description: "Componentes reutilizables que se adaptan a diferentes industrias",
    icon: "Puzzle",
  },
  {
    title: "Implementación Rápida",
    description: "Despliegue en semanas, no meses",
    icon: "ArrowRight",
  },
  {
    title: "Escalabilidad Automática",
    description: "Crecimiento sin límites técnicos",
    icon: "BarChart3",
  },
]

export function ScalableProductsSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-r from-brand-navy-dark to-brand-navy-darkest dark:from-brand-navy-darkest dark:to-brand-navy-dark text-white transition-colors duration-300">
      <div className="container mx-auto text-center max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex justify-center mb-8">
            <RobotMascot size="lg" animated={true} />
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Productos Digitales <span className="text-brand-gold">Escalables</span>
          </h2>

          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Diseñamos productos digitales que requieren mínima personalización, aumentando la escalabilidad y reduciendo
            los tiempos de implementación.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {productFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 dark:bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-brand-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <DynamicIcon name={feature.icon} className="w-6 h-6 text-brand-gold" />
              </div>
              <h3 className="font-bold text-xl mb-4">{feature.title}</h3>
              <p className="text-sm opacity-90 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
