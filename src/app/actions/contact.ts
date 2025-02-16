'use server'

import { supabase } from "@/lib/supabase"
import { sendContactNotification } from "@/lib/email"

export type ContactFormData = {
  name: string
  email: string
  phone: string
  message: string
}

export async function submitContactForm(formData: FormData) {
  try {
    const data: ContactFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
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
    const emailSent = await sendContactNotification(data)
    if (!emailSent) {
      console.warn('Email notification failed, but contact was saved')
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
