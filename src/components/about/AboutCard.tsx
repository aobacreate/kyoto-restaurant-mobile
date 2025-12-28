import Image from "next/image";

type Props = {
  imageSrc: string;
  title: string;
};

export default function AboutCard({ imageSrc, title }: Props) {
  return (
      <div className="relative w-[142px] aspect-square overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
  );
}