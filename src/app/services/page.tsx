import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { services } from '../../../mock-data/services'
import { Service } from '../../../dtos/service.dto'

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full bg-[#1B4332] py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Nuestros Servicios
              </h1>
              <p className="max-w-[900px] text-xl/relaxed text-[#B7E4C7]">
                Descubre las experiencias únicas que ofrecemos en El Buchén
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service: Service, index: number) => {
                const Icon = service.icon
                return (
                  <Card key={index} className="overflow-hidden border-2 border-[#1B4332]/10">
                    <div className="relative h-48">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="mb-2 flex items-center space-x-2">
                        <Icon className="h-5 w-5 text-[#1B4332]" />
                        <h3 className="text-xl font-bold">{service.title}</h3>
                      </div>
                      <p className="text-[#2D6A4F]">{service.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="w-full bg-[#1B4332] py-12 text-white md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">¿Listo para la Aventura?</h2>
              <p className="max-w-[900px] text-lg text-[#B7E4C7]">
                Reserva tu experiencia en El Buchén y comienza tu viaje hacia la naturaleza
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Link href="/contacto">
                  <Button className="bg-white text-[#1B4332] hover:bg-[#B7E4C7]">
                    Reservar Ahora
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
