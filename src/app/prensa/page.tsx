import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Newspaper, ExternalLink } from "lucide-react"

export default function PrensaPage() {
  const pressArticles = [
    {
      title: "El Buchén: Un Nuevo Proyecto de Conservación en la Región de Los Lagos",
      source: "Diario Local",
      date: "15 de Marzo, 2024",
      description: "Reportaje sobre la iniciativa de conservación de El Buchén y su impacto en la región.",
      image: "/images/press-1.jpg",
      link: "#"
    },
    {
      title: "Turismo Sustentable: El Modelo de El Buchén",
      source: "Revista Turismo",
      date: "10 de Febrero, 2024",
      description: "Análisis del modelo de turismo sustentable implementado en El Buchén.",
      image: "/images/press-2.jpg",
      link: "#"
    },
    {
      title: "Conservación y Educación Ambiental en El Buchén",
      source: "Portal Ambiental",
      date: "5 de Enero, 2024",
      description: "Entrevista sobre los programas educativos y de conservación desarrollados en El Buchén.",
      image: "/images/press-3.jpg",
      link: "#"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1B4332]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Prensa
              </h1>
              <p className="max-w-[900px] text-xl/relaxed text-[#B7E4C7]">
                El Buchén en los medios de comunicación
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Apariciones en Medios</h2>
              <p className="mt-4 text-lg text-[#2D6A4F]">
                Conoce lo que dicen los medios sobre nuestro proyecto
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {pressArticles.map((article, index) => (
                <Card key={index} className="overflow-hidden border-2 border-[#1B4332]/10">
                  <div className="relative h-48">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Newspaper className="w-4 h-4 text-[#1B4332]" />
                        <span className="text-sm text-[#2D6A4F]">{article.source}</span>
                      </div>
                      <h3 className="text-xl font-bold">{article.title}</h3>
                      <p className="text-sm text-[#2D6A4F]">{article.date}</p>
                    </div>
                    <p className="text-[#2D6A4F]">{article.description}</p>
                    <Link href={article.link}>
                      <Button className="w-full bg-[#1B4332] hover:bg-[#2D6A4F] text-white">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Leer Artículo
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1B4332]/5">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter">Kit de Prensa</h2>
                <div className="space-y-4 text-lg text-[#2D6A4F]">
                  <p>
                    Si eres periodista o medio de comunicación y estás interesado en cubrir 
                    El Buchén, ponemos a tu disposición nuestro kit de prensa con información 
                    detallada sobre el proyecto, fotografías en alta resolución y datos relevantes.
                  </p>
                  <p>
                    Para solicitar el kit de prensa o coordinar una visita, por favor contáctanos 
                    a través de nuestro formulario de contacto o directamente a nuestro correo de prensa.
                  </p>
                </div>
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <Link href="/contacto">
                    <Button className="bg-[#1B4332] hover:bg-[#2D6A4F] text-white">
                      Solicitar Kit de Prensa
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/images/press-kit.jpg"
                  alt="Kit de Prensa El Buchén"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 