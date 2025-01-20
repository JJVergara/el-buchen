import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: { persistSession: false }
});

export async function getImageUrls() {
  try {
    const { data: files, error } = await supabase
      .storage
      .from('images')
      .list('', {
        limit: 10,
        sortBy: { column: 'name', order: 'asc' }
      });

    if (error) throw error;

    if (!files || files.length === 0) {
      return [];
    }

    return files.map(file => ({
      url: `${supabaseUrl}/storage/v1/object/public/images/${file.name}`,
      alt: file.name,
      caption: file.name.split('.')[0].replace(/-/g, ' ')
    }));
  } catch (error) {
    console.error('Error in getImageUrls:', error);
    return [];
  }
}