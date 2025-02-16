import { FileText } from 'lucide-react'
import { Download } from '../dtos/download.dto'
export const downloads: Download[] = [
  {
    title: 'Guía de Flora y Fauna',
    description: 'Documento informativo sobre las especies presentes en El Buchén',
    icon: FileText,
    link: '/downloads/guia-flora-fauna.pdf',
  },
  {
    title: 'Mapa de Senderos',
    description: 'Mapa detallado con los senderos y puntos de interés',
    icon: FileText,
    link: '/downloads/mapa-senderos.pdf',
  },
  {
    title: 'Reglamento de Visitas',
    description: 'Normas y recomendaciones para visitantes',
    icon: FileText,
    link: '/downloads/reglamento.pdf',
  },
]
