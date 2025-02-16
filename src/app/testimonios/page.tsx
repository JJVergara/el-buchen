import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Download, Star } from 'lucide-react'
import { InterviewList } from '@/components/interview-list'
import { interviews } from '../../../mock-data/interviews'
import { testimonials } from '../../../mock-data/testimonials'
import { downloads } from '../../../mock-data/downloads'

export default function TestimoniosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full bg-[#1B4332] py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Testimonios y Descargas
              </h1>
              <p className="max-w-[900px] text-xl/relaxed text-[#B7E4C7]">
                Conoce las experiencias de nuestros visitantes y accede a información útil
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">Entrevistas Destacadas</h2>
              <p className="mt-4 text-lg text-[#2D6A4F]">
                Descubre las historias y experiencias de personas de todo el mundo en El Buchén
              </p>
            </div>
            <InterviewList interviews={interviews} />
          </div>
        </section>

        <section className="w-full bg-[#1B4332]/5 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">Experiencias en El Buchén</h2>
              <p className="mt-4 text-lg text-[#2D6A4F]">
                Lo que dicen nuestros visitantes sobre su experiencia
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-2 border-[#1B4332]/10">
                  <CardContent className="space-y-4 p-6">
                    <div className="flex items-center space-x-4">
                      <div className="relative h-12 w-12 overflow-hidden rounded-full">
                        <Image
                          src={testimonial.imageUrl}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold">{testimonial.author}</h3>
                        <p className="text-[#2D6A4F]">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[#1B4332] text-[#1B4332]" />
                      ))}
                    </div>
                    <p className="text-[#2D6A4F]">{testimonial.preview}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">Documentos y Recursos</h2>
              <p className="mt-4 text-lg text-[#2D6A4F]">
                Descarga información útil para tu visita
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {downloads.map((download, index) => (
                <Card key={index} className="border-2 border-[#1B4332]/10">
                  <CardContent className="space-y-4 p-6">
                    <div className="flex items-center space-x-4">
                      <download.icon className="h-8 w-8 text-[#1B4332]" />
                      <div>
                        <h3 className="font-bold">{download.title}</h3>
                        <p className="text-[#2D6A4F]">{download.description}</p>
                      </div>
                    </div>
                    <Link href={download.link}>
                      <Button className="w-full bg-[#1B4332] text-white hover:bg-[#2D6A4F]">
                        <Download className="mr-2 h-4 w-4" />
                        Descargar
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-[#1B4332] py-12 text-white md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">
                ¿Quieres Compartir tu Experiencia?
              </h2>
              <p className="max-w-[900px] text-lg text-[#B7E4C7]">
                Cuéntanos sobre tu visita a El Buchén y ayuda a otros a conocer este hermoso lugar
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Link href="/contacto">
                  <Button className="bg-white text-[#1B4332] hover:bg-[#B7E4C7]">
                    Compartir Experiencia
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
