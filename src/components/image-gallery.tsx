'use client'

import { useState, useEffect } from 'react'
import { BlurFade } from '@/components/magicui/blur-fade'
import ImagePopup from '@/components/image-popup'
import { useInView } from 'react-intersection-observer'
import { getValidImages } from '../../mock-data/images'
import { LocalImage } from '../../dtos/image.dto'

const IMAGES_PER_PAGE = 20

export default function ImageGallery() {
  const [images, setImages] = useState<LocalImage[]>([])
  const [selectedImage, setSelectedImage] = useState<LocalImage | null>(null)
  const [page, setPage] = useState(1)
  const [allValidImages, setAllValidImages] = useState<LocalImage[]>([])

  const fetchImages = async (pageNum: number) => {
    if (allValidImages.length === 0) {
      const validImages = await getValidImages()
      setAllValidImages(validImages)

      const startIndex = 0
      const endIndex = IMAGES_PER_PAGE
      setImages(validImages.slice(startIndex, endIndex))
    } else {
      const startIndex = (pageNum - 1) * IMAGES_PER_PAGE
      const endIndex = startIndex + IMAGES_PER_PAGE

      setImages(allValidImages.slice(0, endIndex))
    }
  }

  useEffect(() => {
    fetchImages(1)
  }, [])

  const { ref: loadMoreRef } = useInView({
    onChange: inView => {
      if (inView && allValidImages.length > images.length) {
        setPage(prev => prev + 1)
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

  const handleNavigate = (direction: 'prev' | 'next') => {
    if (!selectedImage) return
    const currentIndex = images.findIndex(img => img.id === selectedImage.id)
    const newIndex = direction === 'prev' ? currentIndex - 1 : currentIndex + 1
    if (newIndex >= 0 && newIndex < images.length) {
      setSelectedImage(images[newIndex])
    }
  }

  // Helper function to distribute images into columns
  const distributeColumns = (imageList: LocalImage[]) => {
    const columns = {
      col1: [] as LocalImage[],
      col2: [] as LocalImage[],
      col3: [] as LocalImage[],
      col4: [] as LocalImage[],
    }

    imageList.forEach((image, index) => {
      const colIndex = index % 4
      switch (colIndex) {
        case 0:
          columns.col1.push(image)
          break
        case 1:
          columns.col2.push(image)
          break
        case 2:
          columns.col3.push(image)
          break
        case 3:
          columns.col4.push(image)
          break
      }
    })

    return columns
  }

  return (
    <section id="photos" className="p-4">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          {distributeColumns(images).col1.map((image, idx) => (
            <BlurFade key={image.id} delay={0.05 * idx} inView>
              <div
                className="w-full cursor-pointer"
                style={{
                  position: 'relative',
                  paddingBottom: `${(image.height / image.width) * 100}%`,
                }}
                onClick={() => handleImageClick(image)}
              >
                <img
                  className="absolute inset-0 h-full w-full rounded-lg object-cover"
                  src={image.url}
                  alt={`Image ${image.filename}`}
                  loading="lazy"
                />
              </div>
            </BlurFade>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {distributeColumns(images).col2.map((image, idx) => (
            <BlurFade key={image.id} delay={0.05 * idx} inView>
              <div
                className="w-full cursor-pointer"
                style={{
                  position: 'relative',
                  paddingBottom: `${(image.height / image.width) * 100}%`,
                }}
                onClick={() => handleImageClick(image)}
              >
                <img
                  className="absolute inset-0 h-full w-full rounded-lg object-cover"
                  src={image.url}
                  alt={`Image ${image.filename}`}
                  loading="lazy"
                />
              </div>
            </BlurFade>
          ))}
        </div>
        <div className="hidden flex-col gap-4 sm:flex">
          {distributeColumns(images).col3.map((image, idx) => (
            <BlurFade key={image.id} delay={0.05 * idx} inView>
              <div
                className="w-full cursor-pointer"
                style={{
                  position: 'relative',
                  paddingBottom: `${(image.height / image.width) * 100}%`,
                }}
                onClick={() => handleImageClick(image)}
              >
                <img
                  className="absolute inset-0 h-full w-full rounded-lg object-cover"
                  src={image.url}
                  alt={`Image ${image.filename}`}
                  loading="lazy"
                />
              </div>
            </BlurFade>
          ))}
        </div>
        <div className="hidden flex-col gap-4 lg:flex">
          {distributeColumns(images).col4.map((image, idx) => (
            <BlurFade key={image.id} delay={0.05 * idx} inView>
              <div
                className="w-full cursor-pointer"
                style={{
                  position: 'relative',
                  paddingBottom: `${(image.height / image.width) * 100}%`,
                }}
                onClick={() => handleImageClick(image)}
              >
                <img
                  className="absolute inset-0 h-full w-full rounded-lg object-cover"
                  src={image.url}
                  alt={`Image ${image.filename}`}
                  loading="lazy"
                />
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
      <div ref={loadMoreRef} className="h-10" />
      {selectedImage && (
        <ImagePopup image={selectedImage} onClose={handleClosePopup} onNavigate={handleNavigate} />
      )}
    </section>
  )
}
