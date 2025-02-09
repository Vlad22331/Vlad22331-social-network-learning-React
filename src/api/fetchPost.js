import { createClient } from "@supabase/supabase-js";

const URL = "https://bidyyofdrwetctmsfmei.supabase.co";
const KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpZHl5b2ZkcndldGN0bXNmbWVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcxMjMwNjMsImV4cCI6MjA1MjY5OTA2M30.xWejwuVJnO2jKDoOo-dM3nisC6m_oYsEPJQM0X671dA"

const supbase = createClient(URL, KEY)


const fetchPost = async ({pageParam = 0, queryKey}) => {
    const pageSize = 3;

    const { data } = await supbase
    .from("posts")
    .select("*", {count: "exact"})
    .range(pageParam * pageSize, (pageParam + 1) * pageSize - 1)
    .eq("user_id", queryKey[1])

    return data || [];
}

export default fetchPost