// Import the Supabase client
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// Your Supabase credentials
const supabaseUrl = "https://xrnxdrasxvsoeaxrznvk.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhybnhkcmFzeHZzb2VheHJ6bnZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc3NTgyODgsImV4cCI6MjA3MzMzNDI4OH0.gE5rj1IAsCW8rrzFM2zo0gz21-iTr9BWZplAN2IDeUE";

// Create client
export const supabase = createClient(supabaseUrl, supabaseKey);