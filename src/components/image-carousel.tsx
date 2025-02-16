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
import type { GalleryImage } from "../../types/gallery"
import type { CarouselImage } from "@/types/carousel"
import { defaultCarouselImages } from "../../data/carousel"
import { LoadingSpinner } from "@/components/loading-spinner"

function mapGalleryToCarousel(images: GalleryImage[]): CarouselImage[] {
  return images.map((image) => ({
    src: image.url,
    alt: image.title,
    title: image.title,
    description: image.description,
  }))
}

export function ImageCarousel() {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({})

  const { data: galleryImages, error, isLoading: isQueryLoading } = useQuery({
    queryKey: ["carousel-images"],
    queryFn: () => getImages(0, 5),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  })

  const images = galleryImages && galleryImages.length > 0 
    ? mapGalleryToCarousel(galleryImages) 
    : defaultCarouselImages

  const handleImageLoad = useCallback((src: string) => {
    setLoadedImages(prev => ({ ...prev, [src]: true }))
  }, [])

  if (isQueryLoading) {
    return (
      <div className="w-full max-w-6xl mx-auto flex justify-center items-center min-h-[300px]">
        <LoadingSpinner />
      </div>
    )
  }

  return (
    <section aria-label="Image Carousel" className="w-full max-w-6xl mx-auto">
      {error instanceof Error && (
        <div 
          className="text-red-500 text-center mb-4 p-4 bg-red-50 rounded-lg" 
          role="alert"
          aria-live="polite"
        >
          <p className="font-medium">Error al cargar las imágenes</p>
          <p className="text-sm">{error.message}</p>
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
                        loadedImages[image.src] && "hidden"
                      )}
                      aria-hidden="true"
                    />
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 1536px) 100vw, 1536px"
                      quality={90}
                      className={cn(
                        "object-cover transition-opacity duration-300",
                        loadedImages[image.src] ? "opacity-100" : "opacity-0"
                      )}
                      onLoad={() => handleImageLoad(image.src)}
                      onError={() => {
                        console.error(`Failed to load image: ${image.src}`)
                      }}
                    />
                    <div 
                      className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white"
                      aria-hidden="true"
                    >
                      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center px-4">
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
          className="left-4 focus:ring-2 focus:ring-white focus:ring-offset-2"
          aria-label="Previous slide"
        />
        <CarouselNext 
          className="right-4 focus:ring-2 focus:ring-white focus:ring-offset-2"
          aria-label="Next slide"
        />
      </Carousel>
    </section>
  )
}

