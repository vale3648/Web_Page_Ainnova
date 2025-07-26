interface PartnershipCardProps {
  title: string
  description: string
  icon: string
  color: string
}

export function PartnershipCard({ title, description, icon, color }: PartnershipCardProps) {
  const colorClass =
    color === "gold"
      ? "bg-brand-gold/20 text-brand-gold-dark"
      : color === "navy-medium"
        ? "bg-brand-navy-medium/20 text-brand-navy-medium"
        : color === "gold-dark"
          ? "bg-brand-gold-dark/20 text-brand-gold-dark"
          : "bg-brand-gold/30 text-brand-gold-dark"

  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-sm">
      <div className={`w-12 h-12 ${colorClass} rounded-lg mx-auto mb-4 flex items-center justify-center`}>
        <span className="font-bold">{icon}</span>
      </div>
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}
