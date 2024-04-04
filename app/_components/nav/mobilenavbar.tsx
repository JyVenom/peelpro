'use client'
import { useState, useEffect  } from "react";

export interface OpenProps {
    isOpen: boolean;
  }
import { VerticalSocials } from "./socials";
export default function MobileNav({ isOpen }: OpenProps) {
    const [init, setInit] = useState(false);
    useEffect(() => {
      if (isOpen) {
        setInit(true);
      }
    }, [isOpen]);
    return (
      <div
        className={`z-40 flex justify-center items-center bg-[#FDFD96] top-0 left-0 fixed w-screen ${
          init ? "" : "hidden"
        } h-screen ${isOpen ? "slideIn" : "slideOut"}`}
      >
        <VerticalSocials/>
      </div>
    );
  }
  