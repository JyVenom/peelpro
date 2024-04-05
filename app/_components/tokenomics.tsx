export default function Tokenomics() {
  return (
    <div className="flex flex-col items-center lg:items-center lg:justify-between lg:flex-row h-fit p-8 md:p-12 xl:p-20 w-full">
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
            <TokenomicsCircle/>
        </div>
        <span className="w-full my-4 h-[1px]  bg-brown"></span>
        <div className="flex flex-row justify-between">
          <h3 className="text-start font-red text-lg text-dbrown">
            Marketing & community engagement:
          </h3>
          <h3 className="font-bold text-start font-red text-lg text-dbrown text-nowrap">34.5 M</h3>
        </div>
        <span className="w-full my-4 h-[1px] bg-brown"></span>
        <div className="flex flex-row justify-between">
          <h3 className="text-start font-red text-lg text-dbrown">CEX listings:</h3>
          <h3 className="font-bold text-start font-red text-lg text-dbrown text-nowrap">69 M</h3>
        </div>
        <span className="w-full my-4 h-[1px] bg-brown"></span>
        <div className="flex flex-row justify-between">
          <h3 className="text-start font-red text-lg text-dbrown">Burned on mint:</h3>
          <h3 className="font-bold text-start font-red text-lg text-dbrown text-nowrap">103.5</h3>
        </div>
        <span className="w-full my-4 h-[1px] bg-brown"></span>
        <div className="flex flex-row justify-between">
          <h3 className="text-start font-red text-lg text-dbrown">Presale:</h3>
          <h3 className="font-bold text-start font-red text-lg text-dbrown text-nowrap">207 M</h3>
        </div>
        <span className="w-full my-4 h-[1px] bg-brown"></span>
        <div className="flex flex-row justify-between">
          <h3 className="text-start font-red text-lg text-dbrown">DEX listing:</h3>
          <h3 className="font-bold text-start font-red text-lg text-dbrown text-nowrap">276 M</h3>
        </div>
        <span className="w-full my-4 h-[1px] bg-brown"></span>
      </div>
      <div className="hidden lg:flex w-full h-fit">
      <TokenomicsCircle/>
      </div>
    </div>
  );
}


function TokenomicsCircle(){
    return (
        <div className="relative w-full m-8 lg:w-2/3 max-w-lg aspect-square lg:ml-24 xl:ml-40 lg:mr-12 xl:mr-20 text-dbrown">
        <div className="w-fit shadow-md text-start text-xs text-nowrap  absolute top-[6%] lg:left-[-5%] left-[-5%] xl:text-sm font-red lg:text-xs md:text-base  py-2 px-4 bg-white rounded-md h-fit">10% CEX Listings</div>
        <div className="w-fit shadow-md text-start text-xs text-nowrap  absolute top-[-5%] left-[45%] xl:text-sm font-red lg:text-xs md:text-base  py-2 px-4 bg-white rounded-md h-fit">5% Marketing</div>
        <div className="w-fit shadow-md text-start text-xs text-nowrap  absolute top-[40%] left-[-7%] xl:text-sm font-red lg:text-xs md:text-base  py-2 px-4 bg-white rounded-md h-fit">15% Burned</div>
        <div className="w-fit shadow-md text-start text-xs text-nowrap absolute top-[70%] left-[70%] xl:text-sm font-red lg:text-xs md:text-base  py-2 px-4 bg-white rounded-md h-fit">40% DEX Liquidity</div>
        <div className="w-fit shadow-md absolute text-start text-xs text-nowrap  top-[10%] left-[80%] xl:text-sm font-red lg:text-xs md:text-base  py-2 px-4 bg-white rounded-md h-fit">30% Pre-sale</div>
        <img src="/tokenomics.svg" className="w-full h-full" />
      </div>
    )
}