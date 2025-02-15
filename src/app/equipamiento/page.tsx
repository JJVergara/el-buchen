import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Mountain, Trees, Compass } from "lucide-react"
import Footer from "@/components/footer"

export default function EquipamientoPage() {
  const facilities = [
    {
      title: "Centro de Visitantes",
      description: "Espacio de recepción y bienvenida para visitantes, con información sobre el proyecto, senderos y actividades disponibles. Cuenta con baños y zona de descanso.",
      icon: Home,
      image: "/test.jpg"
    },
    {
      title: "Senderos",
      description: "Red de senderos señalizados y mantenidos para diferentes niveles de dificultad, que permiten explorar el bosque nativo y acceder a miradores panorámicos.",
      icon: Mountain,
      image: "/test.jpg"
    },
    {
      title: "Miradores",
      description: "Puntos estratégicos con vistas panorámicas hacia el Seno de Reloncaví, volcanes y el bosque nativo, equipados con zonas de descanso y señalética informativa.",
      icon: Compass,
      image: "/test.jpg"
    },
    {
      title: "Áreas de Conservación",
      description: "Zonas especialmente destinadas a la protección y estudio de la biodiversidad local, con acceso restringido para garantizar la conservación de especies.",
      icon: Trees,
      image: "/test.jpg"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1B4332]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Equipamiento
              </h1>
              <p className="max-w-[900px] text-xl/relaxed text-[#B7E4C7]">
                Conoce nuestra infraestructura y facilidades
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              {facilities.map((facility, index) => (
                <Card key={index} className="overflow-hidden border-2 border-[#1B4332]/10">
                  <div className="relative h-64">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <facility.icon className="h-8 w-8 text-[#1B4332]" />
                      <h3 className="text-2xl font-bold">{facility.title}</h3>
                    </div>
                    <p className="text-[#2D6A4F] text-lg">{facility.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1B4332]/5">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter">Información Importante</h2>
                <div className="space-y-4 text-lg text-[#2D6A4F]">
                  <p>
                    Todas nuestras instalaciones han sido diseñadas y construidas siguiendo principios 
                    de sustentabilidad y bajo impacto ambiental, utilizando materiales locales y 
                    técnicas que minimizan el impacto en el entorno natural.
                  </p>
                  <p>
                    Los senderos cuentan con señalética informativa sobre la flora y fauna local, 
                    así como recomendaciones para una visita segura y responsable. Es importante 
                    seguir las indicaciones y mantenerse en los caminos marcados para proteger el 
                    ecosistema.
                  </p>
                </div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/test.jpg"
                  alt="Instalaciones de El Buchén"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1B4332] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">¿Listo para Visitarnos?</h2>
              <p className="max-w-[900px] text-[#B7E4C7] text-lg">
                Reserva tu visita y ven a conocer nuestras instalaciones
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Link href="/contacto">
                  <Button className="bg-white text-[#1B4332] hover:bg-[#B7E4C7]">
                    Reservar Visita
                  </Button>
                </Link>
                <Link href="/galeria">
                  <Button variant="outline" className="text-[#1B4332] border-white hover:bg-white/10">
                    Ver Galería
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 