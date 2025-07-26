export const COMPANY_INFO = {
  name: "TechTransform AI",
  tagline: "Transformación Digital Empresarial",
  description:
    "Especializados en implementar soluciones de IA y agentes virtuales personalizados que optimizan procesos empresariales y aceleran la transformación digital.",
  contact: {
    email: "info@techtransform.ai",
    phone: "+1 (555) 123-4567",
    location: "Madrid, España",
  },
}

export const NAVIGATION_ITEMS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#consultoria", label: "Consultoría" },
  { href: "#formacion", label: "Formación" },
  { href: "#contacto", label: "Contacto" },
]

export const SERVICES = [
  {
    id: "chatbots",
    title: "Chatbots y Agentes Virtuales",
    description:
      "Agentes inteligentes personalizados que automatizan la atención al cliente y optimizan la comunicación empresarial",
    icon: "Bot",
    color: "gold",
    features: ["Procesamiento de lenguaje natural", "Integración multicanal", "Aprendizaje continuo"],
    details: {
      overview:
        "Desarrollamos chatbots inteligentes que comprenden el contexto y proporcionan respuestas precisas, mejorando la experiencia del cliente las 24/7.",
      benefits: [
        "Reducción del 70% en tiempo de respuesta",
        "Atención 24/7 sin interrupciones",
        "Escalabilidad automática según demanda",
        "Integración con sistemas existentes",
      ],
      technologies: ["OpenAI GPT", "Microsoft Bot Framework", "Dialogflow", "Rasa", "WhatsApp Business API"],
      process: [
        "Análisis de necesidades y casos de uso",
        "Diseño de flujos conversacionales",
        "Desarrollo y entrenamiento del modelo",
        "Integración con sistemas existentes",
        "Testing y optimización continua",
      ],
      pricing: "Desde $2,500/mes - Incluye desarrollo, hosting y mantenimiento",
    },
  },
  {
    id: "automation",
    title: "Automatización de Procesos",
    description: "Optimización y automatización de procesos empresariales para aumentar la eficiencia operativa",
    icon: "Cog",
    color: "navy-medium",
    features: ["RPA (Robotic Process Automation)", "Workflows inteligentes", "Reducción de errores"],
    details: {
      overview:
        "Automatizamos procesos repetitivos y complejos, liberando a tu equipo para tareas de mayor valor estratégico.",
      benefits: [
        "Reducción del 80% en tareas manuales",
        "Eliminación de errores humanos",
        "ROI visible en 3-6 meses",
        "Mejora en satisfacción del empleado",
      ],
      technologies: ["UiPath", "Blue Prism", "Automation Anywhere", "Microsoft Power Automate", "Zapier"],
      process: [
        "Mapeo de procesos actuales",
        "Identificación de oportunidades de automatización",
        "Desarrollo de bots y workflows",
        "Implementación gradual",
        "Monitoreo y optimización",
      ],
      pricing: "Desde $5,000 por proceso - Incluye análisis, desarrollo e implementación",
    },
  },
  {
    id: "bigdata",
    title: "Análisis de Big Data",
    description:
      "Plataformas avanzadas para el análisis de grandes volúmenes de datos y generación de insights estratégicos",
    icon: "BarChart3",
    color: "gold-dark",
    features: ["Análisis predictivo", "Dashboards interactivos", "Machine Learning"],
    details: {
      overview:
        "Transformamos tus datos en insights accionables mediante análisis avanzado y visualizaciones intuitivas.",
      benefits: [
        "Decisiones basadas en datos reales",
        "Predicción de tendencias futuras",
        "Identificación de oportunidades ocultas",
        "Optimización de recursos y costos",
      ],
      technologies: ["Python", "R", "Tableau", "Power BI", "Apache Spark", "TensorFlow", "AWS/Azure ML"],
      process: [
        "Auditoría de fuentes de datos",
        "Limpieza y preparación de datos",
        "Desarrollo de modelos predictivos",
        "Creación de dashboards ejecutivos",
        "Implementación de alertas automáticas",
      ],
      pricing: "Desde $8,000 - Proyecto completo con dashboards y modelos predictivos",
    },
  },
  {
    id: "crm",
    title: "Sistemas CRM Personalizados",
    description: "Soluciones CRM adaptadas a tu modelo de negocio para optimizar la gestión de relaciones con clientes",
    icon: "Users",
    color: "navy-dark",
    features: ["Gestión de leads", "Automatización de ventas", "Análisis de comportamiento"],
    details: {
      overview: "Desarrollamos CRM personalizados que se adaptan perfectamente a tus procesos de ventas y marketing.",
      benefits: [
        "Aumento del 40% en conversión de leads",
        "Visibilidad completa del pipeline",
        "Automatización de seguimientos",
        "Integración con herramientas existentes",
      ],
      technologies: ["Salesforce", "HubSpot", "Microsoft Dynamics", "Custom Development", "API Integrations"],
      process: [
        "Análisis de procesos de ventas actuales",
        "Diseño de arquitectura personalizada",
        "Desarrollo e integración",
        "Migración de datos existentes",
        "Capacitación y soporte continuo",
      ],
      pricing: "Desde $12,000 - Incluye desarrollo, migración y capacitación",
    },
  },
  {
    id: "security",
    title: "Ciberseguridad",
    description:
      "Soluciones integrales de seguridad digital para proteger tu empresa y mejorar la experiencia del cliente",
    icon: "Shield",
    color: "gold",
    features: ["Detección de amenazas", "Protección de datos", "Cumplimiento normativo"],
    details: {
      overview:
        "Protegemos tu infraestructura digital con soluciones de seguridad de última generación y monitoreo 24/7.",
      benefits: [
        "Protección contra amenazas avanzadas",
        "Cumplimiento de normativas (GDPR, LOPD)",
        "Monitoreo continuo 24/7",
        "Respuesta rápida ante incidentes",
      ],
      technologies: ["Firewall NG", "SIEM", "EDR/XDR", "Zero Trust", "Penetration Testing", "ISO 27001"],
      process: [
        "Auditoría de seguridad inicial",
        "Identificación de vulnerabilidades",
        "Implementación de controles",
        "Monitoreo y detección continua",
        "Respuesta a incidentes y mejora continua",
      ],
      pricing: "Desde $6,000/mes - Incluye monitoreo 24/7 y respuesta a incidentes",
    },
  },
  {
    id: "customer-experience",
    title: "Experiencia del Cliente",
    description:
      "Optimización de la experiencia del cliente mediante tecnologías innovadoras y análisis de comportamiento",
    icon: "Lightbulb",
    color: "navy-medium",
    features: ["Personalización IA", "Journey mapping", "Feedback inteligente"],
    details: {
      overview:
        "Mejoramos cada punto de contacto con tus clientes mediante análisis de comportamiento y personalización inteligente.",
      benefits: [
        "Aumento del 60% en satisfacción del cliente",
        "Reducción del 45% en abandono",
        "Personalización en tiempo real",
        "Insights profundos del comportamiento",
      ],
      technologies: ["Adobe Experience Cloud", "Segment", "Hotjar", "Google Analytics 4", "Custom AI Models"],
      process: [
        "Mapeo del customer journey actual",
        "Identificación de puntos de fricción",
        "Implementación de mejoras tecnológicas",
        "A/B testing y optimización",
        "Monitoreo continuo de métricas",
      ],
      pricing: "Desde $4,500/mes - Incluye análisis, implementación y optimización continua",
    },
  },
]

