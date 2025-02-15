import { ImageCarousel } from "@/components/image-carousel"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Mountain, Trees, Compass } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1B4332]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
                El Buchen
              </h1>
              <p className="max-w-[900px] text-xl/relaxed md:text-2xl/relaxed lg:text-3xl/relaxed text-[#B7E4C7]">
                Turismo y Conservación en la Región de Los Lagos
              </p>
            </div>
            <div className="mt-8">
              <ImageCarousel />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Bienvenidos a El Buchen</h2>
                  <p className="max-w-[600px] text-[#2D6A4F] text-lg md:text-xl">
                    El Buchen es un proyecto de turismo y conservación ubicado en la Región de Los Lagos, Chile. 
                    Nuestro objetivo es proteger y preservar la naturaleza mientras ofrecemos experiencias únicas 
                    que conectan a las personas con nuestro entorno natural.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/about">
                    <Button className="bg-[#1B4332] hover:bg-[#2D6A4F] text-white">
                      Conoce más sobre nosotros
                    </Button>
                  </Link>
                </div>
              </div>
              <Image
                src="/images/el-buchen-landscape.jpg"
                width={600}
                height={400}
                alt="Paisaje de El Buchen"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1B4332]/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nuestros Servicios</h2>
                <p className="max-w-[900px] text-[#2D6A4F] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubre las experiencias que ofrecemos en El Buchen
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="border-2 border-[#1B4332]/10">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Mountain className="h-12 w-12 text-[#1B4332]" />
                  <h3 className="text-xl font-bold">Senderismo</h3>
                  <p className="text-center text-[#2D6A4F]">
                    Recorre nuestros senderos y descubre la belleza natural de la región
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-[#1B4332]/10">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Trees className="h-12 w-12 text-[#1B4332]" />
                  <h3 className="text-xl font-bold">Conservación</h3>
                  <p className="text-center text-[#2D6A4F]">
                    Participa en nuestros proyectos de conservación y educación ambiental
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-[#1B4332]/10">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Compass className="h-12 w-12 text-[#1B4332]" />
                  <h3 className="text-xl font-bold">Experiencias</h3>
                  <p className="text-center text-[#2D6A4F]">
                    Vive experiencias únicas en contacto con la naturaleza
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1B4332] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Visítanos</h2>
                <p className="max-w-[900px] text-[#B7E4C7] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ven a conocer El Buchen y sé parte de nuestra misión de conservación
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="bg-white text-[#1B4332] hover:bg-[#B7E4C7]">
                    Contáctanos
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-[#1B4332]/20 py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row md:py-0">
          <div className="flex items-center gap-4 px-8 md:px-0">
            <Leaf className="h-6 w-6 text-[#1B4332]" />
            <p className="text-sm text-[#2D6A4F]">
              © {new Date().getFullYear()} El Buchen. Todos los derechos reservados.
            </p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium text-[#2D6A4F] hover:text-[#1B4332]" href="/about">
              Quiénes Somos
            </Link>
            <Link className="text-sm font-medium text-[#2D6A4F] hover:text-[#1B4332]" href="/contact">
              Contacto
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

