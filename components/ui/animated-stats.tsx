"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

interface StatProps {
  value: string
  label: string
  delay?: number
}

function AnimatedStat({ value, label, delay = 0 }: StatProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState("0")

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setDisplayValue(value)
      }, delay)
      return () => clearTimeout(timer)
    }
  }, [isInView, value, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="text-center"
    >
      <motion.div
        className="text-4xl md:text-5xl font-bold text-brand-gold mb-2"
        animate={isInView ? { scale: [1, 1.1, 1] } : { scale: 1 }}
        transition={{ duration: 0.5, delay: (delay + 300) / 1000 }}
      >
        {displayValue}
      </motion.div>
      <p className="text-gray-600 font-medium">{label}</p>
    </motion.div>
  )
}

export function AnimatedStats() {
  return (
    <section className="py-16 px-4 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Resultados que Hablan por Sí Solos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nuestras soluciones de IA han transformado empresas en todo el mundo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <AnimatedStat value="15x" label="Mayor Tasa de Conversión" delay={200} />
          <AnimatedStat value="80%" label="Menos Tiempo de Prospección" delay={400} />
          <AnimatedStat value="78%" label="Mejor Rendimiento en Ventas" delay={600} />
        </div>
      </div>
    </section>
  )
}
