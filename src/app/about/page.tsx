import Image from 'next/image'
import { Mountain, Heart, Leaf } from 'lucide-react'
import ContactSection from '@/components/contact-section'

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full bg-[#1B4332] py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Quiénes Somos</h1>
              <p className="max-w-[900px] text-xl/relaxed text-[#B7E4C7]">
                Conoce más sobre El Buchen y nuestra misión de conservación
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter">Nuestra Historia</h2>
                  <p className="text-lg text-[#2D6A4F]">
                    El Buchen nace como un proyecto familiar dedicado a la conservación y el turismo
                    sustentable en la hermosa Región de Los Lagos. Desde nuestros inicios, nos hemos
                    comprometido con la protección de la biodiversidad local y la promoción de
                    experiencias que conecten a las personas con la naturaleza.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tighter">Nuestra Misión</h3>
                  <p className="text-lg text-[#2D6A4F]">
                    Buscamos preservar y proteger los ecosistemas naturales de la región mientras
                    ofrecemos experiencias educativas y turísticas que fomenten la conciencia
                    ambiental y el amor por la naturaleza.
                  </p>
                </div>
              </div>
              <div className="relative aspect-video lg:aspect-square">
                <Image
                  src="/images/7.jpg"
                  alt="El Buchen paisaje"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#1B4332]/5 py-6 md:py-12 lg:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">Nuestros Valores</h2>
              <p className="max-w-[900px] text-lg text-[#2D6A4F]">
                Los principios que guían nuestro trabajo diario
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
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
        <ContactSection />
      </main>
    </div>
  )
}
