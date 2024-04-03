import { useState } from "react";

export default function Navbar() {
  return (
    <nav className="w-full p-8 flex flex-row items-center justify-between">
      <Timer />
      <img className="w-12 h-12" src={"/peeled.svg"} />
    </nav>
  );
}

function Timer() {
  return (
    <div className="flex flex-col items-start">
        <h2 className="text-sm font-manrope font-semibold uppercase text-[#ffe135] ">Next price increase in ...</h2>
    <div className="flex items-start justify-center w-full gap-4 count-down-main">
      <div className="timer w-8">
        <div className="">
          <h3 className="countdown-element days font-manrope font-semibold text-3xl text-[#ffe135] text-center">
            01
          </h3>
        </div>
        <p className="text-sm font-normal text-[#ffe135] mt-1 text-center w-full">
          Days
        </p>
      </div>
      <h3 className="font-manrope font-semibold text-3xl text-[#ffe135]">:</h3>
      <div className="timer w-8">
        <div className="">
          <h3 className="countdown-element hours font-manrope font-semibold text-3xl text-[#ffe135] text-center">
            05
          </h3>
        </div>
        <p className="text-sm font-normal text-[#ffe135] mt-1 text-center w-full">
          Hrs
        </p>
      </div>
      <h3 className="font-manrope font-semibold text-3xl text-[#ffe135]">:</h3>
      <div className="timer w-8">
        <div className="">
          <h3 className="countdown-element minutes font-manrope font-semibold text-3xl text-[#ffe135] text-center">
            31
          </h3>
        </div>
        <p className="text-sm font-normal text-[#ffe135] mt-1 text-center w-full">
          Mins
        </p>
      </div>
      <h3 className="font-manrope font-semibold text-3xl text-[#ffe135]">:</h3>
      <div className="timer w-8">
        <div className="">
          <h3 className="countdown-element seconds font-manrope font-semibold text-3xl text-[#ffe135] text-center">
            58
          </h3>
        </div>
        <p className="text-sm font-normal text-[#ffe135] mt-1 text-center w-full">
          Secs
        </p>
      </div>
    </div>
    </div>
  );
}

function Socials() {}
