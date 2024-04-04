'use server'
import Navbar from "./_components/navbar/Navbar";
import Header from "./_components/header";
import Description from "./_components/description";
import Buy from "./_components/buy";

export default async function Home() {
  // const countdownTime = await fetch("/api/countdown")
  return (
    <main className="flex bg-cover bg-[url('/background.svg')] full">
      <div className=" flex full flex-col max-w-screen-2xl center">
        <Navbar />
        {/* <Header />
        <div className="flex xl:flex-col flex-col-reverse">
          <Description />
          <Buy />
        </div> */}
      </div>
    </main>
  );
}
