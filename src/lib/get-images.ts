import { GalleryImage } from "../../types/gallery"

// This simulates fetching images from an API
export async function getImages(page: number, limit = 12): Promise<GalleryImage[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Generate mock images
  const startIndex = page * limit
  const images: GalleryImage[] = Array.from({ length: limit }, (_, i) => {
    const id = (startIndex + i + 1).toString()
    const isLandscape = Math.random() > 0.5
    return {
      id,
      url: `/placeholder.svg?height=${isLandscape ? 400 : 600}&width=${isLandscape ? 600 : 400}`,
      title: `Nature Scene ${id}`,
      description: `Beautiful nature photograph showcasing the wilderness`,
      width: isLandscape ? 600 : 400,
      height: isLandscape ? 400 : 600,
    }
  })

  // Simulate end of data after 5 pages
  if (page >= 5) {
    return []
  }

  return images
}

