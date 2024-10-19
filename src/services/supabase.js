import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://nmliitldrnmsrfcusuvv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tbGlpdGxkcm5tc3JmY3VzdXZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI1MTgwNDksImV4cCI6MjAzODA5NDA0OX0.SGWo9FUut0CgIAn5wlRFT56ZlshqJBKtzG-sY3qIMpQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
