"use client";
import Navbar from "./_components/navbar";
import Header from "./_components/header";
import Description from "./_components/description";
import Buy from "./_components/buy";
import { useEffect, useState } from "react";

export default function Home() {
  function placeOrder(amount: number) {
    setLoading(true);
    fetch(`/api/buy/${amount}`, { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        window.location.href = data.checkoutSessionUrl;
        setLoading(false);
      });
  }
  const [isCountdownFinished, setIsCountdownFinished] = useState(true);
  const [countdownDate, setCountdownDate] = useState("");
  const [price, setPrice] = useState(0);
  const [minOrder, setMinOrder] = useState(0);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    if (isCountdownFinished) {
      setLoading(true);
      fetch("/api/pre_sales_data")
        .then((res) => res.json())
        .then((data) => {
          setCountdownDate(data.date);
          setMinOrder(data.minOrder);
          setPrice(data.price);
          setLoading(false);
          setIsCountdownFinished(false);
        });
    }
  }, [isCountdownFinished]);
  if (isLoading)
    return (
      <div className="flex center flex-col full absolute top-0 left-0 bg-banana">
        <h1 className="text-5xl font-red font-bold text-brown text-center">
          Loading ...
        </h1>
      </div>
    );

  return (
    <main className="flex overflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat bg-[url('/background.svg')] full">
      <div className=" flex full flex-col max-w-screen-2xl center">
        <Navbar
          date={countdownDate}
          onFinished={() => {
            setIsCountdownFinished(true);
          }}
        />
        <Header />
        <div className="flex xl:flex-col flex-col-reverse">
          <Description />
          <Buy price={price} minOrder={minOrder} placeOrder={placeOrder} />
        </div>
      </div>
    </main>
  );
}
