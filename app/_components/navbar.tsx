"use client";
import { useState, useEffect, Dispatch, SetStateAction } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
    window.addEventListener("resize", function(event){
        setIsOpen(false);
    })
  return (
    <nav className="relative w-full p-8 flex flex-row items-center justify-between">
              <div className="md:flex hidden">
      <Timer />
      </div>
      <img
        className="z-10 w-16 h-16 md:absolute md:left-1/2 md:-translate-x-1/2"
        src={"/banana.svg"}
      />
      <div className="z-10 md:hidden flex">
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="hidden md:flex">
        <Socials />
      </div>
        <MobileNav  isOpen={isOpen} setIsOpen={setIsOpen} /> 
      
    </nav>
  );
}
function MobileNav({ isOpen, setIsOpen }: OpenProps){
    const [init, setInit] = useState(false)
    useEffect(()=>{
        if (isOpen){
            setInit(true)
        }
    },[isOpen])
    return (
        <div className={`flex justify-center items-center bg-[#FDFD96] top-0 left-0 absolute w-screen ${init ? "" : "hidden"} h-screen ${isOpen ? "slideIn" : "slideOut"}`}>
                <VerticalSocials/>
        </div>
    )
}
interface OpenProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
function Hamburger({ isOpen, setIsOpen }: OpenProps) {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <button onClick={handleClick} className="grid justify-items-center gap-1.5">
      <span
        className={`h-1 w-8 rounded-full bg-black transition ${
          isOpen ? "rotate-45 translate-y-2.5" : ""
        } "`}
      ></span>
      <span
        className={`h-1 w-8 rounded-full bg-black ${
          isOpen ? "scale-x-0" : ""
        } transition`}
      ></span>
      <span
        className={`h-1 w-8 rounded-full bg-black ${
          isOpen ? "-rotate-45 -translate-y-2.5" : ""
        }`}
      ></span>
    </button>
  );
}
function VerticalSocials(){
    return (
        <div>
          <div className="flex flex-col w-full justify-between">
            <img
              className="w-24 h-24 py-4 hover:scale-105"
              src="/certik.svg"
              alt="My Happy SVG"
            />
            <img
              className="w-24 h-24 py-4 hover:scale-105"
              src="/cmc.svg"
              alt="My Happy SVG"
            />
            <img
              className="w-24 h-24 py-4 hover:scale-105"
              src="/twitter.svg"
              alt="My Happy SVG"
            />
            <img
              className="w-24 h-24 py-4 hover:scale-105"
              src="/telegram.svg"
              alt="My Happy SVG"
            />
          </div>
        </div>
      );
}
function Socials() {
  return (
    <div>
      <div className="flex flex-row w-full justify-between">
        <img
          className="w-16 h-16 px-2 hover:scale-105"
          src="/certik.svg"
          alt="My Happy SVG"
        />
        <img
          className="w-16 h-16 px-2 hover:scale-105"
          src="/cmc.svg"
          alt="My Happy SVG"
        />
        <img
          className="w-16 h-16 px-2 hover:scale-105"
          src="/twitter.svg"
          alt="My Happy SVG"
        />
        <img
          className="w-16 h-16 px-2 hover:scale-105"
          src="/telegram.svg"
          alt="My Happy SVG"
        />
      </div>
    </div>
  );
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
    if (num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  };
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
          <h3 className="font-red font-semibold text-2xl text-[#ffe135]">:</h3>
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
          <h3 className="font-red font-semibold text-2xl text-[#ffe135]">:</h3>
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
          <h3 className="font-red font-semibold text-2xl text-[#ffe135]">:</h3>
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
