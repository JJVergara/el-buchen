'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { submitContactForm } from '../actions/contact'
import { useFormStatus } from 'react-dom'
import { toast } from 'sonner'

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" className="w-full bg-[#0f401e] hover:bg-[#0f401e]/90" disabled={pending}>
      {pending ? 'Enviando...' : 'Enviar Mensaje'}
    </Button>
  )
}

export default function ContactPage() {
  const [formKey, setFormKey] = useState(0)

  async function handleSubmit(formData: FormData) {
    const response = await submitContactForm(formData)
    if (response.success) {
      toast.success(response.message)
      const form = document.querySelector('form') as HTMLFormElement
      form.reset()
      setFormKey(prev => prev + 1)
    } else {
      toast.error(response.message)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full bg-[#1B4332] py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Contacto</h1>
              <p className="max-w-[900px] text-xl/relaxed text-[#B7E4C7]">
                ¿Tienes preguntas? Estamos aquí para ayudarte
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <Card className="border-2 border-[#1B4332]/10 p-6">
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold">Envíanos un Mensaje</h2>
                    <p className="text-[#2D6A4F]">
                      Completa el formulario y nos pondremos en contacto contigo lo antes posible
                    </p>
                  </div>
                  <form key={formKey} action={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre *</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Tu nombre completo"
                        className="border-[#1B4332]/20 focus:border-[#1B4332]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo Electrónico *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="tu@email.com"
                        className="border-[#1B4332]/20 focus:border-[#1B4332]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+56 9 6908 1153"
                        className="border-[#1B4332]/20 focus:border-[#1B4332]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Mensaje *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Escribe tu mensaje aquí..."
                        className="min-h-[150px] border-[#1B4332]/20 focus:border-[#1B4332]"
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
                      <Mail className="mt-1 h-6 w-6 text-[#1B4332]" />
                      <div>
                        <h3 className="font-semibold">Correo Electrónico</h3>
                        <p className="text-[#2D6A4F]">contacto@elbuchen.cl</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Phone className="mt-1 h-6 w-6 text-[#1B4332]" />
                      <div>
                        <h3 className="font-semibold">Teléfono</h3>
                        <p className="text-[#2D6A4F]">+56 9 6908 1153</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <MapPin className="mt-1 h-6 w-6 text-[#1B4332]" />
                      <div>
                        <h3 className="font-semibold">Ubicación</h3>
                        <p className="text-[#2D6A4F]">Curicó, Región del Maule, Chile </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Clock className="mt-1 h-6 w-6 text-[#1B4332]" />
                      <div>
                        <h3 className="font-semibold">Horario de Atención</h3>
                        <p className="text-[#2D6A4F]">Lunes a Domingo: 9:00 - 18:00</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">¿Cómo Llegar?</h2>
                  <p className="text-[#2D6A4F]">
                    El Buchen se encuentra en una privilegiada ubicación en la Región de Los Lagos.
                    Contáctanos para recibir indicaciones detalladas sobre cómo llegar.
                  </p>
                  <div className="relative aspect-video overflow-hidden rounded-lg border-2 border-[#1B4332]/10">
                    <div className="flex h-full w-full items-center justify-center bg-[#1B4332]/5">
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
