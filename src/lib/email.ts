import { Resend } from 'resend'
import { ContactFormData } from '@/app/actions/contact'
import ContactNotificationEmail from '@/emails/contact-notification'

if (!process.env.RESEND_API_KEY) {
  throw new Error('Missing RESEND_API_KEY environment variable')
}

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactNotification(data: ContactFormData) {

  console.log("La api key es", process.env.RESEND_API_KEY)
  if (!process.env.NOTIFICATION_EMAIL) {
    throw new Error('Missing NOTIFICATION_EMAIL environment variable')
  }
  if (!process.env.RESEND_API_KEY) {
    throw new Error('Missing RESEND_API_KEY environment variable')
  }

  try {
    const { error } = await resend.emails.send({
      from: 'El Buchén <onboarding@resend.dev>',
      to: [process.env.NOTIFICATION_EMAIL],
      subject: 'Nueva consulta desde El Buchén',
      react: ContactNotificationEmail({ data }),
    })

    if (error) {
      console.error('Error sending email:', error)
      return false
    }

    return true
  } catch (error) {
    console.error('Error in sendContactNotification:', error)
    return false
  }
} 