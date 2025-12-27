import Link from "next/link";
import { MenuText } from "./MenuText";

type Props = {
  href: string;
  title: string;
  subtitle: string;
};

export default function NavButton({ href, title, subtitle }: Props) {
  return (
    <Link href={href} className="w-full">
      <MenuText title={title} subtitle={subtitle} />
    </Link>
  );
}

