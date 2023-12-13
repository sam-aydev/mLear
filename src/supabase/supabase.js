import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://zynfztiksaxytdqnxltg.supabase.co'
export const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5bmZ6dGlrc2F4eXRkcW54bHRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIxNTY1MjYsImV4cCI6MjAxNzczMjUyNn0.Q13t_VB7ErAh9R39p6MjcgRLaAt_Ca-yn4fAg6clBMM'
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;


