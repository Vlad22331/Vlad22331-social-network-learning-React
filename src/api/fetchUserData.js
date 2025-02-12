import { createClient } from "@supabase/supabase-js";

const URL = "https://bidyyofdrwetctmsfmei.supabase.co";
const KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpZHl5b2ZkcndldGN0bXNmbWVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcxMjMwNjMsImV4cCI6MjA1MjY5OTA2M30.xWejwuVJnO2jKDoOo-dM3nisC6m_oYsEPJQM0X671dA"

const supabase = createClient(URL, KEY)

const fetchUserData  = async ({queryKey}) =>{
    const { data } = await supabase
    .from("users")
    .select("*")
    .eq("id", queryKey[1])
    .single()

    return data;
}

export default fetchUserData
