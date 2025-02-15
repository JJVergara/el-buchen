"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { submitContactForm } from "../actions/contact"
import { useFormStatus } from "react-dom"
import { toast } from "sonner"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" className="w-full bg-[#1B4332] hover:bg-[#2D6A4F]" disabled={pending}>
      {pending ? "Enviando..." : "Enviar Mensaje"}
    </Button>
  )
}

export default function ContactoPage() {
  const [formKey, setFormKey] = useState(0)

  async function handleSubmit(formData: FormData) {
    const response = await submitContactForm(formData)
    if (response.success) {
      toast.success(response.message)
      setFormKey((prev) => prev + 1)
    } else {
      toast.error("Algo salió mal. Por favor intenta nuevamente.")
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1B4332]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Contacto
              </h1>
              <p className="max-w-[900px] text-xl/relaxed text-[#B7E4C7]">
                ¿Tienes preguntas? Estamos aquí para ayudarte
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <Card className="p-6 border-2 border-[#1B4332]/10">
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold">Envíanos un Mensaje</h2>
                    <p className="text-[#2D6A4F]">
                      Completa el formulario y nos pondremos en contacto contigo lo antes posible
                    </p>
                  </div>
                  <form action={handleSubmit} className="space-y-4" key={formKey}>
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Tu nombre completo"
                        className="border-[#1B4332]/20 focus:border-[#1B4332]"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo Electrónico</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="tu@email.com"
                        className="border-[#1B4332]/20 focus:border-[#1B4332]"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+56 9 XXXX XXXX"
                        className="border-[#1B4332]/20 focus:border-[#1B4332]"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Mensaje</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Escribe tu mensaje aquí..."
                        className="min-h-[150px] border-[#1B4332]/20 focus:border-[#1B4332]"
                        required
                      />
                    </div>
                    <SubmitButton />
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Información de Contacto</h2>
                  <div className="grid gap-4">
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 mt-1 text-[#1B4332]" />
                      <div>
                        <h3 className="font-semibold">Correo Electrónico</h3>
                        <p className="text-[#2D6A4F]">contacto@elbuchen.cl</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 mt-1 text-[#1B4332]" />
                      <div>
                        <h3 className="font-semibold">Teléfono</h3>
                        <p className="text-[#2D6A4F]">+56 9 XXXX XXXX</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 mt-1 text-[#1B4332]" />
                      <div>
                        <h3 className="font-semibold">Ubicación</h3>
                        <p className="text-[#2D6A4F]">
                          Sector Lenca, Puerto Montt<br />
                          Región de Los Lagos, Chile
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 mt-1 text-[#1B4332]" />
                      <div>
                        <h3 className="font-semibold">Horario de Atención</h3>
                        <p className="text-[#2D6A4F]">
                          Lunes a Domingo: 9:00 - 18:00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">¿Cómo Llegar?</h2>
                  <p className="text-[#2D6A4F]">
                    El Buchén se encuentra en el sector de Lenca, comuna de Puerto Montt. 
                    Contáctanos para recibir indicaciones detalladas sobre cómo llegar.
                  </p>
                  <div className="aspect-video relative rounded-lg overflow-hidden border-2 border-[#1B4332]/10">
                    {/* Here you would add a map component or image */}
                    <div className="w-full h-full bg-[#1B4332]/5 flex items-center justify-center">
                      <p className="text-[#2D6A4F]">Mapa de ubicación</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 