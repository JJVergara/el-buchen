import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: { persistSession: false }
});

export async function getImageUrls() {
  const { data: files, error } = await supabase
    .storage
    .from('your-bucket-name')
    .list('', {
      limit: 10,
      offset: 0,
      sortBy: { column: 'name', order: 'asc' }
    });

  if (error) {
    console.error('Error fetching images:', error);
    return [];
  }

  return files.map(file => ({
    url: `${supabaseUrl}/storage/v1/object/public/your-bucket-name/${file.name}`,
    alt: file.name,
    caption: file.name.split('.')[0].replace(/-/g, ' ')
  }));
}