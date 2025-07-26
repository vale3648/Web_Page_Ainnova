"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ServiceCard } from "@/components/ui/service-card"
import { ServiceDetailModal } from "@/components/ui/service-detail-modal"
import { SERVICES } from "@/lib/constants"
import type { ColorVariant } from "@/lib/colors"

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<(typeof SERVICES)[0] | null>(null)

  const handleViewDetails = (service: (typeof SERVICES)[0]) => {
    setSelectedService(service)
  }

  const handleCloseModal = () => {
    setSelectedService(null)
  }

  return (
    <section id="servicios" className="py-24 px-4 bg-gray-50/50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-brand-gold/10 text-brand-navy-dark text-sm font-medium rounded-full border border-brand-gold/20 mb-6">
            🚀 Nuestros Servicios
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Soluciones que <span className="text-brand-gold">transforman</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desarrollamos tecnologías avanzadas que se adaptan perfectamente a las necesidades específicas de tu empresa
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                color={service.color as ColorVariant}
                features={service.features}
                onViewDetails={() => handleViewDetails(service)}
              />
            </motion.div>
          ))}
        </div>

        {selectedService && (
          <ServiceDetailModal isOpen={!!selectedService} onClose={handleCloseModal} service={selectedService} />
        )}
      </div>
    </section>
  )
}
