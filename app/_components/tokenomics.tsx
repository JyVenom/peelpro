export default function Tokenomics() {
  return (
    <div className="flex flex-col items-center lg:items-start lg:justify-between lg:flex-row h-fit p-12 xl:p-20 w-full">
      <div className="lg:justify-start justify-center lg:text-start text-center w-full flex flex-grow flex-col">
        <h2 className="font-red pb-2 text-brown text-5xl font-bold">
          Tokenomics
        </h2>
        <h2 className="pb-2 font-red text-pink text-2xl font-bold">
          690M Total Tokens. No Tax. No Team Tokens.
        </h2>
        <p className="font-red text-md text-brown">
          Token Contract Address{" "}
          <a
            className="text-pink underline text-sm"
            href="http://kys.web.app"
            target="_blank"
          >
            (0x548….DB3C2)
          </a>
        </p>
        <div className="flex w-full justify-center my-10 lg:hidden">
        <img src="/tokenomics.svg" className="w-full lg:w-1/2 max-w-md aspect-square  lg:ml-12 xl:ml-20" />
        </div>
        <span className="w-full my-4 h-[1px]  bg-brown"></span>
        <div className="flex flex-row justify-between">
          <h3 className="font-red text-lg text-dbrown">
            Marketing & community engagement:
          </h3>
          <h3 className="font-bold font-red text-lg text-dbrown">34.5 M</h3>
        </div>
        <span className="w-full my-4 h-[1px] bg-brown"></span>
        <div className="flex flex-row justify-between">
          <h3 className="font-red text-lg text-dbrown">CEX listings:</h3>
          <h3 className="font-bold font-red text-lg text-dbrown">69 M</h3>
        </div>
        <span className="w-full my-4 h-[1px] bg-brown"></span>
        <div className="flex flex-row justify-between">
          <h3 className="font-red text-lg text-dbrown">Burned on mint:</h3>
          <h3 className="font-bold font-red text-lg text-dbrown">103.5</h3>
        </div>
        <span className="w-full my-4 h-[1px] bg-brown"></span>
        <div className="flex flex-row justify-between">
          <h3 className="font-red text-lg text-dbrown">Presale:</h3>
          <h3 className="font-bold font-red text-lg text-dbrown">207 M</h3>
        </div>
        <span className="w-full my-4 h-[1px] bg-brown"></span>
        <div className="flex flex-row justify-between">
          <h3 className="font-red text-lg text-dbrown">DEX listing:</h3>
          <h3 className="font-bold font-red text-lg text-dbrown">276 M</h3>
        </div>
        <span className="w-full my-4 h-[1px] bg-brown"></span>
      </div>
      <div className="relative w-full lg:w-2/3 max-w-xl aspect-square hidden lg:flex lg:ml-12 xl:ml-20 ">
        <div className="w-fi absolute top-[5%] left-0 text-sm py-2 px-4 bg-white text-pink rounded-md h-fit">5% Marketing</div>
        <div className="w-fi absolute top-[-5%] left-1/2 -translate-x-10 text-sm py-2 px-4 bg-white text-pink rounded-md h-fit">5% Marketing</div>

        <div className="w-fi absolute top-0 left-0 text-sm py-2 px-4 bg-white text-pink rounded-md h-fit">5% Marketing</div>

        <div className="w-fi absolute top-0 left-0 text-sm py-2 px-4 bg-white text-pink rounded-md h-fit">5% Marketing</div>

        <div className="w-fi absolute top-0 left-0 text-sm py-2 px-4 bg-white text-pink rounded-md h-fit">5% Marketing</div>

        <img src="/tokenomics.svg" className="w-full h-full" />
      </div>
    </div>
  );
}


function TokenomicsCircle(){
    return (
        <img src="/tokenomics.svg" className="w-full lg:w-1/2 max-w-lg aspect-square hidden lg:flex lg:ml-12 xl:ml-20" />

    )
}