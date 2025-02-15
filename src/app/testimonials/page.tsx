import { Navbar } from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Leaf, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { testimonials } from "../../../data/testimonials"
export default function TestimonialsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0f401e]/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Success Stories</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Read what our community members and partners have to say about their experiences with El Buchen.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              {testimonials.map((testimony) => (
                <Card key={testimony.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid gap-4 md:grid-cols-[1fr_200px] lg:gap-8">
                      <div className="space-y-4 p-6">
                        <blockquote className="space-y-2">
                          <p className="text-muted-foreground">{testimony.preview}</p>
                        </blockquote>
                        <div className="flex items-center space-x-4">
                          <div>
                            <div className="font-semibold">{testimony.author}</div>
                            <div className="text-sm text-muted-foreground">{testimony.role}</div>
                          </div>
                        </div>
                        <div>
                          <Link href={`/testimonials/${testimony.id}`}>
                            <Button variant="link" className="p-0 text-[#0f401e] hover:text-[#0f401e]/90">
                              Read full story <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                      <div className="relative min-h-[200px] overflow-hidden md:h-full">
                        <Image
                          src={testimony.imageUrl || "/placeholder.svg"}
                          alt={testimony.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row md:py-0">
          <div className="flex items-center gap-4 px-8 md:px-0">
            <Leaf className="h-6 w-6 text-[#0f401e]" />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} El Buchen. All rights reserved.
            </p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:text-[#0f401e]" href="/about">
              About
            </Link>
            <Link className="text-sm font-medium hover:text-[#0f401e]" href="/contact">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

