import Image from "next/image";

import Header from "./components/Header";
import Hero from "./components/Hero";
import HomeNavButtons from "./components/HomeNavButtons";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      {/* 写真セクション */}
      <div className="relative w-96 h-[470px] overflow-hidden mx-auto mt-10">
        <Image
          src="/images/hero.jpg"
          alt="京料理"
          fill
          className="object-cover object-bottom"
          priority
        />
        {/* 黒のオーバーレイ */}
        <div className="absolute inset-0 bg-black/5" />
      </div>
      {/* HomeNavButtons セクション*/}
      <div className="mt-10">
        <HomeNavButtons />
      </div>
      {/* Footer */}
      <div className="mt-10">
        <Footer />
      </div>      
    </>
  );
}

