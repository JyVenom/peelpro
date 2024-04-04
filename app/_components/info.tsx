import Image from "next/image";

interface InfoProps {
  price: number;
  date: string;
}
export default function Info({ price, date }: InfoProps) {
  return (
    <div className="flex flex-col xl:flex-row h-fit p-8 md:p-12 xl:p-20 w-full bg-brown">
        <div className="w-fit h-fit p-2">
      <div className="flex flex-col h-fit w-full xl:w-96 p-10 backdrop-blur-md bg-pale/20 rounded-2xl shadow-lg">
        <Image
          className="mb-4"
          src="/banana.svg"
          alt="banana"
          width={64}
          height={64}
        />
        <h2 className="mb-4 text-xl font-red font-bold text-banana">
          Harambe Is Set To Rock The Charts With a Whopping 100% ROI (This Year
          Alone!)
        </h2>
        <p className="mb-4 text-md font-red font-medium text-banana ">
          Each successful trade triggers the purchase and immediate burning of
          Harambe Tokens, increasing demand, reducing supply, and driving prices
          to the moon.
        </p>
        <a
          className="mb-4 max-w-96 bg-pale p-4 font-red uppercase font-bold text-lg w-full text-center text-brown rounded-2xl"
          href="#buy"
        >
          Get my tokens
        </a>
        <p className="text-md text-banana font-red font-medium">
          1 HARAMBE AI = <b>$ {price} USD</b>
        </p>
        <p className="text-sm text-banana font-red">
          Hurry - Token price increases on April 4th!
        </p>
      </div>
      </div>
      <div className="flex flex-row flex-grow flex-wrap">
         <GlassItem title={"Hassle-Free Profits"} info={"No active trading needed! Simply hold the tokens and watch your gains grow."} icon={"/brain.svg"}/>
         <GlassItem title={"Hassle-Free Profits"} info={"No active trading needed! Simply hold the tokens and watch your gains grow."} icon={"/brain.svg"}/>
         <GlassItem title={"Hassle-Free Profits"} info={"No active trading needed! Simply hold the tokens and watch your gains grow."} icon={"/brain.svg"}/>
         <GlassItem title={"Hassle-Free Profits"} info={"No active trading needed! Simply hold the tokens and watch your gains grow."} icon={"/brain.svg"}/>
         <GlassItem title={"Hassle-Free Profits"} info={"No active trading needed! Simply hold the tokens and watch your gains grow."} icon={"/brain.svg"}/>
         <GlassItem title={"Hassle-Free Profits"} info={"No active trading needed! Simply hold the tokens and watch your gains grow."} icon={"/brain.svg"}/>

      </div>
    </div>

  );
}

interface GlassItemProps {
    icon: string;
    title: string;
    info: string;
}
function GlassItem({ icon, title, info} : GlassItemProps){
    return (
        <div className="flex min-w-60 flex-grow w-1/3 xl:h-1/2 h-fit p-2 ">
           <div className="flex flex-col justif w-full h-full backdrop-blur-md p-6 bg-pale/20 rounded-2xl shadow-lg">
                <img className="w-16 h-16 m-" src={icon}/>
                <h3 className="text-xl font-red font-bold text-banana">{title}</h3>
                <p className="text-sm font-red text-banana">{info}</p>
           </div>
         </div>
    )
}
function Content() {
  return (
    <div className="min-w-[400px] w-full lg:w-1/2 text-brown flex text-wrap flex-col">
      <h2 className="text-5xl pb-4 font-red font-bold">What is Harambe?</h2>
      <h3 className="text-xl pb-4 font-red font-semibold">
        Not your average primate, nor your favorite meme, or another crypto
        wealth dream gone wrong. Harambe is a hedge fund system entirely driven
        by artificial intelligence and designed to outsmart even the slickest
        traders out there.
      </h3>
      <p className="text-md pb-2 font-red">
        We've learned from the good, the bad, the winning, and the
        not-so-winning cryptocurrency blueprints over time to develop a highly
        profitable venture in the crypto jungle. Harambe has been trained on
        years of historical trades and powerful strategies of !leading hedge
        funds and expert traders. The ultimate goal? Making those high returns
        typically reserved for elites accessible to all investors.
      </p>
      <p className="text-md pb-2 font-red">
        Here's the beauty of it: all you have to do is buy it, hold it, and the
        passive earnings are basically returning to you automatically. And nope,
        it's not taking coffee breaks. It works non-stop, with zero effort on
        your end. Deployed on the blockchain, Harambe operates around the clock,
        making precise trades 24/7 on top cryptocurrencies like Bitcoin and
        Ethereum.{" "}
      </p>
      <p className="text-md font-red">
        The magic happens through a buy-back and burn mechanism, where profits
        are funneled back to the community. It's the first decentralized
        autonomous hedge fund, and the wealth flows directly to the token owners
        without any detours.
      </p>
    </div>
  );
}
