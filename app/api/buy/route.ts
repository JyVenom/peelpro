import { supabaseClient } from "@/app/libs/supabase";

export async function POST(req: Request) {
  const reqData = await req.json();
  const url = "https://api.radom.com/checkout_session";
  const payload = {
    total: reqData.amount,
    currency: "USD",
    gateway: {
      managed: {
        methods: [
          {
            network: "Ethereum",
            token: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
            discountPercentOff: 0,
          }
        ],
      },
    },
    successUrl: "https://www.google.com/",
    cancelUrl: "https://example.com/",
    customizations: {
      leftPanelColor: "#ffe135",
      rightPanelColor: "#fffbc9",
      primaryButtonColor: "#6b3e26",
      slantedEdge: true,
    },
    chargeCustomerNetworkFee: true,
  };
  const headers = {
    "Content-Type": "application/json",
    'Authorization': "eyJhZGRyZXNzIjpudWxsLCJvcmdhbml6YXRpb25faWQiOiJmYmZkNjMwMS05YTM4LTRlODYtODA2MS1kZGM5ODlhOTVkYjkiLCJzZXNzaW9uX2lkIjoiZWJkMjU3N2UtYmJlYi00YzJmLTg2YmMtNWVkYWEyNzI2ZTg5IiwiZXhwaXJlZF9hdCI6IjIwMjUtMDQtMDRUMDU6NTQ6NTAuOTk3ODkwMzQzWiIsImlzX2FwaV90b2tlbiI6dHJ1ZX0=",
  };
  const res = await fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(payload),
  })
  const data = await res.json()
  supabaseClient.from('sales').insert({ checkout_id: data["checkoutSessionId"], amt: reqData.amount, success: 'false' })
  console.log(Response.json(data))
  return Response.json(data)
}
