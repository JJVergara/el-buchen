"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Home, TreePine, Waves, Utensils, Umbrella, SignpostBig } from "lucide-react"
import Footer from "@/components/footer"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import Autoplay from "embla-carousel-autoplay"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function EquipamientoPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const facilities = [
    {
      title: "Portal de Acceso",
      description: "Entrada principal al proyecto, diseñada para dar la bienvenida a residentes y visitantes, integrándose armoniosamente con el entorno natural.",
      icon: Home,
      images: ["/test.jpg", "/test.jpg", "/test.jpg", "/test.jpg"]
    },
    {
      title: "Casas Construídas",
      description: "Residencias completadas que ejemplifican la arquitectura sostenible y el diseño integrado con la naturaleza del proyecto.",
      icon: Home,
      images: ["/test.jpg", "/test.jpg", "/test.jpg", "/test.jpg"]
    },
    {
      title: "Cabaña piloto El Roble",
      description: "Modelo demostrativo que exhibe el estilo arquitectónico y los estándares de construcción que caracterizan nuestro proyecto.",
      icon: TreePine,
      images: ["/test.jpg", "/test.jpg", "/test.jpg", "/test.jpg"]
    },
    {
      title: "Hot-tub",
      description: "Espacio de relajación al aire libre con vistas panorámicas, perfecto para disfrutar del entorno natural en cualquier temporada.",
      icon: Waves,
      images: ["/test.jpg", "/test.jpg", "/test.jpg", "/test.jpg"]
    },
    {
      title: "Quincho",
      description: "Área común para reuniones sociales y asados, diseñada para fomentar la comunidad entre residentes y visitantes.",
      icon: Utensils,
      images: ["/test.jpg", "/test.jpg", "/test.jpg", "/test.jpg"]
    },
    {
      title: "Pérgola laguna El Príncipe",
      description: "Estructura arquitectónica junto a la laguna que proporciona un espacio sombreado para contemplar el paisaje y la vida silvestre.",
      icon: Umbrella,
      images: ["/test.jpg", "/test.jpg", "/test.jpg", "/test.jpg"]
    },
    {
      title: "Señalética",
      description: "Sistema integral de señalización que guía a visitantes y residentes a través de las diferentes áreas y senderos del proyecto.",
      icon: SignpostBig,
      images: ["/test.jpg", "/test.jpg", "/test.jpg", "/test.jpg"]
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1B4332]">
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
                        align: "start",
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
                                    onClick={() => setCurrentImageIndex((prev) => 
                                      prev === 0 ? facility.images.length - 1 : prev - 1
                                    )}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                                    aria-label="Previous image"
                                  >
                                    <ChevronLeft className="h-6 w-6 text-[#1B4332]" />
                                  </button>
                                  <button
                                    onClick={() => setCurrentImageIndex((prev) => 
                                      prev === facility.images.length - 1 ? 0 : prev + 1
                                    )}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
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
                    <div className="flex items-center space-x-4 mb-4">
                      <facility.icon className="h-8 w-8 text-[#1B4332]" />
                      <h3 className="text-2xl font-bold">{facility.title}</h3>
                    </div>
                    <p className="text-[#2D6A4F] text-lg">{facility.description}</p>
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
                <h2 className="text-3xl font-bold tracking-tighter">Información Importante</h2>
                <div className="space-y-4 text-lg text-[#2D6A4F]">
                  <p>
                    Todas nuestras instalaciones han sido diseñadas y construidas siguiendo principios 
                    de sustentabilidad y bajo impacto ambiental, utilizando materiales locales y 
                    técnicas que minimizan el impacto en el entorno natural.
                  </p>
                  <p>
                    Los senderos cuentan con señalética informativa sobre la flora y fauna local, 
                    así como recomendaciones para una visita segura y responsable. Es importante 
                    seguir las indicaciones y mantenerse en los caminos marcados para proteger el 
                    ecosistema.
                  </p>
                </div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
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

        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1B4332] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">¿Listo para Visitarnos?</h2>
              <p className="max-w-[900px] text-[#B7E4C7] text-lg">
                Reserva tu visita y ven a conocer nuestras instalaciones
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Link href="/contacto">
                  <Button className="bg-white text-[#1B4332] hover:bg-[#B7E4C7]">
                    Reservar Visita
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