"use client";
import Navbar from "./_components/navbar/Navbar";
import Header from "./_components/header";
import Description from "./_components/description";
import Buy from "./_components/buy";
import { useEffect, useState } from "react";

export default function Home() {
  const [isCountdownFinished, setIsCountdownFinished] = useState(true);
  const [countdownDate, setCountdownDate] = useState("");
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    if (isCountdownFinished) {
      setLoading(true);
      fetch("/api/countdown")
        .then((res) => res.json())
        .then((data) => {
          console.log(data.date);
          setCountdownDate(data.date);
          setLoading(false);
          setIsCountdownFinished(false);
        });
    }
  }, [isCountdownFinished]);
  if (isLoading) return <p>Loading...</p>;

  return (
    <main className="flex bg-cover bg-[url('/background.svg')] full">
      <div className=" flex full flex-col max-w-screen-2xl center">
        <Navbar
          date={countdownDate}
          onCountdownOver={() => {
            setIsCountdownFinished(true);
          }}
        />
        {/* <Header />
        <div className="flex xl:flex-col flex-col-reverse">
          <Description />
          <Buy />
        </div> */}
      </div>
    </main>
  );
}
