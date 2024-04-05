import Image from "next/image";
export default function Description() {
  return (
    <div className="flex flex-wrap overflow-hidden justify-center px-8  max-w-screen-xl">
      <div className="flex flex-row items-center overflow-hidden min-w-72 p-4">
        <Image width={64} height={64} className="w-16 h-16" src={"/money.svg"} alt="money"/>
        <div className="text-brown w-72 pl-4 flex flex-col text-wrap">
          <h4 className="text-md font-bold font-red">Buy Back & Burn System</h4>
          <p className="text-sm font-red">
            Actively repurchases its own tokens, making them rarer and more
            valuable.
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center overflow-hidden min-w-72 p-4">
        <Image width={64} height={64} className="w-16 h-16" src={"/brain.svg"} alt="brain"/>
        <div className="text-brown w-72 pl-4 flex flex-col text-wrap">
          <h4 className="text-md font-bold font-red">
            1st Decentralized Hedge Fund
          </h4>
          <p className="text-sm font-red">
            100% autonomous, profits passively return to the Harambe AI
            community of holders.
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center overflow-hidden min-w-72 p-4">
        <Image width={64} height={64} className="w-16 h-16" src={"/coin.svg"} alt="coin"/>
        <div className="text-brown w-72 pl-4 flex flex-col text-wrap">
          <h4 className="text-md font-bold font-red">
            30% More Profitable Than The Market
          </h4>
          <p className="text-sm font-red">
            Our revolutionary AI trading bot is designed to outperform top
            crypto traders.
          </p>
        </div>
      </div>
    </div>
  );
}
