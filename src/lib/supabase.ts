import { createClient } from '@supabase/supabase-js'
import { assertValue } from './utils'

// Get environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Validate environment variables at startup
assertValue(supabaseUrl, 'Missing NEXT_PUBLIC_SUPABASE_URL')
assertValue(supabaseAnonKey, 'Missing NEXT_PUBLIC_SUPABASE_ANON_KEY')

interface ImageMetadata {
  url: string
  alt: string
  caption: string
}

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: { persistSession: false },
    db: {
      schema: 'public',
    },
  }
)

/**
 * Fetches image URLs from Supabase storage
 * @returns Array of image metadata objects
 * @throws Error if the storage operation fails
 */
export async function getImageUrls(): Promise<ImageMetadata[]> {
  try {
    const { data: files, error } = await supabase
      .storage
      .from('images')
      .list('', {
        limit: 10,
        sortBy: { column: 'name', order: 'asc' },
      })

    if (error) {
      throw new Error(`Failed to fetch images: ${error.message}`)
    }

    if (!files?.length) {
      return []
    }

    return files.map(file => ({
      url: `${supabaseUrl}/storage/v1/object/public/images/${file.name}`,
      alt: file.name,
      caption: file.name.split('.')[0].replace(/-/g, ' '),
    }))
  } catch (error) {
    console.error('Error in getImageUrls:', error)
    throw error instanceof Error 
      ? error 
      : new Error('Unknown error occurred while fetching images')
  }
}