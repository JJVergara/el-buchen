"use client"

import { useState, useEffect } from "react"
import { BlurFade } from "@/components/magicui/blur-fade"
import ImagePopup from "@/components/image-popup"
import { useInView } from "react-intersection-observer"
import { images as allImages, LocalImage } from "@/data/images"

const IMAGES_PER_PAGE = 20

export default function ImageGallery() {
  const [images, setImages] = useState<LocalImage[]>([])
  const [selectedImage, setSelectedImage] = useState<LocalImage | null>(null)
  const [page, setPage] = useState(1)

  const fetchImages = async (pageNum: number) => {
    const startIndex = (pageNum - 1) * IMAGES_PER_PAGE
    const endIndex = startIndex + IMAGES_PER_PAGE
    const newImages = allImages.slice(startIndex, endIndex)
    setImages((prev) => [...prev, ...newImages])
  }

  // Load more images when scrolling
  const { ref: loadMoreRef } = useInView({
    onChange: (inView) => {
      if (inView) {
        setPage((prev) => prev + 1)
        fetchImages(page + 1)
      }
    },
  })

  const handleImageClick = (image: LocalImage) => {
    setSelectedImage(image)
  }

  const handleClosePopup = () => {
    setSelectedImage(null)
  }

  const handleNavigate = (direction: "prev" | "next") => {
    if (!selectedImage) return
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id)
    const newIndex = direction === "prev" ? currentIndex - 1 : currentIndex + 1
    if (newIndex >= 0 && newIndex < images.length) {
      setSelectedImage(images[newIndex])
    }
  }

  // Initial load
  useEffect(() => {
    fetchImages(1)
  }, [])

  return (
    <section id="photos" className="p-4">
      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
        {images.map((image, idx) => (
          <BlurFade key={image.id} delay={0.05 * (idx % 20)} inView>
            <div 
              className="mb-4 w-full cursor-pointer"
              style={{ position: 'relative', paddingBottom: `${(image.height / image.width) * 100}%` }}
              onClick={() => handleImageClick(image)}
            >
              <img
                className="absolute inset-0 w-full h-full rounded-lg object-cover"
                src={image.url}
                alt={`Image ${image.filename}`}
                loading="lazy"
              />
            </div>
          </BlurFade>
        ))}
      </div>
      <div ref={loadMoreRef} className="h-10" />
      {selectedImage && <ImagePopup image={selectedImage} onClose={handleClosePopup} onNavigate={handleNavigate} />}
    </section>
  )
}

