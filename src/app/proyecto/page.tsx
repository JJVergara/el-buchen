import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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
                      El Buchén es un proyecto de conservación y turismo ubicado en la Región de Los Lagos, Chile. 
                      Nuestro predio se encuentra en el sector de Lenca, comuna de Puerto Montt, y cuenta con 
                      aproximadamente 1000 hectáreas de bosque nativo, las cuales están siendo destinadas a la 
                      conservación.
                    </p>
                    <p>
                      El proyecto nace el año 2020 con la compra del terreno y la idea de proteger este lugar 
                      único, que cuenta con una gran biodiversidad y belleza escénica. Desde entonces, hemos 
                      trabajado en la implementación de infraestructura y el desarrollo de actividades que 
                      permitan a las personas conocer y disfrutar de este espacio natural de manera sustentable.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter">Nuestra Misión</h2>
                  <div className="text-lg text-[#2D6A4F] space-y-4">
                    <p>
                      Buscamos proteger y conservar el bosque nativo y su biodiversidad, promoviendo la 
                      educación ambiental y el turismo sustentable como herramientas para generar conciencia 
                      sobre la importancia de la conservación de nuestro patrimonio natural.
                    </p>
                    <p>
                      A través de nuestras actividades, queremos que las personas puedan conectar con la 
                      naturaleza y entender la importancia de su protección para las futuras generaciones.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter">Características del Lugar</h2>
                  <div className="text-lg text-[#2D6A4F] space-y-4">
                    <p>
                      El predio cuenta con una gran diversidad de flora y fauna nativa, incluyendo especies 
                      como el pudú, el monito del monte, el carpintero negro y diversas especies de aves. 
                      El bosque está compuesto principalmente por especies como coigüe, ulmo, tepa y mañío, 
                      entre otras.
                    </p>
                    <p>
                      La topografía del lugar es variada, con sectores de pendiente suave y otros más 
                      escarpados, lo que permite tener diferentes tipos de senderos y miradores con vistas 
                      panorámicas hacia el Seno de Reloncaví y los volcanes de la zona.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/images/el-buchen-vista.jpg"
                    alt="Vista panorámica de El Buchén"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/images/el-buchen-bosque.jpg"
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