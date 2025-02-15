import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mountain, Trees, Compass, Camera, Users, Book } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ServicesPage() {
  const services = [
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

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1B4332]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Nuestros Servicios
              </h1>
              <p className="max-w-[900px] text-xl/relaxed text-[#B7E4C7]">
                Descubre las experiencias únicas que ofrecemos en El Buchen
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Card key={index} className="overflow-hidden border-2 border-[#1B4332]/10">
                  <div className="relative h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <service.icon className="h-8 w-8 text-[#1B4332]" />
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                    </div>
                    <p className="text-[#2D6A4F]">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1B4332] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">¿Listo para la Aventura?</h2>
              <p className="max-w-[900px] text-[#B7E4C7] text-lg">
                Contáctanos para reservar tu experiencia o solicitar más información sobre nuestros servicios
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="bg-white text-[#1B4332] hover:bg-[#B7E4C7]">
                    Reserva Ahora
                  </Button>
                </Link>
                <Link href="/gallery">
                  <Button variant="outline" className="text-white border-white hover:bg-white/10">
                    Ver Galería
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 