import { DynamicIcon } from "@/components/ui/dynamic-icon"
import { PartnershipCard } from "@/components/ui/partnership-card"
import { PARTNERSHIPS } from "@/lib/constants"

export function PartnershipsSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <DynamicIcon name="Handshake" className="w-8 h-8 text-brand-gold" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Alianzas Estratégicas</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Construimos alianzas con empresas tecnológicas líderes para ampliar nuestro portafolio de soluciones y
            ofrecer el mejor servicio a nuestros clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PARTNERSHIPS.map((partnership) => (
            <PartnershipCard
              key={partnership.id}
              title={partnership.title}
              description={partnership.description}
              icon={partnership.icon}
              color={partnership.color}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
