"use client"

import { motion } from "framer-motion"
import { DynamicIcon } from "@/components/ui/dynamic-icon"
import Image from "next/image"

const steps = [
  {
    number: "01",
    title: "Análisis Profundo",
    description: "Evaluamos tu infraestructura actual y identificamos oportunidades de mejora con IA avanzada",
    icon: "BarChart3",
  },
  {
    number: "02",
    title: "Estrategia Personalizada",
    description: "Diseñamos una hoja de ruta específica para tu transformación digital",
    icon: "Lightbulb",
  },
  {
    number: "03",
    title: "Implementación Ágil",
    description: "Desarrollamos e implementamos soluciones con metodologías ágiles",
    icon: "Cog",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 px-4 bg-white dark:bg-brand-navy-darkest transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-brand-gold/10 dark:bg-brand-gold/20 text-brand-navy-dark dark:text-brand-gold text-sm font-medium rounded-full border border-brand-gold/20 dark:border-brand-gold/30 mb-6">
            ⚡ Proceso Optimizado
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Cómo <span className="text-brand-gold">transformamos</span> tu empresa
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Un proceso probado que garantiza resultados excepcionales en tiempo récord
          </p>
        </motion.div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}
            >
              {/* Contenido */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-6">
                  <span className="text-6xl font-bold text-brand-gold/20 mr-4">{step.number}</span>
                  <div className="w-12 h-12 bg-brand-gold/10 dark:bg-brand-gold/20 rounded-2xl flex items-center justify-center">
                    <DynamicIcon name={step.icon} className="w-6 h-6 text-brand-gold" />
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{step.title}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">{step.description}</p>
              </div>

              {/* Visual con Nova */}
              <div className="flex-1 flex justify-center">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-64 h-64 bg-gradient-to-br from-brand-gold/5 to-brand-navy-dark/5 dark:from-brand-gold/10 dark:to-brand-navy-medium/10 rounded-3xl flex items-center justify-center relative overflow-hidden">
                    <div className="w-40 h-40 relative rounded-lg overflow-hidden">
                      <Image
                        src="/images/second-dog.png"
                        alt="Segunda mascota"
                        fill
                        className="object-contain"
                      />
                    </div>
                    {/* Elementos decorativos */}
                    <motion.div
                      className="absolute top-4 right-4 w-3 h-3 bg-brand-gold rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.5,
                      }}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
