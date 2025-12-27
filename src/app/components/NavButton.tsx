import Link from "next/link";

type Props = {
  href: string;
  title: string;    // MENU / ABOUT / BLOG
  subtitle: string; // －お品書き など
};

export default function NavButton({ href, title, subtitle }: Props) {
  return (
    <Link
      href={href}
      className="w-full">
      <div className="py-4 flex flex-col justify-start items-center gap-1">
        <div className="text-2xl font-bold">
          {title}
        </div>
        <div className="text-base font-normal">
          {subtitle}
        </div>
      </div>
    </Link>
  );
}
