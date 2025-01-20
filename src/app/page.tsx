'use client';

import { Suspense } from "react"
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Shield, Heart, ArrowRight } from "lucide-react"
import Navbar from "@/components/navbar"
import ImageCarousel from "@/components/image-carousel"

interface Feature {
  icon: typeof Leaf
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Leaf,
    title: "Conservation",
    description: "Protecting natural habitats and biodiversity through sustainable practices",
  },
  {
    icon: Shield,
    title: "Education",
    description: "Raising awareness about environmental issues and solutions",
  },
  {
    icon: Heart,
    title: "Community",
    description: "Building a network of environmental stewards and advocates",
  },
]

function FeatureCard({ icon: Icon, title, description }: Feature) {
  return (
    <Card className="border-2 border-[#0f401e]/10">
      <CardContent className="flex flex-col items-center space-y-4 p-6">
        <Icon className="h-12 w-12 text-[#0f401e]" />
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-center text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0f401e]/5">
          <div className="container px-4 md:px-6">
            <Suspense fallback={<div className="h-[400px] bg-[#0f401e]/10 animate-pulse rounded-xl" />}>
              <ImageCarousel />
            </Suspense>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Mission</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Dedicated to preserving and protecting our natural environment for future generations
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0f401e]/5">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="relative aspect-video overflow-hidden rounded-xl lg:order-last">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="About El Buchen"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 600px, (min-width: 1024px) 400px, 100vw"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About El Buchen</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We are dedicated to preserving and protecting our natural environment. Our team works tirelessly to
                    ensure that future generations can enjoy the beauty of nature.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/about">
                    <Button className="bg-[#0f401e] hover:bg-[#0f401e]/90">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join Our Mission</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Be part of the change. Together we can make a difference.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="bg-[#0f401e] hover:bg-[#0f401e]/90">Get Involved</Button>
                </Link>
              </div>
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
