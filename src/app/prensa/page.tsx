import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Newspaper } from 'lucide-react'
import { BookViewer } from '@/components/book-viewer'
import { pressArticles } from '../../../mock-data/press'

export default function PrensaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full bg-[#1B4332]/5 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-[#1B4332] sm:text-4xl md:text-5xl">
                  Prensa y Publicaciones
                </h1>
                <p className="mx-auto max-w-[700px] text-[#2D6A4F] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explora nuestras apariciones en prensa y publicaciones sobre nuestros esfuerzos de
                  conservación ambiental.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pressArticles.map((article, index) => (
                <Card key={index} className="overflow-hidden border-2 border-[#1B4332]/10">
                  <div className="relative h-48">
                    <Image src={article.image} alt={article.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-2 flex items-center gap-2 text-sm text-[#2D6A4F]">
                      <Newspaper className="h-4 w-4" />
                      <span>{article.source}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-[#1B4332]">{article.title}</h3>
                    <p className="mb-4 text-[#2D6A4F]">{article.description}</p>
                    <BookViewer
                      url={article.pdfUrl}
                      trigger={
                        <Button
                          className="w-full bg-[#1B4332] text-white hover:bg-[#2D6A4F]"
                          aria-label={`Leer artículo: ${article.title}`}
                        >
                          Leer artículo
                        </Button>
                      }
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-[#1B4332]/5 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter">Kit de Prensa</h2>
                <div className="space-y-4 text-lg text-[#2D6A4F]">
                  <p>
                    Si eres periodista o medio de comunicación y estás interesado en cubrir El
                    Buchén, ponemos a tu disposición nuestro kit de prensa con información detallada
                    sobre el proyecto, fotografías en alta resolución y datos relevantes.
                  </p>
                  <p>
                    Para solicitar el kit de prensa o coordinar una visita, por favor contáctanos a
                    través de nuestro formulario de contacto o directamente a nuestro correo de
                    prensa.
                  </p>
                </div>
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <Link href="/contacto">
                    <Button className="bg-[#1B4332] text-white hover:bg-[#2D6A4F]">
                      Solicitar Kit de Prensa
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/test.jpg"
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
