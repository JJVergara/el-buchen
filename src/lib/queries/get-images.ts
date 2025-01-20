import { supabase } from "@/lib/supabase"
import { GalleryImage } from "../../../types/gallery"

export interface CarouselImage {
  src: string
  alt: string
  title: string
  description: string
}

interface SupabaseImage {
  url: string
  alt: string
  caption: string
}

export async function getImages(page: number, limit = 12): Promise<GalleryImage[]> {
  try {
    const offset = page * limit
    
    const { data: files, error } = await supabase
      .storage
      .from('images')
      .list('', {
        limit: limit,
        offset: offset,
        sortBy: { column: 'name', order: 'asc' },
      })

    if (error) {
      throw new Error(`Failed to fetch images: ${error.message}`)
    }

    if (!files?.length) {
      return []
    }

    const images: SupabaseImage[] = files.map(file => ({
      url: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${file.name}`,
      alt: file.name,
      caption: file.name.split('.')[0].replace(/-/g, ' '),
    }))

    return images.map((img) => ({
      id: img.url,
      url: img.url,
      title: img.caption,
      description: `Explore the beauty of ${img.caption}`,
      width: 800,
      height: 600,
    }))
  } catch (error) {
    console.error('Error in getImages:', error)
    throw error instanceof Error
      ? error
      : new Error('Unknown error occurred while fetching images')
  }
}
