"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/lib/theme-context"
import { DynamicIcon } from "@/components/ui/dynamic-icon"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-8 bg-gray-200 dark:bg-brand-navy-dark rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-6 h-6 bg-white dark:bg-brand-gold rounded-full shadow-md flex items-center justify-center"
        animate={{
          x: theme === "dark" ? 24 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        <motion.div animate={{ rotate: theme === "dark" ? 180 : 0 }} transition={{ duration: 0.3 }}>
          {theme === "light" ? (
            <DynamicIcon name="Sun" className="w-4 h-4 text-brand-gold" />
          ) : (
            <DynamicIcon name="Moon" className="w-4 h-4 text-brand-navy-dark" />
          )}
        </motion.div>
      </motion.div>

      {/* Indicadores de estado */}
      <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
        <DynamicIcon name="Sun" className="w-3 h-3 text-brand-gold opacity-60" />
      </div>
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
        <DynamicIcon name="Moon" className="w-3 h-3 text-brand-navy-dark opacity-60" />
      </div>
    </motion.button>
  )
}
