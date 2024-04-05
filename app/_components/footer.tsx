import Image from "next/image";
import { HorizontalSocials } from "./nav/socials";

interface FooterProps {
    price : number
}

export default function Footer({ price } : FooterProps) {
  return (
    <div className="h-fit w-full flex flex-col justify-center items-center lg:p-12  p-8 xl:p-20 xl:pb-8 lg:pb-8">
        <div className="bg-banana border-2 border-dbrown my-6 px-12 text-nowrap py-2 font-red font-medium text-dbrown rounded-full">
         NANACAT
      </div>
      <h1 className="lg:text-5xl md:text-4xl text-3xl xl:text-6xl text-center font-red font-bold max-w-6xl text-brown">
        Orders For Nanacat AI Tokens Are Rolling In As You&apos;re Reading This.
      </h1>
      <div className="bg-pink my-4 px-12 text-nowrap py-2 font-red font-medium text-dbrown rounded-full">
        1 NANACAT AI = $ {price} USD
      </div>
      <p className="text-dbrown font-red md:text-base text-sm">
        Hurry - Token price increases on <b>April 4th!</b>
      </p>
      <a href="#buy" className="hover:scale-[101%] rounded-2xl bg-brown w-full text-no-wrap text-center py-4 my-6 min-w-fit uppercase text-2xl text-banana font-red font-bold max-w-sm">
        GET MY TOKENS
      </a>
      <div className="flex flex-col items-center sm:flex-row sm:justify-between w-full h-fit mt-4">
        <Image
          width={64}
          height={64}
          className="z-50 w-16 h-16 "
          src={"/banana.svg"}
          alt="banana"
        />
        <div className="flex max-sm:m-8 flex-row  justify-center">
      <a href={"http://kys.web.app"} target="_blank">
      <Image width={64} height={64} className="sm:w-12 sm:h-12 h-8 w-8 mr-2 hover:scale-105" src={"/certik.svg"} alt={"certik"} />
    </a>
    <a href={"http://kys.web.app"} target="_blank">
      <Image width={64} height={64} className="sm:w-12 sm:h-12 h-8 w-8 mx-2 hover:scale-105" src={"/cmc.svg"} alt={"cmc"} />
    </a>
    <a href={"http://kys.web.app"} target="_blank">
      <Image width={64} height={64} className="sm:w-12 sm:h-12 h-8 w-8 mx-2 hover:scale-105" src={"/twitter.svg"} alt={"twitter"} />
    </a>
    <a href={"http://kys.web.app"} target="_blank">
      <Image width={64} height={64} className="sm:w-12 sm:h-12 h-8 w-8 ml-2 hover:scale-105" src={"/telegram.svg"} alt={"telegram"} />
    </a>
      </div>
      </div>
      <span className="w-full hidden sm:flex h-[1px] bg-dbrown my-4"></span>
      <div className="relative flex flex-col items-center sm:flex-row pt-2 sm:pb-0 sm:justify-between w-full h-fit ">
        <h5 className="text-dbrown max-sm:text-sm font-red max-sm:py-1">
        © 2024 Nanacat Token
        </h5>
        <b className="text-dbrown max-sm:text-sm font-red max-sm:py-1">
        support@nanacat.ai
        </b>
        <h5 className="text-dbrown max-sm:text-sm font-red max-sm:py-1">
        Terms of Service | Privacy Policy
        </h5>
      </div>
    </div>
  );
}
