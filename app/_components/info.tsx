import Image from "next/image";

interface InfoProps {
  price: number;
  date: string;
}
export default function Info({ price, date }: InfoProps) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    const tempDate = new Date(date)
    const month = tempDate.getMonth()
    const day = tempDate.getDate()
  return (
    <div className="flex flex-col xl:flex-row h-fit p-8 md:p-12 xl:p-20 w-full ">
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
          Hurry - Token price increases on {monthNames[month]} {day}{day > 1 ? "th" : "st"}!
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