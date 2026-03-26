import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder'
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY || 'placeholder'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Server-side client with secret key
export const supabaseAdmin = createClient(supabaseUrl, supabaseSecretKey)
