import { Facility } from "../types/facility"
import { Home, Mountain, Compass, Trees } from "lucide-react"

export const facilities: Facility[] = [
  {
    title: "Centro de Visitantes",
    description: "Espacio de recepción y bienvenida para visitantes, con información sobre el proyecto, senderos y actividades disponibles. Cuenta con baños y zona de descanso.",
    icon: Home,
    image: "/test.JPG"
  },
  {
    title: "Senderos",
    description: "Red de senderos señalizados y mantenidos para diferentes niveles de dificultad, que permiten explorar el bosque nativo y acceder a miradores panorámicos.",
    icon: Mountain,
    image: "/test.JPG"
  },
  {
    title: "Miradores",
    description: "Puntos estratégicos con vistas panorámicas hacia el Seno de Reloncaví, volcanes y el bosque nativo, equipados con zonas de descanso y señalética informativa.",
    icon: Compass,
    image: "/test.JPG"
  },
  {
    title: "Áreas de Conservación",
    description: "Zonas especialmente destinadas a la protección y estudio de la biodiversidad local, con acceso restringido para garantizar la conservación de especies.",
    icon: Trees,
    image: "/test.JPG"
  }
] 