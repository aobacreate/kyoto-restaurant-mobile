import { drinkItems } from "@/lib/menu-data";
import Header from "@/components/common/Header";
import MenuTitle from "@/components/menu/MenuTitle";
import Footer from "@/components/common/Footer";
import DrinkSection from "@/components/drink/DrinkSection";

export default function Drink() {
  return (
    <>
      <Header title="Menu" />
      <div className="mt-6">
        <MenuTitle title="ドリンク" subtitle="日本酒・お飲み物" />
      </div>
      {/* menu */}
      <div className="mt-6">
        <DrinkSection items={drinkItems} />
      </div>
      {/* Footer */}
      <div className="mt-10">
        <Footer showMap={false}/>
      </div>      
    </>
  );
}
