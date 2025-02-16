'use server'

import { supabase } from "@/lib/supabase"
import { sendContactNotification } from "@/lib/email"

export type ContactFormData = {
  name: string
  email: string
  phone: string
  message: string
}

type ContactFormResponse = {
  success: boolean
  message: string
}

export async function submitContactForm(formData: FormData): Promise<ContactFormResponse> {
  try {
    const name = formData.get('name')
    const email = formData.get('email')
    const phone = formData.get('phone')
    const message = formData.get('message')

    // Type guard for form data
    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      (phone !== null && typeof phone !== 'string') ||
      typeof message !== 'string'
    ) {
      return {
        success: false,
        message: "Error en el formato de los datos enviados."
      }
    }

    const data: ContactFormData = {
      name,
      email,
      phone: phone || '',
      message,
    }

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return {
        success: false,
        message: "Por favor, complete todos los campos requeridos."
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        message: "Por favor, ingrese una dirección de correo electrónico válida."
      }
    }

    // Save to Supabase
    const { error: dbError } = await supabase
      .from('contacts')
      .insert([
        {
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          message: data.message,
        }
      ])

    if (dbError) {
      console.error('Error saving contact form:', dbError)
      return {
        success: false,
        message: "Hubo un error al enviar tu mensaje. Por favor, intenta nuevamente."
      }
    }

    // Send email notification
    try {
      const emailSent = await sendContactNotification(data)
      if (!emailSent) {
        console.warn('Email notification failed, but contact was saved')
      }
    } catch (emailError) {
      console.error('Error sending email notification:', emailError)
      // We don't return an error here since the contact was saved successfully
    }

    return {
      success: true,
      message: "¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto."
    }
  } catch (error) {
    console.error('Error in submitContactForm:', error)
    return {
      success: false,
      message: "Ocurrió un error inesperado. Por favor, intenta nuevamente."
    }
  }
}
