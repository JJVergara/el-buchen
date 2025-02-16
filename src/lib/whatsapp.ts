import { ContactFormData } from '@/app/actions/contact'

const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN
const WHATSAPP_TO_NUMBER = process.env.WHATSAPP_TO_NUMBER
const WHATSAPP_TEMPLATE_NAME = process.env.WHATSAPP_TEMPLATE_NAME || 'contact_form_notification'

if (!WHATSAPP_TOKEN) {
  throw new Error('Missing WHATSAPP_TOKEN environment variable')
}

if (!WHATSAPP_TO_NUMBER) {
  throw new Error('Missing WHATSAPP_TO_NUMBER environment variable')
}

export async function sendWhatsAppNotification(data: ContactFormData) {
  try {
    const message = {
      messaging_product: 'whatsapp',
      to: WHATSAPP_TO_NUMBER,
      type: 'template',
      template: {
        name: WHATSAPP_TEMPLATE_NAME,
        language: {
          code: 'es',
        },
        components: [
          {
            type: 'body',
            parameters: [
              {
                type: 'text',
                text: data.name,
              },
              {
                type: 'text',
                text: data.email,
              },
              {
                type: 'text',
                text: data.phone || 'No proporcionado',
              },
              {
                type: 'text',
                text: data.message,
              },
            ],
          },
        ],
      },
    }

    const response = await fetch(
      `https://graph.facebook.com/v18.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${WHATSAPP_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      }
    )

    if (!response.ok) {
      const error = await response.json()
      console.error('WhatsApp API error:', error)
      return false
    }

    return true
  } catch (error) {
    console.error('Error sending WhatsApp notification:', error)
    return false
  }
}
