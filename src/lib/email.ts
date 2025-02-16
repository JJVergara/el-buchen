import { Resend } from 'resend'
import { ContactFormData } from '@/app/actions/contact'
import ContactNotificationEmail from '@/emails/contact-notification'

const RESEND_API_KEY = process.env.RESEND_API_KEY
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL as string

if (!RESEND_API_KEY) {
  throw new Error('Missing RESEND_API_KEY environment variable')
}

if (!NOTIFICATION_EMAIL) {
  throw new Error('Missing NOTIFICATION_EMAIL environment variable')
}

const resend = new Resend(RESEND_API_KEY)

export async function sendContactNotification(data: ContactFormData) {
  try {
    const { error } = await resend.emails.send({
      from: 'El Buchén <onboarding@resend.dev>',
      to: [NOTIFICATION_EMAIL],
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
