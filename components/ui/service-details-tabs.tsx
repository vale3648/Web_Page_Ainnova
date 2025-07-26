import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DynamicIcon } from "@/components/ui/dynamic-icon"

interface ServiceDetails {
  overview: string
  benefits: string[]
  technologies: string[]
  process: string[]
  pricing: string
}

interface ServiceDetailsTabsProps {
  details: ServiceDetails
  title: string
}

export function ServiceDetailsTabs({ details, title }: ServiceDetailsTabsProps) {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="overview">Resumen</TabsTrigger>
        <TabsTrigger value="benefits">Beneficios</TabsTrigger>
        <TabsTrigger value="tech">Tecnologías</TabsTrigger>
        <TabsTrigger value="process">Proceso</TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DynamicIcon name="Lightbulb" className="w-5 h-5 text-brand-gold" />
              ¿Qué incluye {title}?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 leading-relaxed">{details.overview}</p>
            <div className="mt-4 p-4 bg-brand-gold/10 rounded-lg">
              <p className="font-semibold text-brand-navy-dark mb-2">💰 Inversión:</p>
              <p className="text-gray-700">{details.pricing}</p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="benefits" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DynamicIcon name="CheckCircle" className="w-5 h-5 text-green-500" />
              Beneficios Clave
            </CardTitle>
            <CardDescription>Resultados que puedes esperar con nuestra solución</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {details.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <DynamicIcon name="CheckCircle" className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="tech" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DynamicIcon name="Cog" className="w-5 h-5 text-brand-navy-medium" />
              Stack Tecnológico
            </CardTitle>
            <CardDescription>Herramientas y tecnologías que utilizamos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {details.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="bg-brand-navy-dark/10 text-brand-navy-dark">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="process" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DynamicIcon name="ArrowRight" className="w-5 h-5 text-brand-gold" />
              Proceso de Implementación
            </CardTitle>
            <CardDescription>Pasos que seguimos para garantizar el éxito</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {details.process.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="pt-1">
                    <p className="text-gray-700">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
