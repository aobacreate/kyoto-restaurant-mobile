import Image from "next/image";

type Props = {
  src: string;
  name: string;
  price: string;
};

export default function MenuCard({ src, name, price }: Props) {
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
        <div>¥ {price}</div>
      </div>
    </div>
  );
}
