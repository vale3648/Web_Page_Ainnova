import {
  Bot,
  Cog,
  BarChart3,
  Users,
  Shield,
  Lightbulb,
  GraduationCap,
  Puzzle,
  Handshake,
  ArrowRight,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Sun,
  Moon,
  type LucideIcon,
} from "lucide-react"

const iconMap = {
  Bot,
  Cog,
  BarChart3,
  Users,
  Shield,
  Lightbulb,
  GraduationCap,
  Puzzle,
  Handshake,
  ArrowRight,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Sun,
  Moon,
} as const

type IconName = keyof typeof iconMap

interface DynamicIconProps {
  name: IconName | string
  className?: string
}

export function DynamicIcon({ name, className = "w-6 h-6" }: DynamicIconProps) {
  const IconComponent = iconMap[name as IconName] as LucideIcon

  if (!IconComponent) {
    return <span className={className}>{name}</span>
  }

  return <IconComponent className={className} />
}
