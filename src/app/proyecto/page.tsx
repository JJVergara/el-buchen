import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Footer from "@/components/footer"

export default function ProyectoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1B4332]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                El Proyecto
              </h1>
              <p className="max-w-[900px] text-xl/relaxed text-[#B7E4C7]">
                Conoce más sobre El Buchén y su historia
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter">¿Qué es El Buchén?</h2>
                  <div className="text-lg text-[#2D6A4F] space-y-4">
                    <p>
                      Parque El Buchén es un proyecto eco-inmobiliario constituído por fundos cuyas superficies fluctúan entre 5 y 9 hectáreas lo que abarca un total de 500 hectáreas, más un parque común de 1.000 hectáreas, es decir 1.500 hectáreas que lo convierten en un escenario ideal para descansar y desarrollar actividades en familia como trekking, cabalgatas, paseos en bicicleta, excursiones y pesca deportiva.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter">El Espíritu de la montaña</h2>
                  <div className="text-lg text-[#2D6A4F] space-y-4">
                    <p>
                      El paso desde la ciudad a la montaña nos conduce a una profunda transformación espiritual. Respirar, sentir, entender, conocer y compartir, son algunas de las muchas experiencias para los sentidos, en unión con la tierra y la inmensidad de la naturaleza en su estado más puro e intocable.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter">Masterplan</h2>
                  <div className="text-lg text-[#2D6A4F] space-y-2">
                    <p>
                    Superficie Total: 1.500 hectáreas
                    </p>
                    <p>
                    Parque común protegido: 1.000 hectáreas aprox.
                    </p>
                    <p>
                    Campos privados: 500 hectáreas
                    </p>
                    <p>
                    Superficie promedio: 5 a 9 hectáreas
                    </p>                    
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/test.jpg"
                    alt="Vista panorámica de El Buchén"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/test.jpg"
                    alt="Bosque nativo de El Buchén"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1B4332] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">Sé Parte de Nuestra Historia</h2>
              <p className="max-w-[900px] text-[#B7E4C7] text-lg">
                Ven a conocer El Buchén y ayúdanos a proteger este hermoso lugar
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Link href="/contacto">
                  <Button className="bg-white text-[#1B4332] hover:bg-[#B7E4C7]">
                    Contáctanos
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