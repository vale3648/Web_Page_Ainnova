"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { RobotMascot } from "@/components/ui/robot-mascot"
import { DynamicIcon } from "@/components/ui/dynamic-icon"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-white dark:bg-brand-navy-darkest transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido de texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 bg-brand-gold/10 dark:bg-brand-gold/20 text-brand-navy-dark dark:text-brand-gold text-sm font-medium rounded-full border border-brand-gold/20 dark:border-brand-gold/30 mb-6">
                Automatiza Innova Escala
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Impulsa tu empresa con <span className="text-brand-gold">AInnova</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Soluciones de inteligencia artificial que transforman procesos, optimizan operaciones y aceleran el
              crecimiento empresarial.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-brand-navy-dark hover:bg-brand-navy-darkest dark:bg-brand-gold dark:hover:bg-brand-gold-dark dark:text-brand-navy-dark text-white px-8 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Comenzar ahora
                <DynamicIcon name="ArrowRight" className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            {/* Stats minimalistas */}
            <motion.div
              className="flex gap-8 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
            </motion.div>
          </motion.div>

          {/* Lado visual con Nova */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            {/* Fondo decorativo */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-brand-navy-dark/5 dark:from-brand-gold/10 dark:to-brand-navy-medium/10 rounded-3xl" />

            {/* Círculos decorativos */}
            <motion.div
              className="absolute top-10 right-10 w-20 h-20 bg-brand-gold/20 dark:bg-brand-gold/30 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute bottom-10 left-10 w-16 h-16 bg-brand-navy-medium/20 dark:bg-brand-navy-medium/40 rounded-full blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            {/* Nova principal */}
            <div className="relative z-10 flex flex-col items-center space-y-6">
              <RobotMascot size="xl" animated={true} />

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <h3 className="text-2xl font-bold text-brand-navy-dark dark:text-brand-gold mb-2">Conoce a Nova</h3>
                <p className="text-gray-600 dark:text-gray-300">Tu asistente robótico para la transformación digital</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
