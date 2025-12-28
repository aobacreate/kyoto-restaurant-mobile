import Image from "next/image";

type Props = {
  title: string;
  price: number;
  imageSrc: string;
};

export default function LunchItemCard({ title, price, imageSrc }: Props) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[142px] aspect-square overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="mt-3 text-sm">{title}</div>
      <div className="mt-2 text-sm">¥ {price}</div>
    </div>
  );
}
