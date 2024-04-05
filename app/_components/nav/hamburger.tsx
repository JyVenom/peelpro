'use client'

import { Dispatch, SetStateAction } from "react";

export interface OpenProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
  }

export default function Hamburger({ isOpen, setIsOpen }: OpenProps) {
    const handleClick = () => {
      setIsOpen(!isOpen);
    };
    return (
      <button onClick={handleClick} className="z-50 grid justify-items-center gap-1.5">
        <span
          className={`h-1 w-8 rounded-full bg-brown transition ${
            isOpen ? "rotate-45 translate-y-2.5" : ""
          } "`}
        ></span>
        <span
          className={`h-1 w-8 rounded-full bg-brown ${
            isOpen ? "scale-x-0" : ""
          } transition`}
        ></span>
        <span
          className={`h-1 w-8 rounded-full bg-brown ${
            isOpen ? "-rotate-45 -translate-y-2.5" : ""
          }`}
        ></span>
      </button>
    );
  }