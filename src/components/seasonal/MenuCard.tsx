import Image from "next/image";

type Props = {
  src: string;
  name: string;
  price: string;
};

export default function MenuCard({ src, name, price }: Props) {
  return (
    <div className="w-full max-w-[393px] mx-auto flex flex-col gap-3">
      {/* 写真 */}
      <div className="relative aspect-[393/320] overflow-hidden">
        <Image
          src={src}
          alt={name}
          fill
          className="object-cover object-center"
          sizes="(max-width: 393px) 100vw, 393px"
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
