"use client"
import { useRef, useState } from "react"
import Image from "next/image"
import { useInfiniteQuery } from "@tanstack/react-query"
import { getImages } from "../lib/queries/get-images"
import { LoadingSpinner } from "@/components/loading-spinner"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { GalleryImage } from "../../types/gallery"

const IMAGES_PER_PAGE = 12

export function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const observerTarget = useRef<HTMLDivElement>(null)

  const {
    data,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["gallery-images"],
    queryFn: ({ pageParam = 0 }) => {
      console.log("Fetching images for page:", pageParam)
      return getImages(pageParam, IMAGES_PER_PAGE)
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === IMAGES_PER_PAGE ? allPages.length : undefined
    },
    initialPageParam: 0,
  })

  const allImages = data?.pages.flat() ?? []
  const isLoading = status === "pending"
  const isError = status === "error"

  console.log("All pages", data?.pages)
  console.log("All images", allImages)
  console.log("Last page", data?.pages[data?.pages.length - 1])

  if (isError) {
    return (
      <div className="text-center py-8 text-red-500">
        Error loading images. Please try again later.
      </div>
    )
  }

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4 p-4">
        {allImages.map((image) => (
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

      {(isLoading || isFetchingNextPage) && <LoadingSpinner />}

      {!isLoading && hasNextPage && (
        <div ref={observerTarget} className="h-10" />
      )}

      {!hasNextPage && !isLoading && (
        <div className="text-center py-8 text-muted-foreground">
          No more images to load
        </div>
      )}

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

