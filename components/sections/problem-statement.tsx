"use client"

import { motion } from "framer-motion"
import { DynamicIcon } from "@/components/ui/dynamic-icon"

const problems = [
  {
    icon: "Users",
    title: "Procesos Manuales Ineficientes",
    description: "Las empresas pierden tiempo valioso en tareas repetitivas que podrían automatizarse",
    color: "text-red-500",
  },
  {
    icon: "BarChart3",
    title: "Falta de Insights de Datos",
    description: "Los datos valiosos se quedan sin analizar, perdiendo oportunidades de negocio",
    color: "text-orange-500",
  },
  {
    icon: "Shield",
    title: "Vulnerabilidades de Seguridad",
    description: "Las amenazas cibernéticas evolucionan más rápido que las defensas tradicionales",
    color: "text-yellow-500",
  },
]

export function ProblemStatement() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Los Desafíos que Enfrentan las{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-gold-dark">
              Empresas Hoy
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En un mundo digital acelerado, las empresas luchan por mantenerse competitivas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gray-100 group-hover:bg-white transition-colors duration-300`}
                  >
                    <DynamicIcon name={problem.icon} className={`w-8 h-8 ${problem.color}`} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-brand-navy-dark transition-colors duration-300">
                    {problem.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">{problem.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-navy-dark mb-4">¿Te Suena Familiar?</h3>
            <p className="text-lg text-gray-700">
              Estos desafíos no tienen que definir tu futuro. Con las soluciones de IA adecuadas, puedes transformar
              estos obstáculos en ventajas competitivas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
