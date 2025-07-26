"use client"

import { motion } from "framer-motion"
import { DynamicIcon } from "@/components/ui/dynamic-icon"
import { RobotMascot } from "@/components/ui/robot-mascot"
import { COMPANY_INFO } from "@/lib/constants"

const footerSections = {
  services: ["Chatbots Inteligentes", "Automatización", "Big Data Analytics", "CRM Personalizado"],
  company: ["Consultoría", "Formación", "Casos de Éxito", "Alianzas"],
}

export function Footer() {
  return (
    <footer
      id="contacto"
      className="bg-brand-navy-darkest dark:bg-brand-navy-darkest text-white py-16 px-4 transition-colors duration-300"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <motion.div
              className="flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <RobotMascot size="sm" animated={true} />
              <div>
                <h3 className="text-xl font-bold">{COMPANY_INFO.name}</h3>
                <p className="text-xs text-gray-400">con Rex</p>
              </div>
            </motion.div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Transformamos empresas a través de la inteligencia artificial y la innovación tecnológica, con Rex como
              nuestro compañero digital.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-brand-gold">Servicios</h4>
            <ul className="space-y-3 text-gray-400">
              {footerSections.services.map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5, color: "#C7AE6A" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="cursor-pointer"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-brand-gold">Empresa</h4>
            <ul className="space-y-3 text-gray-400">
              {footerSections.company.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5, color: "#C7AE6A" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="cursor-pointer"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-brand-gold">Contacto</h4>
            <div className="space-y-4 text-gray-400">
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <DynamicIcon name="Mail" className="w-4 h-4 text-brand-gold" />
                <span>{COMPANY_INFO.contact.email}</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <DynamicIcon name="Phone" className="w-4 h-4 text-brand-gold" />
                <span>{COMPANY_INFO.contact.phone}</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <DynamicIcon name="MapPin" className="w-4 h-4 text-brand-gold" />
                <span>{COMPANY_INFO.contact.location}</span>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 {COMPANY_INFO.name}. Todos los derechos reservados. Rex es nuestra mascota oficial. 🐕‍🦺</p>
        </div>
      </div>
    </footer>
  )
}
