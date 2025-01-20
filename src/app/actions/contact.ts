'use server'

export type ContactFormData = {
  name: string
  email: string
  phone: string
  message: string
}

export async function submitContactForm(formData: FormData) {
  // Simulate a delay to show loading state
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const data: ContactFormData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    message: formData.get('message') as string,
  }

  // Here you would typically send this data to your backend service
  // For now, we'll just return a success message
  return {
    success: true,
    message: "Thank you for your message. We'll get back to you soon!"
  }
}
