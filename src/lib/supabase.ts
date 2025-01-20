import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://tergmtkpeyhdhhwnpdsz.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlcmdtdGtwZXloZGhod25wZHN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczMzY5NzIsImV4cCI6MjA1MjkxMjk3Mn0.zZA4MwHXPlJCslQHfBUq9uk3vOd2_bXRCE1YciorNGY';
export const supabase = createClient(supabaseUrl, supabaseKey);