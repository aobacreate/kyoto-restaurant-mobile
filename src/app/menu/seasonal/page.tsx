import Image from "next/image";
import Header from "@/components/Header";
import MenuTitle from "@/components/MenuTitle";
import Footer from "@/components/Footer";

export default function Seasonal() {
  return (
    <>
      <Header title="Menu" />
      <div className="mt-6">
        <MenuTitle title="季節限定" subtitle="旬の食材を使った献立"/>
      </div>
      <div className="mt-6 flex flex-col gap-10">
        <MenuCard src="/images/hero.jpg" name="秋の京懐石" price="3000" />
        <MenuCard src="/images/seasonal.jpg" name="彩御膳" price="3000" />
      </div>
      {/* Footer */}
      <div className="mt-10">
        <Footer showMap={false}/>
      </div>      
    </>
  );
}

type Props = {
  src: string;
  name: string;
  price: string;
};

function MenuCard({ src, name, price }: Props) {
  return (
    <div className="w-96 mx-auto flex flex-col gap-3">
      {/* 写真 */}
      <div className="relative h-[320px] overflow-hidden">
        <Image
          src={src}
          alt={name}
          fill
          className="object-cover object-center"
        />
      </div>

      {/* name / price */}
      <div className="px-4 flex justify-between items-center">
        <div>{name}</div>
        <div>￥{price}</div>
      </div>
    </div>
  );
}
