import Image from "next/image";
import Header from "@/components/common/Header";
import NavButton from "@/components/common/NavButton";
import MenuButtons from "@/components/menu/MenuButtons";
import Footer from "@/components/common/Footer";

export default function Menu() {
  return (
    <>
      <Header title="Menu" />
      <div className="mt-6">
        <NavButton href="/menu/seasonal" title="季節限定" subtitle="旬の食材を使った献立"/>
      </div>
      {/* 写真セクション */}
      <div className="relative w-96 h-[300px] overflow-hidden mx-auto">
        <Image
          src="/images/seasonal/hero.webp"
          alt="京料理"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      {/* MenuButtons セクション*/}
      <div className="mt-10">
        <MenuButtons />
      </div>
      {/* Footer */}
      <div className="mt-10">
        <Footer showMap={false}/>
      </div>      
    </>
  );
}

