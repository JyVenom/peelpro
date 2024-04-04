"use client";
import { useEffect, useState } from "react";
interface CountdownProps {
  date: string;
  onFinished: () => void;
}
export default function Countdown({ date, onFinished }: CountdownProps) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const target = new Date(date);
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        onFinished();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const format = (num: number): string => {
    return num.toString().padStart(2, "0");
  };
  return (
    <div className="flex flex-col items-start">
      <CountdownTitle />
      <div className="flex items-start justify-center w-full gap-4 count-down-main">
        <CountdownSection title={"Days"} time={format(days)} />
        <CountdownSeperator />
        <CountdownSection title={"Hrs"} time={format(hours)} />
        <CountdownSeperator />
        <CountdownSection title={"Mins"} time={format(minutes)} />
        <CountdownSeperator />
        <CountdownSection title={"Secs"} time={format(seconds)} />
      </div>
    </div>
  );
}
function CountdownSeperator() {
  return <h3 className="font-red font-semibold text-2xl text-brown">:</h3>;
}
function CountdownTitle() {
  return (
    <h2 className="font-red uppercase font-medium text-brown ">
      Next price increase in ...
    </h2>
  );
}
interface CountdownSectionProps {
  time: string;
  title: string;
}
function CountdownSection({ time, title }: CountdownSectionProps) {
  return (
    <div className="timer w-8">
      <div className="">
        <h3 className="countdown-element days font-red font-semibold text-2xl text-brown text-center">
          {time}
        </h3>
      </div>
      <p className="text-xs font-normal text-brown mt-1 text-center w-full">
        {title}
      </p>
    </div>
  );
}
