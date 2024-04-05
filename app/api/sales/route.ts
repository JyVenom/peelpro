import { supabaseClient } from "@/app/libs/supabase"

type Transaction = {
    success: boolean;
    amount: number;
}
export async function GET(req: Request) {
    const startingAmount = 173  // Actual cringe/funny/:skull: move - Jerry
    const { data, error } = await supabaseClient.from('sales') // Replace with your table name
    .select('success, amount')
    .eq('success', true) // Filter for successes
    if (data == null) return Response.json({raised: 0})
    const totalAmount: number = data.reduce((sum: number, transaction: Transaction) => {
        return sum + transaction.amount;
      }, 0);
    return Response.json({raised: totalAmount+startingAmount})
  }