export const TRAINING_PROGRAMS = [
  {
    id: "ai-fundamentals",
    title: "Fundamentos de IA",
    description: "Curso introductorio sobre inteligencia artificial y sus aplicaciones empresariales",
    duration: "40 horas",
    modality: "Modalidad presencial y virtual",
    icon: "GraduationCap",
    color: "gold",
  },
  {
    id: "chatbot-development",
    title: "Desarrollo de Chatbots",
    description: "Aprende a crear y gestionar chatbots inteligentes para tu empresa",
    duration: "60 horas",
    modality: "Incluye proyecto práctico",
    icon: "Bot",
    color: "navy-medium",
  },
  {
    id: "data-analysis",
    title: "Análisis de Datos",
    description: "Domina las herramientas de análisis de datos y business intelligence",
    duration: "80 horas",
    modality: "Certificación incluida",
    icon: "BarChart3",
    color: "gold-dark",
  },
]

export const PARTNERSHIPS = [
  {
    id: "ai-providers",
    title: "Proveedores de IA",
    description: "Acceso a las últimas tecnologías de inteligencia artificial",
    icon: "AI",
    color: "gold",
  },
  {
    id: "cloud-partners",
    title: "Cloud Partners",
    description: "Infraestructura escalable y segura en la nube",
    icon: "☁",
    color: "navy-medium",
  },
  {
    id: "tech-startups",
    title: "Tech Startups",
    description: "Innovación y agilidad en desarrollo",
    icon: "⚡",
    color: "gold-dark",
  },
  {
    id: "enterprise",
    title: "Enterprise",
    description: "Soluciones empresariales robustas",
    icon: "🏢",
    color: "gold",
  },
]
