import Image from "next/image";
import Navbar from "./_components/navbar";
import Header from "./_components/header";
import Description from "./_components/description";
import Buy from "./_components/buy";

export default function Home() {
  return (
    <main className="flex bg-cover bg-[url('/yellow.svg')] min-h-screen w-full h-full">
      <div className=" flex w-full min-h-screen h-full flex-col max-w-screen-2xl justify-start items-center">
      <Navbar/>
      <Header/>
      <Description/>
      </div>
      {/* <Buy/> */}
    </main>
  );
}
