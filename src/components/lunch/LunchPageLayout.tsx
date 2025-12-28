import Header from "@/components/common/Header";
import MenuTitle from "@/components/menu/MenuTitle";
import Footer from "@/components/common/Footer";
import LunchGrid from "./LunchGrid";

type Item = {
  id: string;
  title: string;
  price: number;
  imageSrc: string;
};

type Props = {
  title: string;
  subtitle: string;
  items: Item[];
};

export default function LunchPageLayout({title, subtitle, items}: Props) {
  return (
    <>
      <Header title="Menu" />
      <div className="mt-6">
        <MenuTitle title={title} subtitle={subtitle} />
      </div>
      {/* menu */}
      <div className="mt-10">
        <LunchGrid items={items} />
      </div>
      {/* Footer */}
      <div className="mt-10">
        <Footer showMap={false}/>
      </div>      
    </>
  );
}