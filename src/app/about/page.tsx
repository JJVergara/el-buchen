import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mountain, Heart, Leaf } from "lucide-react"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1B4332]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Quiénes Somos
              </h1>
              <p className="max-w-[900px] text-xl/relaxed text-[#B7E4C7]">
                Conoce más sobre El Buchen y nuestra misión de conservación
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter">Nuestra Historia</h2>
                  <p className="text-lg text-[#2D6A4F]">
                    El Buchen nace como un proyecto familiar dedicado a la conservación y el turismo sustentable 
                    en la hermosa Región de Los Lagos. Desde nuestros inicios, nos hemos comprometido con la 
                    protección de la biodiversidad local y la promoción de experiencias que conecten a las 
                    personas con la naturaleza.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tighter">Nuestra Misión</h3>
                  <p className="text-lg text-[#2D6A4F]">
                    Buscamos preservar y proteger los ecosistemas naturales de la región mientras ofrecemos 
                    experiencias educativas y turísticas que fomenten la conciencia ambiental y el amor por 
                    la naturaleza.
                  </p>
                </div>
              </div>
              <div className="relative aspect-video lg:aspect-square">
                <Image
                  src="/test.jpg"
                  alt="El Buchen paisaje"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1B4332]/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">Nuestros Valores</h2>
              <p className="max-w-[900px] text-lg text-[#2D6A4F]">
                Los principios que guían nuestro trabajo diario
              </p>
            </div>
            <div className="grid gap-8 mt-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Mountain className="h-12 w-12 text-[#1B4332]" />
                <h3 className="text-xl font-bold">Conservación</h3>
                <p className="text-[#2D6A4F]">
                  Protegemos activamente los ecosistemas naturales y la biodiversidad local
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Heart className="h-12 w-12 text-[#1B4332]" />
                <h3 className="text-xl font-bold">Educación</h3>
                <p className="text-[#2D6A4F]">
                  Promovemos la conciencia ambiental y el conocimiento de nuestro entorno
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Leaf className="h-12 w-12 text-[#1B4332]" />
                <h3 className="text-xl font-bold">Sustentabilidad</h3>
                <p className="text-[#2D6A4F]">
                  Desarrollamos prácticas turísticas responsables y sostenibles
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1B4332] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">Sé Parte de Nuestra Historia</h2>
              <p className="max-w-[900px] text-[#B7E4C7] text-lg">
                Únete a nosotros en nuestra misión de conservación y descubre la belleza natural de la Región de Los Lagos
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="bg-white text-[#1B4332] hover:bg-[#B7E4C7]">
                    Contáctanos
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" className="text-white border-white hover:bg-white/10">
                    Conoce Nuestros Servicios
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