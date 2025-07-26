import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DynamicIcon } from "@/components/ui/dynamic-icon"
import { getColorClasses, type ColorVariant } from "@/lib/colors"

interface TrainingCardProps {
  title: string
  description: string
  duration: string
  modality: string
  icon: string
  color: ColorVariant
}

export function TrainingCard({ title, description, duration, modality, icon, color }: TrainingCardProps) {
  const colorClasses = getColorClasses(color)

  return (
    <Card className="text-center hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className={`w-16 h-16 ${colorClasses.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
          <DynamicIcon name={icon} className={`w-8 h-8 ${colorClasses.text}`} />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className={`text-2xl font-bold ${colorClasses.text} mb-2`}>{duration}</div>
        <p className="text-sm text-gray-600">{modality}</p>
      </CardContent>
    </Card>
  )
}
