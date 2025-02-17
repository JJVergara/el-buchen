import { LocalImage } from '../dtos/image.dto'

const getRandomDimensions = () => {
  const random = Math.random()

  // Four different aspect ratios:
  // 1. Landscape (4:3) - 800x600
  // 2. Portrait (3:4) - 600x800
  // 3. Wide landscape (16:9) - 960x540
  // 4. Square (1:1) - 700x700

  if (random < 0.25) {
    return { width: 800, height: 600 } // Standard landscape
  } else if (random < 0.5) {
    return { width: 600, height: 800 } // Portrait
  } else if (random < 0.75) {
    return { width: 960, height: 540 } // Wide landscape
  } else {
    return { width: 700, height: 700 } // Square
  }
}

export const images: LocalImage[] = Array.from({ length: 650 }, (_, i) => {
  const dimensions = getRandomDimensions()
  return {
    id: i + 1,
    filename: `${i + 1}.jpg`,
    url: `/images/${i + 1}.jpg`,
    ...dimensions,
  }
})

// Helper function to check if an image exists
const validateImage = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: 'HEAD' })
    return response.ok
  } catch {
    return false
  }
}

// Filter out non-existent images
export const getValidImages = async (): Promise<LocalImage[]> => {
  const validImages: LocalImage[] = []

  for (const image of images) {
    if (await validateImage(image.url)) {
      validImages.push(image)
    }
  }

  return validImages
}
