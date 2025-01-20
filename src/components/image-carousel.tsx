"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const images = [
  {
    src: "/placeholder.svg?height=600&width=1200",
    alt: "Nature landscape 1",
    title: "Discover Natural Beauty",
    description: "Experience the wonders of untouched wilderness",
  },
  {
    src: "/placeholder.svg?height=600&width=1200",
    alt: "Nature landscape 2",
    title: "Preserve Our Environment",
    description: "Join us in protecting our natural heritage",
  },
  {
    src: "/placeholder.svg?height=600&width=1200",
    alt: "Nature landscape 3",
    title: "Connect with Nature",
    description: "Find peace in the heart of nature",
  },
]

export function ImageCarousel() {
  return (
    <Carousel className="w-full max-w-6xl mx-auto">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative p-1">
              <Card className="border-0">
                <CardContent className="relative flex aspect-[2/1] items-center justify-center p-0">
                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">{image.title}</h2>
                    <p className="text-lg md:text-xl">{image.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

