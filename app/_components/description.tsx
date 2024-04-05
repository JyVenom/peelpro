import Image from "next/image";
export default function Description() {
  return (
    <div className="flex flex-wrap overflow-hidden justify-center px-8  max-w-screen-xl">
      <div className="flex flex-row items-center overflow-hidden min-w-72 p-4">
        <Image width={64} height={64} className="w-16 h-16" src={"/money.svg"} alt="money"/>
        <div className="text-brown w-72 pl-4 flex flex-col text-wrap">
          <h4 className="text-md font-bold font-red">Solana Based Token</h4>
          <p className="text-sm font-red">
            If you have diamond balls you know this
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center overflow-hidden min-w-72 p-4">
        <Image width={64} height={64} className="w-16 h-16" src={"/brain.svg"} alt="brain"/>
        <div className="text-brown w-72 pl-4 flex flex-col text-wrap">
          <h4 className="text-md font-bold font-red">
            Banana Cat
          </h4>
          <p className="text-sm font-red">
            Remember it's all memes. Now put your life savings on $NANACAT.
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center overflow-hidden min-w-72 p-4">
        <Image width={64} height={64} className="w-16 h-16" src={"/coin.svg"} alt="coin"/>
        <div className="text-brown w-72 pl-4 flex flex-col text-wrap">
          <h4 className="text-md font-bold font-red">
            Choose Your Future
          </h4>
          <p className="text-sm font-red">
            We can’t tell you what to do… but if we could we would tell you to TAKE OUT A MORTGAGE ON $NANACAT!!!
          </p>
        </div>
      </div>
    </div>
  );
}
