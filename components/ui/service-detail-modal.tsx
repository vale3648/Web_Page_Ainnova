"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { DynamicIcon } from "@/components/ui/dynamic-icon"
import { ServiceDetailsTabs } from "@/components/ui/service-details-tabs"
import { getColorClasses, type ColorVariant } from "@/lib/colors"
import { useChatbot } from "@/components/chatbot/ChatbotContext"

interface ServiceDetailModalProps {
  isOpen: boolean
  onClose: () => void
  service: {
    title: string
    description: string
    icon: string
    color: ColorVariant
    details: {
      overview: string
      benefits: string[]
      technologies: string[]
      process: string[]
      pricing: string
    }
  }
}

export function ServiceDetailModal({ isOpen, onClose, service }: ServiceDetailModalProps) {
  const { openChat } = useChatbot()
  const colorClasses = getColorClasses(service.color)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-12 h-12 ${colorClasses.bg} rounded-lg flex items-center justify-center`}>
              <DynamicIcon name={service.icon} className={`w-6 h-6 ${colorClasses.text}`} />
            </div>
            <div>
              <DialogTitle className="text-2xl">{service.title}</DialogTitle>
              <DialogDescription className="text-base mt-1">{service.description}</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <ServiceDetailsTabs details={service.details} title={service.title} />

        <div className="flex gap-3 pt-4 border-t">
          <Button className={colorClasses.button} size="lg">
            Solicitar Cotización
            <DynamicIcon name="ArrowRight" className="ml-2 w-4 h-4" />
          </Button>
          <Button onClick={openChat} variant="outline" size="lg">
            Agendar Consulta
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
