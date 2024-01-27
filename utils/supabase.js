import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hohkcusmxeskewszksjx.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvaGtjdXNteGVza2V3c3prc2p4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYzNzQ4NjQsImV4cCI6MjAyMTk1MDg2NH0.aoIo22Djnxham6VvbXI9wyF0AX0j65IDGgbRcz5zUFU'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})