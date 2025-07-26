export const colorVariants = {
  gold: {
    bg: "bg-brand-gold/20",
    text: "text-brand-gold",
    button: "bg-brand-gold hover:bg-brand-gold-dark text-brand-navy-dark",
  },
  "gold-dark": {
    bg: "bg-brand-gold-dark/20",
    text: "text-brand-gold-dark",
    button: "bg-brand-gold-dark hover:bg-brand-gold text-white",
  },
  "navy-dark": {
    bg: "bg-brand-navy-dark/20",
    text: "text-brand-navy-dark",
    button: "bg-brand-navy-dark hover:bg-brand-navy-darkest text-white",
  },
  "navy-medium": {
    bg: "bg-brand-navy-medium/20",
    text: "text-brand-navy-medium",
    button: "bg-brand-navy-medium hover:bg-brand-navy-dark text-white",
  },
} as const

export type ColorVariant = keyof typeof colorVariants

export const getColorClasses = (color: ColorVariant) => {
  return colorVariants[color] || colorVariants.gold
}
