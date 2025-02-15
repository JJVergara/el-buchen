import { Navbar } from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Leaf, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { testimonials } from "../../../../data/testimonials"

export default function TestimonyPage({ params }: { params: { id: string } }) {
  const testimony = testimonials.find((t) => t.id === params.id)

  if (!testimony) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Link href="/testimonials">
              <Button variant="link" className="mb-8 p-0 text-[#0f401e] hover:text-[#0f401e]/90">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to testimonials
              </Button>
            </Link>

            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h1 className="text-3xl font-bold tracking-tighter">{testimony.author}&apos;s Story</h1>
                      <p className="text-muted-foreground">{testimony.role}</p>
                    </div>
                    <div className="space-y-4 text-muted-foreground">
                      {testimony.fullText.split("\n").map((paragraph: string, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Shared on {new Date(testimony.date).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-lg md:aspect-[3/4]">
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

