import { Badge } from "@/components/ui/badge"
import { TrainingCard } from "@/components/ui/training-card"
import { TRAINING_PROGRAMS } from "@/lib/constants"

export function TrainingSection() {
  return (
    <section id="formacion" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-brand-navy-medium/20 text-brand-navy-dark hover:bg-brand-navy-medium/20">
            Formación y Capacitación
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Programas de Formación en Tecnologías Emergentes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Capacitamos a tu equipo en las últimas tecnologías para maximizar el retorno de inversión en transformación
            digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRAINING_PROGRAMS.map((program) => (
            <TrainingCard
              key={program.id}
              title={program.title}
              description={program.description}
              duration={program.duration}
              modality={program.modality}
              icon={program.icon}
              color={program.color as any}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
