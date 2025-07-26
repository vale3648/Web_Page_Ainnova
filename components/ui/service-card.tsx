"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DynamicIcon } from "@/components/ui/dynamic-icon"
import { getColorClasses, type ColorVariant } from "@/lib/colors"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  color: ColorVariant
  features: string[]
  onViewDetails?: () => void
}

export function ServiceCard({ title, description, icon, color, features, onViewDetails }: ServiceCardProps) {
  const colorClasses = getColorClasses(color)

  return (
    <motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300, damping: 30 }}>
      <Card className="h-full bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between mb-4">
            <motion.div
              className={`w-14 h-14 ${colorClasses.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              whileHover={{ rotate: 5 }}
            >
              <DynamicIcon name={icon} className={`w-7 h-7 ${colorClasses.text}`} />
            </motion.div>

            <motion.div
              className="w-2 h-2 bg-brand-gold rounded-full opacity-60"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>

          <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-brand-navy-dark transition-colors duration-300">
            {title}
          </CardTitle>

          <CardDescription className="text-gray-600 leading-relaxed">{description}</CardDescription>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col">
          <div className="space-y-3 flex-1 mb-6">
            {features.slice(0, 3).map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center text-sm text-gray-600"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-3 flex-shrink-0" />
                {feature}
              </motion.div>
            ))}
          </div>

          <Button
            variant="ghost"
            className="w-full justify-between text-brand-navy-dark hover:text-brand-gold hover:bg-brand-gold/5 font-medium rounded-xl transition-all duration-300"
            onClick={onViewDetails}
            disabled={!onViewDetails}
          >
            Ver detalles
            <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
              <DynamicIcon name="ArrowRight" className="w-4 h-4" />
            </motion.div>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
