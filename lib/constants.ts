export const COMPANY_INFO = {
  name: "AINNOVA",
  tagline: "AUTOMATIZA. INNOVA. ESCALA.",
  description:
    "Especializados en implementar soluciones de IA y agentes virtuales personalizados que optimizan procesos empresariales y aceleran la transformación digital.",
  contact: {
    email: " JOHN@AINNOVA.DEV",
    phone: "+57 (333) 333 3333",
    location: "Bogota, Colombia",
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
    title: "Desarrollo de Agentes Virtuales Personalizados",
    description:
      "Creamos agentes virtuales adaptados a las necesidades específicas de cada cliente, mejorando la interacción con los usuarios y optimizando procesos",
    icon: "Bot",
    color: "gold",
    features: ["Procesamiento de lenguaje natural", " Soluciones personalizadas", "Aprendizaje continuo"],
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
      pricing: "Solicita tu consultoria - Incluye desarrollo, hosting y mantenimiento",
    }
  },
  {
    id: "automation",
    title: "Automatización de Procesos Empresariales",
    description: "Implementamos soluciones de automatización que mejoran la eficiencia y reducen costos operativos.",
    icon: "Cog",
    color: "navy-medium",
    features: ["RPA (Robotic Process Automation)", " Aumento de la productividad", "Reducción de errores"],
    details: {
      overview:
        "Automatizamos tareas repetitivas y flujos operativos mediante tecnologías de RPA e integración de sistemas, aumentando la eficiencia y reduciendo errores humanos.",
      benefits: [
        "Incremento en la productividad operativa",
        "Reducción de errores y tiempos de ejecución",
        "Ahorro significativo en costos operativos",
        "Monitoreo y trazabilidad en tiempo real",
      ],
      technologies: ["UiPath", "Automation Anywhere", "Power Automate", "Zapier", "BPMN 2.0"],
      process: [
        "Identificación de procesos automatizables",
        "Mapeo de flujos y análisis de tareas",
        "Diseño e implementación de automatizaciones",
        "Pruebas con usuarios clave",
        "Despliegue y soporte continuo",
      ],
      pricing: "Planes personalizados según complejidad del proceso – Incluye análisis, desarrollo y soporte",
    }
  },
  {
    id: "bigdata",
    title: "Implementación de Soluciones de Big Data",
    description:
      "Plataformas avanzadas para el análisis de grandes volúmenes de datos y generación de insights estratégicos",
    icon: "BarChart3",
    color: "gold-dark",
    features: ["Toma de decisiones basada en datos", " Identificación de oportunidades de negocio", "Machine Learning"],
    details: {
      overview:
        "Diseñamos e implementamos arquitecturas de Big Data para recopilar, procesar y analizar grandes volúmenes de datos, impulsando decisiones basadas en evidencia.",
      benefits: [
        "Toma de decisiones más rápida y precisa",
        "Visualización de datos en tiempo real",
        "Escalabilidad para grandes volúmenes de datos",
        "Integración con múltiples fuentes internas y externas",
      ],
      technologies: ["Apache Hadoop", "Apache Spark", "Kafka", "AWS Redshift", "Google BigQuery"],
      process: [
        "Evaluación de necesidades y fuentes de datos",
        "Diseño de arquitectura Big Data",
        "Implementación de pipelines de ingestión y procesamiento",
        "Desarrollo de dashboards y análisis",
        "Optimización y mantenimiento continuo",
      ],
      pricing: "Consultoría a medida – Precios basados en tamaño de la solución y volumen de datos",
    }
  },
  {
    id: "consultoria",
    title: "Consultoría en Transformación Digital",
    description: "Ofrecemos asesoramiento estratégico para la adopción de soluciones tecnológicas que optimizan los procesos de negocio.",
    icon: "Lightbulb",
    color: "navy-dark",
    features: ["Capacitación y soporte constante", " Adaptación a las nuevas tecnologías", " Estrategia clara y medible"],
    details: {
      overview:
        "Acompañamos a las organizaciones en su transición hacia modelos digitales, alineando procesos, cultura y tecnología para aumentar su competitividad.",
      benefits: [
        "Visión estratégica y roadmap digital",
        "Optimización de procesos y estructura organizacional",
        "Adopción de nuevas tecnologías con menor riesgo",
        "Mejora en la experiencia de clientes y colaboradores",
      ],
      technologies: ["Microsoft 365", "SAP", "Salesforce", "Google Workspace", "AI & RPA Tools"],
      process: [
        "Diagnóstico digital de la organización",
        "Diseño de estrategia de transformación",
        "Priorización de iniciativas y tecnologías",
        "Gestión del cambio y capacitación",
        "Evaluación de impacto y mejora continua",
      ],
      pricing: "Consultoría modular – Desde sesiones estratégicas hasta acompañamiento integral",
    }
  },
  {
    id: "customer-experience",
    title: "Capacitación en Inteligencia Artificial",
    description:
      "Ofrecemos programas de formación para que las empresas comprendan y adopten la inteligencia artificial en sus procesos.",
    icon: "Users",
    color: "navy-medium",
    features: [" Formación práctica y teórica", " Mejora en las habilidades del personal", " Capacitación continua para actualización"],
    details: {
      overview:
        "Ofrecemos programas de formación personalizados para empresas que desean capacitar a sus equipos en herramientas y conceptos clave de la Inteligencia Artificial.",
      benefits: [
        "Desarrollo de talento interno en IA",
        "Cursos adaptados a nivel y sector",
        "Formadores con experiencia práctica",
        "Materiales y ejercicios aplicados a casos reales",
      ],
      technologies: ["Python", "TensorFlow", "OpenAI", "scikit-learn", "Power BI"],
      process: [
        "Evaluación de nivel y necesidades de formación",
        "Diseño del plan de capacitación",
        "Desarrollo de contenido y sesiones interactivas",
        "Aplicación práctica con datos reales",
        "Evaluación final y seguimiento post-curso",
      ],
      pricing: "Planes por grupo o por persona – Incluye contenido, sesiones y materiales descargables",
    }
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
