'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import Autoplay from 'embla-carousel-autoplay'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { facilities } from '../../../mock-data/facilities'

export default function EquipamientoPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full bg-[#1B4332] py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Arquitectura y Equipamiento
              </h1>
              <p className="max-w-[900px] text-xl/relaxed text-[#B7E4C7]">
                Conoce nuestra infraestructura y facilidades
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col gap-8">
              {facilities.map((facility, index) => (
                <Card key={index} className="overflow-hidden border-2 border-[#1B4332]/10">
                  <div className="relative">
                    <Carousel
                      className="w-full"
                      plugins={[
                        Autoplay({
                          delay: 4000,
                        }),
                      ]}
                      opts={{
                        align: 'start',
                        loop: true,
                      }}
                    >
                      <CarouselContent>
                        {facility.images.map((image, imageIndex) => (
                          <CarouselItem key={imageIndex}>
                            <Dialog>
                              <DialogTrigger asChild>
                                <div className="relative h-64 cursor-pointer">
                                  <Image
                                    src={image}
                                    alt={`${facility.title} - Image ${imageIndex + 1}`}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              </DialogTrigger>
                              <DialogContent className="max-w-4xl">
                                <div className="relative">
                                  <div className="relative h-[80vh]">
                                    <Image
                                      src={facility.images[currentImageIndex]}
                                      alt={`${facility.title} - Image ${currentImageIndex + 1}`}
                                      fill
                                      className="object-contain"
                                    />
                                  </div>
                                  <button
                                    onClick={() =>
                                      setCurrentImageIndex(prev =>
                                        prev === 0 ? facility.images.length - 1 : prev - 1
                                      )
                                    }
                                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 transition-colors hover:bg-white"
                                    aria-label="Previous image"
                                  >
                                    <ChevronLeft className="h-6 w-6 text-[#1B4332]" />
                                  </button>
                                  <button
                                    onClick={() =>
                                      setCurrentImageIndex(prev =>
                                        prev === facility.images.length - 1 ? 0 : prev + 1
                                      )
                                    }
                                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 transition-colors hover:bg-white"
                                    aria-label="Next image"
                                  >
                                    <ChevronRight className="h-6 w-6 text-[#1B4332]" />
                                  </button>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                    </Carousel>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center space-x-4">
                      <facility.icon className="h-8 w-8 text-[#1B4332]" />
                      <h3 className="text-2xl font-bold">{facility.title}</h3>
                    </div>
                    <p className="text-lg text-[#2D6A4F]">{facility.description}</p>
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
                <h2 className="text-3xl font-bold tracking-tighter">Información Importante</h2>
                <div className="space-y-4 text-lg text-[#2D6A4F]">
                  <p>
                    Todas nuestras instalaciones han sido diseñadas y construidas siguiendo
                    principios de sustentabilidad y bajo impacto ambiental, utilizando materiales
                    locales y técnicas que minimizan el impacto en el entorno natural.
                  </p>
                  <p>
                    Los senderos cuentan con señalética informativa sobre la flora y fauna local,
                    así como recomendaciones para una visita segura y responsable. Es importante
                    seguir las indicaciones y mantenerse en los caminos marcados para proteger el
                    ecosistema.
                  </p>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/test.jpg"
                  alt="Instalaciones de El Buchén"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#1B4332] py-12 text-white md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">¿Listo para Visitarnos?</h2>
              <p className="max-w-[900px] text-lg text-[#B7E4C7]">
                Reserva tu visita y ven a conocer nuestras instalaciones
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Link href="/contacto">
                  <Button className="bg-white text-[#1B4332] hover:bg-[#B7E4C7]">
                    Reservar Visita
                  </Button>
                </Link>
                <Link href="/galeria">
                  <Button
                    variant="outline"
                    className="border-white text-[#1B4332] hover:bg-white/10"
                  >
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
