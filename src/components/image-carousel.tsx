"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { useCallback, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { getImages } from "@/lib/queries/get-images"
import { GalleryImage } from "../../types/gallery"

interface CarouselImage {
  src: string
  alt: string
  title: string
  description: string
}

const DEFAULT_IMAGES: CarouselImage[] = [
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

function mapGalleryToCarousel(images: GalleryImage[]): CarouselImage[] {
  return images.map((image) => ({
    src: image.url,
    alt: image.title,
    title: image.title,
    description: image.description,
  }))
}

export function ImageCarousel() {
  const [isLoading, setIsLoading] = useState(true)

  const { data: galleryImages = [], error } = useQuery({
    queryKey: ["carousel-images"],
    queryFn: () => getImages(0, 5),
  })

  const images = galleryImages.length > 0 ? mapGalleryToCarousel(galleryImages) : DEFAULT_IMAGES

  const handleImageLoad = useCallback(() => {
    setIsLoading(false)
  }, [])

  return (
    <section aria-label="Image Carousel" className="w-full max-w-6xl mx-auto">
      {error instanceof Error && (
        <div className="text-red-500 text-center mb-4" role="alert">
          {error.message}
        </div>
      )}
      <Carousel className="relative">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={`${image.src}-${index}`}>
              <div className="relative p-1">
                <Card className="border-0">
                  <CardContent className="relative flex aspect-[2/1] items-center justify-center p-0 overflow-hidden">
                    <div
                      className={cn(
                        "absolute inset-0 bg-gray-200 animate-pulse",
                        !isLoading && "hidden"
                      )}
                      aria-hidden="true"
                    />
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      priority={index === 0}
                      className={cn(
                        "object-cover transition-opacity duration-300",
                        isLoading ? "opacity-0" : "opacity-100"
                      )}
                      onLoad={handleImageLoad}
                    />
                    <div 
                      className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white"
                      aria-hidden="true"
                    >
                      <h2 className="text-3xl md:text-4xl font-bold mb-2">
                        {image.title}
                      </h2>
                      <p className="text-lg md:text-xl text-center max-w-2xl px-4">
                        {image.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious 
          className="left-4"
          aria-label="Previous slide"
        />
        <CarouselNext 
          className="right-4"
          aria-label="Next slide"
        />
      </Carousel>
    </section>
  )
}

