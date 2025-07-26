"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { DynamicIcon } from "@/components/ui/dynamic-icon"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { NAVIGATION_ITEMS } from "@/lib/constants"

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-brand-navy-darkest/90 backdrop-blur-md border-b border-gray-100 dark:border-brand-navy-dark"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Logo original - SIN CAMBIOS */}
          <div className="w-8 h-8 bg-gradient-to-br from-brand-gold to-brand-gold-dark rounded-lg flex items-center justify-center">
            <DynamicIcon name="Bot" className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">AInova</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">Transformación Digital</p>
          </div>
        </motion.div>

        <nav className="hidden md:flex space-x-8">
          {NAVIGATION_ITEMS.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="text-gray-600 dark:text-gray-300 hover:text-brand-gold dark:hover:text-brand-gold transition-colors font-medium relative"
              whileHover={{ y: -1 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-brand-navy-dark hover:bg-brand-navy-darkest dark:bg-brand-gold dark:hover:bg-brand-gold-dark dark:text-brand-navy-dark text-white px-6 py-2 rounded-xl font-medium shadow-sm">
              Contactar
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}
