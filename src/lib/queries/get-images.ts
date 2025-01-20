
import { GalleryImage } from "../../../types/gallery"
import { supabase } from "../supabase"

export async function getImages(page: number, limit = 12): Promise<GalleryImage[]> {
  try {
    const { data: files, error } = await supabase
      .storage
      .from('images')
      .list('', {
        limit: limit,
        offset: page * limit,
        sortBy: { column: 'name', order: 'asc' },
      })

    if (error) {
      throw new Error(`Failed to fetch images: ${error.message}`)
    }

    if (!files?.length) {
      return []
    }

    return files.map(file => ({
      id: file.id,
      url: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/photos/${file.name}`,
      title: file.name.split('.')[0].replace(/-/g, ' '),
      description: file.metadata?.description || 'Nature photograph',
      width: file.metadata?.width || 800,
      height: file.metadata?.height || 600,
    }))

  } catch (error) {
    console.error('Error in getImages:', error)
    throw error instanceof Error
      ? error
      : new Error('Unknown error occurred while fetching images')
  }
}
