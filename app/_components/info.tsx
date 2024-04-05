import Image from "next/image";

interface InfoProps {
  price: number;
  date: string;
}
export default function Info({ price, date }: InfoProps) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const tempDate = new Date(date);
  const month = tempDate.getMonth();
  const day = tempDate.getDate();
  return (
    <div className="flex flex-col xl:flex-row h-fit sm:p-8 p-4 md:p-12 xl:p-20 w-full bg-cover bg-[url('/brown.svg')]">
      <div className="flex relative parent w-fit h-fit p-2">
        <div className="backdrop-blur-md bg-pale/20 hover:scale-[101%] outline-2 hover:outline outline-pale -outline-offset-1 flex z-10 flex-col h-fit w-full xl:w-96 p-10 rounded-2xl shadow-lg">
          <Image
            className="mb-4"
            src="/banana.svg"
            alt="banana"
            width={64}
            height={64}
          />
          <h2 className="mb-4 text-xl font-red font-bold text-banana">
            About Banana Cat
          </h2>
          <p className="mb-4 text-md font-red font-medium text-banana ">
            We are a Solana based token created to join in on the huge potential profits of the current meme coin industry. This is a meme coin, don’t take it too seriously. Invest if you want ig.
            Hassle Free Profits
          </p>
          <a
            className="mb-4 max-w-96 bg-pale p-4 font-red uppercase font-bold text-lg w-full text-center text-brown rounded-2xl"
            href="#buy"
          >
            Get my tokens
          </a>
          <p className="text-md text-banana font-red font-medium">
            1 NANACAT AI = <b>$ {price} USD</b>
          </p>
          <p className="text-sm text-banana font-red">
            Hurry - Token price increases on {monthNames[month]} {day}
            {day > 1 ? "th" : "st"}!
          </p>
        </div>
      </div>
      <div className="flex flex-row flex-grow flex-wrap">
        <GlassItem
            title={"Pre-Sale Discount"}
            info={
              "There is a discount on the pre-sale, but the longer you wait, the more expensive the pre-sale price becomes."
            }
            icon={"/brain.svg"}
        />
        <GlassItem
            title={"Burned coins"}
            info={
              "As a result of our burn rate, the coins will become increasingly rare and higher in price. Shit is valuable."
            }
            icon={"/brain.svg"}
        />
        <GlassItem
          title={"Game Plan"}
          info={
            "We plan to host our pre-sale until we hit $25k, or 400 mil $NANACAT, whichever comes first 😈"
          }
          icon={"/brain.svg"}
        />
        <GlassItem
          title={"Market Trends"}
          info={
            "Bitcoin is the largest indicator of the health of the crypto market. Its gone up over 140% in the past 6 months! Stonks are stonks."
          }
          icon={"/brain.svg"}
        />
        <GlassItem
          title={"Developer Thoughts"}
          info={
            "In my completely unbiased opinion, $NANACAT is only going up. People (me) have been saying it's the best crypto of all time. Numbers don’t lie 🥱"
          }
          icon={"/brain.svg"}
        />
        <GlassItem
          title={"Buy It"}
          info={
            "Green is green. Lets roll out this dough together 🥳"
          }
          icon={"/brain.svg"}
        />
      </div>
    </div>
  );
}

interface GlassItemProps {
  icon: string;
  title: string;
  info: string;
}
function GlassItem({ icon, title, info }: GlassItemProps) {
  return (
    <div className="flex  min-w-60 flex-grow w-1/3 xl:h-1/2 h-fit p-2 ">
      <div className="flex hover:scale-[101%] outline-2 hover:outline outline-pale -outline-offset-1 flex-col justif w-full h-full backdrop-blur-md p-6 bg-pale/20 rounded-2xl shadow-lg">
        <img className="w-16 h-16 m-" src={icon} />
        <h3 className="text-xl font-red font-bold text-banana">{title}</h3>
        <p className="text-sm font-red text-banana">{info}</p>
      </div>
    </div>
  );
}
