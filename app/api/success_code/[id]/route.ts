import { supabaseClient } from "@/app/libs/supabase";

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const { data, error } = await supabaseClient.from('sales')
    .select('code, checkout_id')
    .eq('code',params.id)
    const updateError= await supabaseClient.from('sales').update({'code': null, 'success': true}).match({'code': params.id})
    console.log("EU", updateError)
    return Response.json(data)
}