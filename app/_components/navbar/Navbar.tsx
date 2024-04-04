"use client";
import { useState, useEffect, Dispatch, SetStateAction, FC } from "react";
import Logo from "./logo";
import Countdown from "./countdown";
import { HorizontalSocials } from "./socials"
import { DesktopNavComponent, MobileNavComponent } from "./navcomponentypes";
import Hamburger from "./hamburger";
import MobileNav from "./mobilenavbar";
interface NavProps {
  date: string
  onCountdownOver: ()=>void
}
export interface OpenProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
export default function Navbar({date, onCountdownOver} : NavProps) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", function (event) {
      setIsOpen(false);
    });
  }, []);
  return (
    <nav className="relative w-full p-8">
      <div className="z-50 flex flex-row full items-center justify-between">
        <DesktopNavComponent>
          <Countdown date={date} onFinished={onCountdownOver}/>
        </DesktopNavComponent>
        <Logo/>
        <MobileNavComponent>
          <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </MobileNavComponent>
        <DesktopNavComponent>
          <HorizontalSocials />
        </DesktopNavComponent>
      </div>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
}





