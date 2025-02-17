import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Newspaper } from 'lucide-react'
import { BookViewer } from '@/components/book-viewer'
import { pressArticles } from '../../../mock-data/press'
import ContactSection from '@/components/contact-section'

export default function PrensaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full bg-[#1B4332] py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                  Prensa y Publicaciones
                </h1>
                <p className="max-w-[900px] text-xl/relaxed text-[#B7E4C7]">
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
        <ContactSection />
      </main>
    </div>
  )
}
