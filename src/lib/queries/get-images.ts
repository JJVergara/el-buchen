import { supabase } from "@/lib/supabase"
import { GalleryImage } from "../../../types/gallery"

export interface CarouselImage {
  src: string
  alt: string
  title: string
  description: string
}

export async function getImages(page: number, limit = 12): Promise<GalleryImage[]> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error('Supabase environment variables are not configured')
  }

  console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)
  console.log('Supabase Anon Key (first 8 chars):', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY.substring(0, 8))

  const { data: buckets, error: bucketsError } = await supabase
    .storage
    .listBuckets()

  if (bucketsError) {
    console.error('Error listing buckets:', bucketsError)
    throw bucketsError
  }

  console.log('Available buckets:', buckets)

  const offset = page * limit

  const { data: files, error } = await supabase.storage.from('images').list();

  if (error) {
    console.error('Error listing files:', error)
    throw error
  }

  console.log('Files found:', files)
  
  if (!files || files.length === 0) {
    console.info(`No images found for page ${page}`)
    return []
  }

  return files.map((file) => {
    if (!file.name) {
      throw new Error('File name is missing from Supabase response')
    }

    const caption = file.name.split('.')[0].replace(/-/g, ' ')
    return {
      id: file.name,
      url: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${file.name}`,
      title: caption,
      description: `Explore the beauty of ${caption}`,
      width: 800,
      height: 600,
    }
  })
}