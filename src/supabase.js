import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://xfisczaqxrvsxtuuvybh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmaXNjemFxeHJ2c3h0dXV2eWJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY3MjI0OTcsImV4cCI6MjAyMjI5ODQ5N30.0ftw5c84ZreOfJwOgjtoTNh5lixx4JH_qxMuKRkvZWg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
