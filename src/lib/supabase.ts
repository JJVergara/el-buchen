import { createClient } from '@supabase/supabase-js'
import { assertValue } from './utils'

// Get environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Validate environment variables at startup
assertValue(supabaseUrl, 'Missing NEXT_PUBLIC_SUPABASE_URL')
assertValue(supabaseAnonKey, 'Missing NEXT_PUBLIC_SUPABASE_ANON_KEY')

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