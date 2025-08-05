"use client"

import { motion, animate, easeInOut } from "framer-motion"
import Image from "next/image"

interface RobotMascotProps {
  size?: "sm" | "md" | "lg" | "xl"
  animated?: boolean
  className?: string
}

export function RobotMascot({ size = "md", animated = true, className = "" }: RobotMascotProps) {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
    xl: "w-48 h-48",
  }

  const floatingAnimation = animated
    ? {
        y: [0, -8, 0],
        transition: {
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: easeInOut,
        },
      }
    : {}

  const pulseAnimation = animated
    ? {
        scale: [1, 1.05, 1],
        transition: {
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: easeInOut,
        },
      }
    : {}

  return (
    <motion.div
      className={`${sizeClasses[size]} ${className} relative`}
      animate={floatingAnimation}
      whileHover={animated ? { scale: 1.1, rotate: [0, -5, 5, 0] } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div animate={pulseAnimation}>
        <Image
          src="/images/robot-dog-mascot.png"
          alt="Nova - Mascota robótica de AInnova"
          width={200}
          height={200}
          className="w-full h-full object-contain"
          priority
        />
      </motion.div>
    </motion.div>
  )
}
