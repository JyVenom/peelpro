'use client'
import { OpenProps } from "./Navbar";
import { useState, useEffect } from "react";
import { VerticalSocials } from "./Socials";
export default function MobileNav({ isOpen }: OpenProps) {
    const [init, setInit] = useState(false);
    useEffect(() => {
      if (isOpen) {
        setInit(true);
      }
    }, [isOpen]);
    return (
      <div
        className={`z-40 flex justify-center items-center bg-[#FDFD96] top-0 left-0 absolute w-screen ${
          init ? "" : "hidden"
        } h-screen ${isOpen ? "slideIn" : "slideOut"}`}
      >
        <VerticalSocials/>
      </div>
    );
  }
  