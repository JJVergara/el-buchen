'use server'

import { supabase } from '@/lib/supabase'
import { sendContactNotification } from '@/lib/email'
import { sendWhatsAppNotification } from '@/lib/whatsapp'

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

    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      (phone !== null && typeof phone !== 'string') ||
      typeof message !== 'string'
    ) {
      return {
        success: false,
        message: 'Error en el formato de los datos enviados.',
      }
    }

    const data: ContactFormData = {
      name,
      email,
      phone: phone || '',
      message,
    }

    if (!data.name || !data.email || !data.message) {
      return {
        success: false,
        message: 'Por favor, complete todos los campos requeridos.',
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        message: 'Por favor, ingrese una dirección de correo electrónico válida.',
      }
    }

    const { error: dbError } = await supabase.from('contacts').insert([
      {
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        message: data.message,
      },
    ])

    if (dbError) {
      console.error('Error saving contact form:', dbError)
      return {
        success: false,
        message: 'Hubo un error al enviar tu mensaje. Por favor, intenta nuevamente.',
      }
    }

    // Send notifications in parallel
    const [emailSent, whatsappSent] = await Promise.allSettled([
      sendContactNotification(data),
      sendWhatsAppNotification(data),
    ])

    // Log notification failures but don't fail the request
    if (emailSent.status === 'rejected' || (emailSent.status === 'fulfilled' && !emailSent.value)) {
      console.warn('Email notification failed, but contact was saved')
    }

    if (
      whatsappSent.status === 'rejected' ||
      (whatsappSent.status === 'fulfilled' && !whatsappSent.value)
    ) {
      console.warn('WhatsApp notification failed, but contact was saved')
    }

    return {
      success: true,
      message: '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.',
    }
  } catch (error) {
    console.error('Error in submitContactForm:', error)
    return {
      success: false,
      message: 'Ocurrió un error inesperado. Por favor, intenta nuevamente.',
    }
  }
}
