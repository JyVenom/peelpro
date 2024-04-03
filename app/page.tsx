import Image from "next/image";
import Navbar from "./_components/navbar";
import Header from "./_components/header";
import Description from "./_components/description";
import Buy from "./_components/buy";

export default function Home() {
  return (
    <main className="flex bg-cover bg-[url('/poly-background.svg')] flex-col justify-start items-center min-h-screen w-full h-full">
      <Navbar/>
      {/* <Header/>
      <Description/>
      <Buy/> */}
    </main>
  );
}
