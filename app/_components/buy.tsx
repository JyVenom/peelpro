"use client"
import { useState } from "react";

interface BuyProps {
    price: number;
    minOrder: number;
}
export default function Buy({ price, minOrder} : BuyProps) {
    const [usd, setUSD] = useState<string>();
    const [nana, setNANA] = useState<string>();
    const handleValueChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        isUSD: boolean
      ) => {
        const newValue = e.target.value;
        if (newValue === '') {
          setUSD('');
          setNANA('');
        } else {
          const num = Number(newValue);
          if (isUSD) {
            setUSD(newValue);
            if (num >= minOrder) {
              setNANA(Math.round(num / price).toString());
            }
          } else {
            setNANA(newValue);
            if (num >= minOrder / price) {
              setUSD((Math.round(num * 100 * price) / 100).toString());
            }
          }
        }
      };
      
      const handleUSDChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleValueChange(e, true);
      };
      
      const handleNANAChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleValueChange(e, false);
      };

  return (
    <div className="flex justify-center h-fit w-full px-8 my-16">
      <div className="relative flex p-6 justfiy-center items-center flex-col w-full max-w-xl h-fit bg-pale rounded-lg shadow-2xl">
        <div className="flex justify-center items-center bg-brown w-fit px-4 absolute left-1/2 -translate-x-1/2 h-10 rounded-full top-0 -translate-y-1/2">
          <h4 className="text-pale font-red text-sm text-center">
            1 Harambe AI = $ {price} USD
          </h4>
        </div>
        <h3 className=" mt-4 font-red sm:text-2xl text-xl md:text-3xl text-brown font-semibold">
          Join The Harambe AI Pre-Sale
        </h3>
        <p className="mt-2 text-brown font-red text-sm sm:text-md text-center">
          You'll be directed to a secure checkout page where you can finalize
          your purchase using a variety of major cryptocurrencies.
        </p>
        <div className="flex justify-between w-full items-center py-6">
          <div className="relative w-full h-2">
            <div className="absolute top-0 left-0 h-2 rounded-full w-full bg-banana"></div>
            <div className="absolute top-0 left-0 h-2 rounded-full w-3/4 bg-brown"></div>
          </div>
          <span className=" pl-4 w-fit text-nowrap font-red text-brown text-md sm:text-lg">
            USD Raised: <b>$ 6,740,557</b>
          </span>
        </div>
        <h3 className="text-brown font-red font-semibold sm:text-lg text-md md:text-xl">How many Harambe AI Tokens would you like to buy?</h3>
        <div className="flex flex-row relative w-full my-6 h-36 rounded-2xl border-2 border-banana">
            <div className="w-[2px] z-10 top-0 h-full bg-banana absolute left-1/2 -translate-x-1/2"></div>
            <div className="relative w-1/2 h-full flex justify-center items-center pl-4">
                <span className="font-red text-brown text-sm font-bold w-full  text-center absolute top-2 left-1/2 -translate-x-1/2">USD you pay</span>
                <span className="text-2xl font-red pr-1  h-fit text-[#9ca3af]">$</span>
                <input value = {usd} onChange={handleUSDChange} pattern="[0-9]" className="appearance-none font-red bg-pale h-fit border-none w-full text-brown leading-tight focus:outline-none text-2xl placeholder-[#9ca3af]" type="number" placeholder="0"></input>
            </div>
            <div className="relative w-1/2 h-full flex justify-center items-center pl-4">
                <span className="font-red text-brown text-sm font-bold w-full  text-center absolute top-2 left-1/2 -translate-x-1/2">$HarambeAI Tokens</span>
                <span className="text-2xl font-red pr-1  h-fit text-[#9ca3af]">🍌</span>
                <input value = {nana} onChange={handleNANAChange} pattern="[0-9]" className="appearance-none font-red bg-pale h-fit border-none w-full text-brown leading-tight focus:outline-none text-2xl placeholder-[#9ca3af]" type="number" placeholder="0"></input>
            </div>
        </div>
        <div className={`${ (usd !=='' || nana !== '') && (Number(usd) < minOrder || Number(nana)/price < minOrder) ? "":"hidden"} text-[#cc0000] font-red font-bold text-sm`}>Error: Minimum order amount is ${minOrder} ({minOrder/ price} Tokens)</div>
        <button className="w-full h-20 rounded-2xl bg-brown">
            <span>t</span>
        </button>
      </div>
    </div>
  );
}
