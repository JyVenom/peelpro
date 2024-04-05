import { supabaseClient } from "@/app/libs/supabase"

export async function GET(req: Request) {
  const { data, error } = await supabaseClient.from('pre_sale_updates') // Replace with your table name
  .select('*')
  .gte('date', new Date().toISOString()) // Filter for future dates
  .order('date', { ascending: true }) // Order by date ascending
  .limit(1)
  console.log(data)
  if (data != null && data.length > 0){
    return Response.json(data[0])
  } 
}