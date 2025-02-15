import { Service } from "../types/service"
import { Mountain, Camera, Trees, Book, Users, Compass } from "lucide-react"

export const services: Service[] = [
  {
    icon: Mountain,
    title: "Senderismo",
    description: "Explora nuestros senderos naturales guiados por expertos locales. Descubre la flora y fauna única de la región mientras aprendes sobre la importancia de su conservación.",
    image: "/images/hiking.jpg"
  },
  {
    icon: Camera,
    title: "Fotografía",
    description: "Captura la belleza natural de El Buchen con nuestros tours fotográficos. Perfectos tanto para principiantes como para fotógrafos experimentados.",
    image: "/images/photography.jpg"
  },
  {
    icon: Trees,
    title: "Conservación",
    description: "Participa en nuestros proyectos de conservación y aprende sobre la importancia de proteger nuestros ecosistemas naturales.",
    image: "/images/conservation.jpg"
  },
  {
    icon: Book,
    title: "Educación Ambiental",
    description: "Programas educativos diseñados para todas las edades, enfocados en la conservación y el conocimiento de nuestro entorno natural.",
    image: "/images/education.jpg"
  },
  {
    icon: Users,
    title: "Visitas Grupales",
    description: "Experiencias personalizadas para grupos, ideales para escuelas, empresas y organizaciones interesadas en el turismo sustentable.",
    image: "/images/groups.jpg"
  },
  {
    icon: Compass,
    title: "Experiencias Especiales",
    description: "Actividades únicas que combinan aventura, aprendizaje y conexión con la naturaleza en un entorno incomparable.",
    image: "/images/experiences.jpg"
  }
] 