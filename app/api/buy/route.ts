// import { supabaseClient } from "@/app/libs/supabase";

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
          },
          {
            network: "Polygon",
            token: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
            discountPercentOff: 0,
          },
        ],
      },
    },
    successUrl: "google.com",
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
    'Authorization': "eyJhZGRyZXNzIjpudWxsLCJvcmdhbml6YXRpb25faWQiOiJhMTA4NmU5OS04MzUzLTRhZDQtOGRlNy0zMWExMmZlYWRkMTAiLCJzZXNzaW9uX2lkIjoiNWI0NjAyYzMtZjExZC00MDlmLWFhNDgtM2I2MGRmOGQ1NmQ4IiwiZXhwaXJlZF9hdCI6IjIwMjUtMDQtMDRUMDU6NTM6MDIuNzU2Mjk4NDMxWiIsImlzX2FwaV90b2tlbiI6dHJ1ZX0=",
  };
  const res = await fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(payload),
  })
  const data = await res.json()
//     supabaseClient.from('sales')
//   .insert({ id: 1, name: 'Denmark' })
  return Response.json(data)
}
