import Link from 'next/link'
import { Button } from './ui/button'

export default function ContactSection() {
  return (
    <div>
      <section className="w-full bg-[#1B4332] py-12 text-white md:py-24 lg:py-32">
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
                <Button className="bg-white text-[#1B4332] hover:bg-[#B7E4C7]">Contáctanos</Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="border-white text-[#1B4332] hover:bg-white/10">
                  Conoce Nuestros Servicios
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
