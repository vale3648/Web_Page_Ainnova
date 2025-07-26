import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DynamicIcon } from "@/components/ui/dynamic-icon"

const consultancyFeatures = [
  {
    title: "Análisis de Madurez Digital",
    description: "Evaluamos el estado actual de tu empresa y definimos la hoja de ruta",
  },
  {
    title: "Estrategia de IA Personalizada",
    description: "Diseñamos estrategias de inteligencia artificial adaptadas a tu sector",
  },
  {
    title: "Implementación Gradual",
    description: "Acompañamiento continuo durante todo el proceso de transformación",
  },
]

export function ConsultancySection() {
  return (
    <section id="consultoria" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-brand-gold/20 text-brand-navy-dark hover:bg-brand-gold/20">
              Consultoría Estratégica
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Transformación Digital e Inteligencia Artificial
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Nuestro equipo de expertos te acompaña en cada paso de tu transformación digital, desde la estrategia
              inicial hasta la implementación completa de soluciones de IA.
            </p>
            <div className="space-y-4">
              {consultancyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <DynamicIcon name="CheckCircle" className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">¿Listo para transformar tu empresa?</h3>
            <p className="text-gray-600 mb-6">
              Solicita una consulta gratuita y descubre cómo la IA puede revolucionar tu negocio.
            </p>
            <Button className="w-full bg-brand-gold hover:bg-brand-gold-dark text-brand-navy-dark">
              Solicitar Consulta Gratuita
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
