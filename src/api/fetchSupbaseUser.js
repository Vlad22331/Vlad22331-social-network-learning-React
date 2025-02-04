import { createClient } from "@supabase/supabase-js";

const url = "https://bidyyofdrwetctmsfmei.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpZHl5b2ZkcndldGN0bXNmbWVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcxMjMwNjMsImV4cCI6MjA1MjY5OTA2M30.xWejwuVJnO2jKDoOo-dM3nisC6m_oYsEPJQM0X671dA"

const supabase = createClient(url, key)

const fetchSupbaseUser  = async (id) =>{
    const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", id)
    return data;
}

export default fetchSupbaseUser
