"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Leaf, Phone, Mail, MessageSquare } from "lucide-react"
import { submitContactForm } from "../actions/contact"
import { useFormStatus } from "react-dom"
import { toast } from "sonner"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" className="w-full bg-[#0f401e] hover:bg-[#0f401e]/90" disabled={pending}>
      {pending ? "Sending..." : "Send Message"}
    </Button>
  )
}

export default function ContactPage() {
  const [formKey, setFormKey] = useState(0)

  async function handleSubmit(formData: FormData) {
    const response = await submitContactForm(formData)
    if (response.success) {
      toast.success(response.message)
      // Reset form
      setFormKey((prev) => prev + 1)
    } else {
      toast.error("Something went wrong. Please try again.")
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0f401e]/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Get in Touch</h2>
                  <p className="text-muted-foreground">
                    Have questions about our conservation efforts? Want to get involved? We&apos;re here to help.
                  </p>
                </div>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="flex items-center space-x-4 p-6">
                      <Phone className="h-6 w-6 text-[#0f401e]" />
                      <div>
                        <CardTitle className="text-base">Phone</CardTitle>
                        <CardDescription>Mon-Fri from 8am to 5pm</CardDescription>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex items-center space-x-4 p-6">
                      <Mail className="h-6 w-6 text-[#0f401e]" />
                      <div>
                        <CardTitle className="text-base">Email</CardTitle>
                        <CardDescription>We&apos;ll respond within 24 hours</CardDescription>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex items-center space-x-4 p-6">
                      <MessageSquare className="h-6 w-6 text-[#0f401e]" />
                      <div>
                        <CardTitle className="text-base">Live Chat</CardTitle>
                        <CardDescription>Available during business hours</CardDescription>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form action={handleSubmit} className="space-y-4" key={formKey}>
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="Your phone number" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        className="min-h-[100px]"
                        required
                      />
                    </div>
                    <SubmitButton />
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row md:py-0">
          <div className="flex items-center gap-4 px-8 md:px-0">
            <Leaf className="h-6 w-6 text-[#0f401e]" />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} El Buchen. All rights reserved.
            </p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <a className="text-sm font-medium hover:text-[#0f401e]" href="/about">
              About
            </a>
            <a className="text-sm font-medium hover:text-[#0f401e]" href="/contact">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

