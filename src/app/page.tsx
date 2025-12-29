import Image from "next/image";

import Header from "@/components/common/Header";
import HomeNavButtons from "@/components/top/HomeNavButtons";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <>
      <Header title="京都や" />
      <div className="relative w-96 h-[320px] overflow-hidden mx-auto mt-6">
        <Image
          src="/images/seasonal/hero.webp"
          alt="京料理"
          fill
          className="object-cover object-bottom"
          priority
        />

        {/* 文字を読みやすくするための濃いめオーバーレイ */}
        <div className="absolute inset-0 bg-black/25" />

        {/* 写真の上の文章 */}
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <h1 className="text-white text-xl font-semibold leading-tight">
            京の旬を、静かに味わう
          </h1>
          <p className="text-white/90 text-sm mt-2">
            祇園の小さな京料理店「京都や」
          </p>
        </div>
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

