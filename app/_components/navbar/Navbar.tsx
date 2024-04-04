"use client";
import { useState, useEffect, Dispatch, SetStateAction, FC } from "react";
import Logo from "./Logo";
import Countdown from "./Countdown";
import { HorizontalSocials } from "./socials"
import { DesktopNavComponent, MobileNavComponent } from "./NavComponentType";
import Hamburger from "./Hamburger";
import MobileNav from "./MobileNavbar";
// interface NavProps {
//   date: string
// }

export interface OpenProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
export default function Navbar() {
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
          <Countdown date={'2024-12-31T23:59:59Z'} onFinished={()=>{}}/>
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





