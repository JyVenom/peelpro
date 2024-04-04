"use client";
import { useState, useEffect } from "react";

import Logo from "@/app/_components/nav/logo";
import Countdown from "@/app/_components/nav/countdown";
import { HorizontalSocials  } from "@/app/_components/nav/socials";
import { DesktopNavComponent, MobileNavComponent } from "@/app/_components/nav/navcomponentypes";;
import Hamburger from "@/app/_components/nav/hamburger";
import MobileNav from "@/app/_components/nav/mobilenavbar";

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
      
      <MobileNav isOpen={isOpen}/>
    </nav>
  );
}





