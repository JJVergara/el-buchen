import { Service } from '../dtos/service.dto'
import { Mountain, Camera, Trees, Book, Users, Compass } from 'lucide-react'

export const services: Service[] = [
  {
    icon: Mountain,
    title: 'Senderismo',
    description:
      'Explora nuestros senderos naturales guiados por expertos locales. Descubre la flora y fauna única de la región mientras aprendes sobre la importancia de su conservación.',
    image: '/1.JPG',
  },
  {
    icon: Camera,
    title: 'Fotografía',
    description:
      'Captura la belleza natural de El Buchen con nuestros tours fotográficos. Perfectos tanto para principiantes como para fotógrafos experimentados.',
    image: '/2.JPG',
  },
  {
    icon: Trees,
    title: 'Conservación',
    description:
      'Participa en nuestros proyectos de conservación y aprende sobre la importancia de proteger nuestros ecosistemas naturales.',
    image: '/3.JPG',
  },
  {
    icon: Book,
    title: 'Educación Ambiental',
    description:
      'Programas educativos diseñados para todas las edades, enfocados en la conservación y el conocimiento de nuestro entorno natural.',
    image: '/4.JPG',
  },
  {
    icon: Users,
    title: 'Visitas Grupales',
    description:
      'Experiencias personalizadas para grupos, ideales para escuelas, empresas y organizaciones interesadas en el turismo sustentable.',
    image: '/5.JPG',
  },
  {
    icon: Compass,
    title: 'Experiencias Especiales',
    description:
      'Actividades únicas que combinan aventura, aprendizaje y conexión con la naturaleza en un entorno incomparable.',
    image: '/6.JPG',
  },
]
