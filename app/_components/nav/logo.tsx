'use client'
import Image from "next/image"
export default function Logo(){
    return (
      <Image
        width={64}
        height={64}
          className="z-50 w-16 h-16 md:absolute md:left-1/2 md:-translate-x-1/2"
          src={"/banana.svg"}
          alt="banana"
        />
    )
  }