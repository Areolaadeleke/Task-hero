import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://klpyuooljlnpucbklyuv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtscHl1b29samxucHVjYmtseXV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI4MjkzOTEsImV4cCI6MjA0ODQwNTM5MX0.iZv_x8D03_90ANLgTu-JiJT6bTs32vHTpBgGNfgZ8cg";
export const supabase = createClient(supabaseUrl, supabaseKey);
