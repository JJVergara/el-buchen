import { ImageCarousel } from "@/components/image-carousel"
import { Button } from "@/components/ui/button"
import { Video, Trees, Bird} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { VideoModal } from "@/components/video-modal"
import Footer from "@/components/footer"
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
                  En la intimidad precordillera, a 42 kilómetros de Curicó se encuentra el Parque El Buchén. Exclusivos fundos de agrado ubicados en torno a una extensa área de conservación de bosque del tipo valdiviano, en la que es posible apreciar Robles, Coihues, Cipreses y Canelos cuyas edades superan los 800 años.
                  La acción de la precordillera origina cascadas, pozones y vertientes que alimentan las lagunas El Príncipe y La Gracia, parte integral de parque El Buchén.
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
                src="/images/DSC_1453.JPG"
                width={600}
                height={400}
                alt="Paisaje de El Buchen"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                priority
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1B4332]/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Videos</h2>
                <p className="max-w-[900px] text-[#2D6A4F] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conoce El Buchén a través de nuestros videos
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <VideoModal
                videoId="897654321"
                title="Video Proyecto"
                description="Conoce nuestra misión y visión para la conservación del bosque nativo"
                icon={<Video className="h-12 w-12 text-[#1B4332]" />}
              />
              <VideoModal
                videoId="897654322"
                title="Baño Forestal"
                description="Experimenta la conexión con la naturaleza a través del baño forestal"
                icon={<Trees className="h-12 w-12 text-[#1B4332]" />}
              />
              <VideoModal
                videoId="897654323"
                title="Vista Aérea"
                description="Descubre la belleza de El Buchén desde el aire"
                icon={<Bird className="h-12 w-12 text-[#1B4332]" />}
              />
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
     <Footer />
    </div>
  )
}

