import { supabase } from '../supabase'

export default async function getPdfs() {
  const { data, error } = await supabase.storage.from('pdfs').list()
  if (error) {
    console.error('Error in getPdfs:', error)
    throw new Error(`Failed to fetch PDFs: ${error.message}`)
  }
  return data
}
