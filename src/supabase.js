import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://srnvqbvbsxsamucbltjr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNybnZxYnZic3hzYW11Y2JsdGpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAyMTA0MjYsImV4cCI6MTk5NTc4NjQyNn0.cbvybYWy9FhEH3AxyS7VB_iuN9BnUnsiOfndgqf5M3U";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
