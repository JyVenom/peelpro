"use client";
import { useState, useEffect } from "react";
import Logo from "./navbar/logo";
import Countdown from "./navbar/countdown";
import { HorizontalSocials  } from "./navbar/socials";
import { DesktopNavComponent, MobileNavComponent } from "./navbar/navcomponentypes";
import Hamburger from "./navbar/hamburger";
import MobileNav from "./navbar/mobilenavbar";
interface NavProps {
  date: string;
  onFinished: ()=>void;
}

export default function Navbar({date, onFinished} : NavProps) {
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
          <Countdown date={date} onFinished={onFinished}/>
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





