import { supabaseClient } from "@/app/libs/supabase";
export async function POST(
  req: Request,
  { params }: { params: { amount: string } }
) {
  const uuid = crypto.randomUUID()
  const url = "https://api.radom.com/checkout_session";
  const payload = {
    total: Number(params.amount),
    currency: "USD",
    gateway: {
      managed: {
        methods: [
          {
            network: "Bitcoin",
          },
          {
            network: "Litecoin"
          },
          {
            network: "Cardano"
          },
          {
            network: "Monero"
          },
          {
            network: "Dash"
          },
          {
            network: "Dogecoin"
          },
          {
            network: "Ethereum",
            // token: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          },
          {
            network: "Polygon",
            // token: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
          },
        ],
      },
    },
    successUrl: `http://peelpro.vercel.app/payment_success/${uuid}`,

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
    Authorization:
      "eyJhZGRyZXNzIjpudWxsLCJvcmdhbml6YXRpb25faWQiOiJmYmZkNjMwMS05YTM4LTRlODYtODA2MS1kZGM5ODlhOTVkYjkiLCJzZXNzaW9uX2lkIjoiMDVmOGQ5OTYtMjQ2ZS00MGRkLTgwYzctYThlZjFkMmUyNThhIiwiZXhwaXJlZF9hdCI6IjIwMjUtMDQtMDVUMDU6MjA6NTIuMDk3OTY5NjA3WiIsImlzX2FwaV90b2tlbiI6dHJ1ZX0=",
  };
  const res = await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  const {error } = await supabaseClient
    .from("sales")
    .insert({
      code: uuid,
      checkout_id: data.checkoutSessionId,
      amount: Number(params.amount)
    });
  console.log(error)
  return Response.json(data);
}
