"use client";
import Navbar from "./_components/navbar";
import Header from "./_components/header";
import Description from "./_components/description";
import Buy from "./_components/buy";
import { useEffect, useState } from "react";
import Info from "./_components/info";
import { Container } from "./_components/container"
import Tokenomics from "./_components/tokenomics";
import Footer from "./_components/footer";

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
  const [goal, setGoal] = useState(0);
  const [amountRaised, setAmountRaised] = useState(0);
  const [price, setPrice] = useState(0);
  const [minOrder, setMinOrder] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isCountdownFinished) {
      setLoading(true);
      Promise.all([fetch("/api/pre_sales_data")
      .then((res) => res.json()), fetch("/api/sales")
      .then((res) => res.json())]).then(([pre_sales_data, total_sales]) => {
        setCountdownDate(pre_sales_data.date);
        setMinOrder(pre_sales_data.minOrder);
        setPrice(pre_sales_data.price);
        setGoal(pre_sales_data.goal);
        setAmountRaised(total_sales.raised)
        setIsCountdownFinished(false);
        setLoading(false);
    }).catch(error => {
      console.error('An error occurred:', error);
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
    <main className={`${isOpen ? "h-screen overflow-y-hidden fixed" : ""} flex full flex-col overflow-x-hidden`}>
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
          <Buy goal={goal} amountRaised={amountRaised} price={price} minOrder={minOrder} placeOrder={placeOrder} />
        </div>
      </Container>
      <Container background={"[url('/brown.svg')]"}>
        <Info price={price} date={countdownDate}/>
      </Container>
      <Container background={"[url('/background.svg')]"}>
        <Tokenomics/>
      </Container>
      <Container background={"pale"}>
        <Footer price={price}/>
      </Container>
    </main>
  );
}
