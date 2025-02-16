'use client'

import * as React from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import { useCallback, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { CarouselImage, getImages } from '@/lib/queries/get-images'
import type { GalleryImage } from '../../dtos/gallery.dto'
import { defaultCarouselImages } from '../../mock-data/carousel'
import { LoadingSpinner } from '@/components/loading-spinner'

function mapGalleryToCarousel(images: GalleryImage[]): CarouselImage[] {
  return images.map(image => ({
    src: image.url,
    alt: image.title,
    title: image.title,
    description: image.description,
  }))
}

export function ImageCarousel() {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({})

  const {
    data: galleryImages,
    error,
    isLoading: isQueryLoading,
  } = useQuery({
    queryKey: ['carousel-images'],
    queryFn: () => getImages(0),
    staleTime: 5 * 60 * 1000,
    retry: 2,
  })

  const images =
    galleryImages && galleryImages.length > 0
      ? mapGalleryToCarousel(galleryImages)
      : defaultCarouselImages

  const handleImageLoad = useCallback((src: string) => {
    setLoadedImages(prev => ({ ...prev, [src]: true }))
  }, [])

  if (isQueryLoading) {
    return (
      <div className="mx-auto flex min-h-[300px] w-full max-w-6xl items-center justify-center">
        <LoadingSpinner />
      </div>
    )
  }

  return (
    <section aria-label="Image Carousel" className="mx-auto w-full max-w-6xl">
      {error instanceof Error && (
        <div
          className="mb-4 rounded-lg bg-red-50 p-4 text-center text-red-500"
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
                  <CardContent className="relative flex aspect-[2/1] items-center justify-center overflow-hidden p-0">
                    <div
                      className={cn(
                        'absolute inset-0 animate-pulse bg-gray-200',
                        loadedImages[image.src] && 'hidden'
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
                        'object-cover transition-opacity duration-300',
                        loadedImages[image.src] ? 'opacity-100' : 'opacity-0'
                      )}
                      onLoad={() => handleImageLoad(image.src)}
                      onError={() => {
                        console.error(`Failed to load image: ${image.src}`)
                      }}
                    />
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 text-white"
                      aria-hidden="true"
                    >
                      <h2 className="mb-2 px-4 text-center text-3xl font-bold md:text-4xl">
                        {image.title}
                      </h2>
                      <p className="max-w-2xl px-4 text-center text-lg md:text-xl">
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
