"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  return (
    <nav className="w-full p-8 flex flex-row items-center justify-between">
      <Timer />
      <img className="w-16 h-16" src={"/banana.svg"} />
      <Socials/>
    </nav>
  );
}


function Socials() {
    return <div>
        <div className="flex flex-row w-full justify-between">
            <img className="w-16 h-16 px-2 hover:scale-105" src = "/certik.svg" alt="My Happy SVG"/>
            <img className="w-16 h-16 px-2 hover:scale-105" src = "/cmc.svg" alt="My Happy SVG"/>
            <img className="w-16 h-16 px-2 hover:scale-105" src = "/twitter.svg" alt="My Happy SVG"/>
            <img className="w-16 h-16 px-2 hover:scale-105" src = "/telegram.svg" alt="My Happy SVG"/>
        </div>
    </div>;
  }
  
async function getCountdown() {
  const res = await fetch("/api/countdown");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

function Timer() {
  const [countdown, setCountdown] = useState<Countdown>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    message: "",
  });
  const [finished, setFinished] = useState(false);
  const isFinished = () => {
    if (
      countdown.days == 0 &&
      countdown.hours == 0 &&
      countdown.minutes == 0 &&
      countdown.seconds == 0
    ) {
      return true;
    }
    return false;
  };
  const format = (num: number) => {
    if (num < 10){
        return "0" + num
    } else {
        return num
    }
  }
  useEffect(() => {
    const interval = setInterval(async () => {
      const data = await getCountdown();
      setCountdown(data);
    }, 1000);
    setFinished(isFinished());
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col items-start">
      <h2 className="font-red uppercase font-medium text-[#ffe135] ">
        Next price increase in ...
      </h2>
      {!finished ? (
        <h2 className="text-lg font-red font-semibold uppercase text-[#ffe135] ">
          {countdown.message}{" "}
        </h2>
      ) : (
        <div className="flex items-start justify-center w-full gap-4 count-down-main">
          <div className="timer w-8">
            <div className="">
              <h3 className="countdown-element days font-red font-semibold text-2xl text-[#ffe135] text-center">
                {format(countdown.days)}
              </h3>
            </div>
            <p className="text-xs font-normal text-[#ffe135] mt-1 text-center w-full">
              Days
            </p>
          </div>
          <h3 className="font-red font-semibold text-2xl text-[#ffe135]">
            :
          </h3>
          <div className="timer w-8">
            <div className="">
              <h3 className="countdown-element hours font-red font-semibold text-2xl text-[#ffe135] text-center">
                {format(countdown.hours)}
              </h3>
            </div>
            <p className="text-xs font-normal text-[#ffe135] mt-1 text-center w-full">
              Hrs
            </p>
          </div>
          <h3 className="font-red font-semibold text-2xl text-[#ffe135]">
            :
          </h3>
          <div className="timer w-8">
            <div className="">
              <h3 className="countdown-element minutes font-red font-semibold text-2xl text-[#ffe135] text-center">
                {format(countdown.minutes)}
              </h3>
            </div>
            <p className="text-xs font-normal text-[#ffe135] mt-1 text-center w-full">
              Mins
            </p>
          </div>
          <h3 className="font-red font-semibold text-2xl text-[#ffe135]">
            :
          </h3>
          <div className="timer w-8">
            <div className="">
              <h3 className="countdown-element seconds font-red font-semibold text-2xl text-[#ffe135] text-center">
                {format(countdown.seconds)}
              </h3>
            </div>
            <p className="text-xs font-normal text-[#ffe135] mt-1 text-center w-full">
              Secs
            </p>
          </div>
        </div>
      )}
    
    </div>
  );
}

