export interface LocalImage {
  id: number
  url: string
  filename: string
  width: number
  height: number
}

// Helper function to generate random dimensions that maintain realistic aspect ratios
const getRandomDimensions = () => {
  const isLandscape = Math.random() > 0.5
  return isLandscape 
    ? { width: 800, height: 600 } 
    : { width: 600, height: 800 }
}

export const images: LocalImage[] = [
  // DSC images
  ...Array.from({ length: 89 }, (_, i) => {
    const dimensions = getRandomDimensions()
    return {
      id: i + 1,
      filename: `DSC_${1213 + i}.JPG`,
      url: `/images/DSC_${1213 + i}.JPG`,
      ...dimensions
    }
  }),
  // SSL images
  ...Array.from({ length: 10 }, (_, i) => {
    const dimensions = getRandomDimensions()
    return {
      id: 90 + i,
      filename: `SSL22${120 + i * 10}.JPG`,
      url: `/images/SSL22${120 + i * 10}.JPG`,
      ...dimensions
    }
  }),
  // fotoscv images
  ...Array.from({ length: 6 }, (_, i) => {
    const dimensions = getRandomDimensions()
    return {
      id: 100 + i,
      filename: `fotoscv ${String(3 + i * 10).padStart(3, '0')}.jpg`,
      url: `/images/fotoscv ${String(3 + i * 10).padStart(3, '0')}.jpg`,
      ...dimensions
    }
  }),
  // Salto Los Maquis images
  ...Array.from({ length: 5 }, (_, i) => {
    const dimensions = getRandomDimensions()
    return {
      id: 110 + i,
      filename: `Salto  Los Maquis ${String(3 + i * 5).padStart(3, '0')}.jpg`,
      url: `/images/Salto  Los Maquis ${String(3 + i * 5).padStart(3, '0')}.jpg`,
      ...dimensions
    }
  }),
  // Other miscellaneous images
  {
    id: 120,
    filename: 'Invierno nevado.jpg',
    url: '/images/Invierno nevado.jpg',
    ...getRandomDimensions()
  },
  {
    id: 121,
    filename: 'IMG_5317.jpg',
    url: '/images/IMG_5317.jpg',
    ...getRandomDimensions()
  },
  {
    id: 122,
    filename: 'IMG_5305.jpg',
    url: '/images/IMG_5305.jpg',
    ...getRandomDimensions()
  },
  {
    id: 123,
    filename: 'Perforación Carpintero.JPG',
    url: '/images/Perforación Carpintero.JPG',
    ...getRandomDimensions()
  }
]; 

// Helper function to check if an image exists
const validateImage = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
}

// Filter out non-existent images
export const getValidImages = async (): Promise<LocalImage[]> => {
  const validImages: LocalImage[] = [];
  
  for (const image of images) {
    if (await validateImage(image.url)) {
      validImages.push(image);
    }
  }
  
  return validImages;
} 