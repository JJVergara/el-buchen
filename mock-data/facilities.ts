import { Facility } from '../dtos/facility.dto'
import { Home, TreePine, Waves, Utensils, Umbrella, SignpostBig } from 'lucide-react'

export const facilities: Facility[] = [
  {
    title: 'Portal de Acceso',
    description:
      'Entrada principal al proyecto, diseñada para dar la bienvenida a residentes y visitantes, integrándose armoniosamente con el entorno natural.',
    icon: Home,
    images: ['/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg'],
  },
  {
    title: 'Casas Construídas',
    description:
      'Residencias completadas que ejemplifican la arquitectura sostenible y el diseño integrado con la naturaleza del proyecto.',
    icon: Home,
    images: ['/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg'],
  },
  {
    title: 'Cabaña piloto El Roble',
    description:
      'Modelo demostrativo que exhibe el estilo arquitectónico y los estándares de construcción que caracterizan nuestro proyecto.',
    icon: TreePine,
    images: ['/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg'],
  },
  {
    title: 'Hot-tub',
    description:
      'Espacio de relajación al aire libre con vistas panorámicas, perfecto para disfrutar del entorno natural en cualquier temporada.',
    icon: Waves,
    images: ['/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg'],
  },
  {
    title: 'Quincho',
    description:
      'Área común para reuniones sociales y asados, diseñada para fomentar la comunidad entre residentes y visitantes.',
    icon: Utensils,
    images: ['/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg'],
  },
  {
    title: 'Pérgola laguna El Príncipe',
    description:
      'Estructura arquitectónica junto a la laguna que proporciona un espacio sombreado para contemplar el paisaje y la vida silvestre.',
    icon: Umbrella,
    images: ['/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg'],
  },
  {
    title: 'Señalética',
    description:
      'Sistema integral de señalización que guía a visitantes y residentes a través de las diferentes áreas y senderos del proyecto.',
    icon: SignpostBig,
    images: ['/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg'],
  },
]
