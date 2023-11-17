import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://iimwuzmtvtzfkastqsgo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpbXd1em10dnR6Zmthc3Rxc2dvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxNDk0MzQsImV4cCI6MjAxNTcyNTQzNH0.b9O8fi-aZNUcgJooS5UfaoDVhQd0fRhPQrW13g47e5Q";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
