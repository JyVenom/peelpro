"use client";
import Navbar from "./_components/navbar";
import Header from "./_components/header";
import Description from "./_components/description";
import Buy from "./_components/buy";
import { useEffect, useState } from "react";
import Info from "./_components/info";
import { Container } from "./_components/container"
import Tokenomics from "./_components/tokenomics";

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
  const [isOpen, setIsOpen] = useState(false);

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
    <main className={`${isOpen ? "max-h-screen overflow-x-hidden fixed" : ""} flex full flex-col`}>
      <Container background={"[url('/background.svg')]"}>
        <Navbar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          date={countdownDate}
          onFinished={() => {
            setIsCountdownFinished(true);
          }}
        />
        <Header />
        <div className="relative w-full mb-12  items-center justify-start flex xl:flex-col flex-col-reverse">
          <Description />
          <Buy  price={price} minOrder={minOrder} placeOrder={placeOrder} />
        </div>
      </Container>
      <Container background={"[url('/brown.svg')]"}>
        <Info price={price} date={countdownDate}/>
      </Container>
      <Container background={"[url('/background.svg')]"}>
        <Tokenomics/>
      </Container>


    </main>
  );
}
