"use client"

import { useState, useEffect } from "react"
import { BlurFade } from "@/components/magicui/blur-fade"
import ImagePopup from "@/components/image-popup"
import { useInView } from "react-intersection-observer"

interface Image {
  id: number
  url: string
  width: number
  height: number
}

export default function ImageGallery() {
  const [images, setImages] = useState<Image[]>([])
  const [selectedImage, setSelectedImage] = useState<Image | null>(null)
  const [page, setPage] = useState(1)
  const { ref, inView } = useInView()

  const fetchImages = async (pageNum: number) => {
    // In a real application, you would fetch from an API
    const newImages = Array.from({ length: 20 }, (_, i) => {
      const id = (pageNum - 1) * 20 + i + 1
      const isLandscape = Math.random() > 0.5
      const width = isLandscape ? 800 : 600
      const height = isLandscape ? 600 : 800
      return {
        id,
        url: `https://picsum.photos/seed/${id}/${width}/${height}`,
        width,
        height,
      }
    })
    setImages((prev) => [...prev, ...newImages])
  }

  useEffect(() => {
    fetchImages(page)
  }, [page]) // Removed fetchImages from dependencies

  useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1)
    }
  }, [inView])

  const handleImageClick = (image: Image) => {
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

  return (
    <section id="photos" className="p-4">
      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
        {images.map((image, idx) => (
          <BlurFade key={image.id} delay={0.05 * (idx % 20)} inView>
            <img
              className="mb-4 w-full rounded-lg object-cover cursor-pointer"
              src={image.url || "/placeholder.svg"}
              alt={`Random stock image ${image.id}`}
              onClick={() => handleImageClick(image)}
              style={{
                aspectRatio: `${image.width} / ${image.height}`,
              }}
            />
          </BlurFade>
        ))}
      </div>
      <div ref={ref} className="h-10" /> {/* Intersection observer target */}
      {selectedImage && <ImagePopup image={selectedImage} onClose={handleClosePopup} onNavigate={handleNavigate} />}
    </section>
  )
}

