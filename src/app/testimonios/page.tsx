import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Star, FileText } from "lucide-react"

export default function TestimoniosPage() {
  const testimonials = [
    {
      name: "María González",
      role: "Visitante",
      text: "Una experiencia única en medio de la naturaleza. Los senderos están muy bien mantenidos y la vista desde los miradores es espectacular. El personal es muy amable y conocedor del lugar.",
      image: "/images/testimonial-1.jpg"
    },
    {
      name: "Juan Pérez",
      role: "Fotógrafo",
      text: "Como fotógrafo de naturaleza, El Buchén es un paraíso. La diversidad de flora y fauna es impresionante, y las instalaciones facilitan el trabajo fotográfico.",
      image: "/images/testimonial-2.jpg"
    },
    {
      name: "Ana Silva",
      role: "Profesora",
      text: "Visitamos El Buchén con un grupo de estudiantes y fue una experiencia educativa invaluable. Los niños aprendieron mucho sobre la importancia de la conservación.",
      image: "/images/testimonial-3.jpg"
    }
  ]

  const downloads = [
    {
      title: "Guía de Flora y Fauna",
      description: "Documento informativo sobre las especies presentes en El Buchén",
      icon: FileText,
      link: "/downloads/guia-flora-fauna.pdf"
    },
    {
      title: "Mapa de Senderos",
      description: "Mapa detallado con los senderos y puntos de interés",
      icon: FileText,
      link: "/downloads/mapa-senderos.pdf"
    },
    {
      title: "Reglamento de Visitas",
      description: "Normas y recomendaciones para visitantes",
      icon: FileText,
      link: "/downloads/reglamento.pdf"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1B4332]">
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

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Experiencias en El Buchén</h2>
              <p className="mt-4 text-lg text-[#2D6A4F]">
                Lo que dicen nuestros visitantes sobre su experiencia
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-2 border-[#1B4332]/10">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold">{testimonial.name}</h3>
                        <p className="text-[#2D6A4F]">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#1B4332] text-[#1B4332]" />
                      ))}
                    </div>
                    <p className="text-[#2D6A4F]">{testimonial.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Downloads Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1B4332]/5">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Documentos y Recursos</h2>
              <p className="mt-4 text-lg text-[#2D6A4F]">
                Descarga información útil para tu visita
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {downloads.map((download, index) => (
                <Card key={index} className="border-2 border-[#1B4332]/10">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-4">
                      <download.icon className="w-8 h-8 text-[#1B4332]" />
                      <div>
                        <h3 className="font-bold">{download.title}</h3>
                        <p className="text-[#2D6A4F]">{download.description}</p>
                      </div>
                    </div>
                    <Link href={download.link}>
                      <Button className="w-full bg-[#1B4332] hover:bg-[#2D6A4F] text-white">
                        <Download className="w-4 h-4 mr-2" />
                        Descargar
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1B4332] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">¿Quieres Compartir tu Experiencia?</h2>
              <p className="max-w-[900px] text-[#B7E4C7] text-lg">
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