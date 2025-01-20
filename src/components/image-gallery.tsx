"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { getImages } from "@/lib/get-images"
import { LoadingSpinner } from "@/components/loading-spinner"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { GalleryImage } from "../../types/gallery"

export function ImageGallery() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const observerTarget = useRef(null)

  useEffect(() => {
    const loadImages = async () => {
      if (loading || !hasMore) return

      setLoading(true)
      const newImages = await getImages(page)
      setLoading(false)

      if (newImages.length === 0) {
        setHasMore(false)
        return
      }

      setImages((prev) => [...prev, ...newImages])
    }

    loadImages()
  }, [page])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          setPage((prev) => prev + 1)
        }
      },
      { threshold: 1.0 },
    )

    if (observerTarget.current) {
      observer.observe(observerTarget.current)
    }

    return () => observer.disconnect()
  }, [hasMore, loading])

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4 p-4">
        {images.map((image) => (
          <div key={image.id} className="break-inside-avoid" onClick={() => setSelectedImage(image)}>
            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
              <Image
                src={image.url || "/placeholder.svg"}
                alt={image.title}
                width={image.width}
                height={image.height}
                className="w-full h-auto transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {loading && <LoadingSpinner />}

      {!loading && hasMore && <div ref={observerTarget} className="h-10" />}

      {!hasMore && <div className="text-center py-8 text-muted-foreground">No more images to load</div>}

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        {selectedImage && (
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>{selectedImage.title}</DialogTitle>
              <DialogDescription>{selectedImage.description}</DialogDescription>
            </DialogHeader>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={selectedImage.url || "/placeholder.svg"}
                alt={selectedImage.title}
                fill
                className="object-cover"
              />
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  )
}

