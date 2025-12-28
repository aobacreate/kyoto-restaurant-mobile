import Header from "@/components/common/Header";
import MenuTitle from "@/components/menu/MenuTitle";
import MenuCard from "@/components/seasonal/MenuCard";
import Footer from "@/components/common/Footer";

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


