import AboutCard from "./AboutCard";
import { AboutItem } from "@/lib/about-data";


type Props = {
  items: AboutItem[];
};

export default function AboutGrid({items} : Props) {
  return (
    <div className="mt-10 max-w-[316px] mx-auto grid grid-cols-2 gap-x-2">
      {items.map((item) => (
        <AboutCard
          key={item.id}
          title={item.title}
          imageSrc={item.imageSrc}
        />
      ))}
    </div>
  )
}