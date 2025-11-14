import { createClient } from "@supabase/supabase-js";

const URL = "https://twfechittpqabwikmwjt.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3ZmVjaGl0dHBxYWJ3aWttd2p0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4MTQxNTAsImV4cCI6MjA3ODM5MDE1MH0.8QPu6pzBt2giQULKEDTupfuc3wP-L-ADr0k9Mswyp6M";

export const supabase = createClient(URL, API_KEY);
