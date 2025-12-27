import NavButton from "./NavButton";

export default function HomeNavButtons() {
  return (
    <div className="flex flex-col items-center gap-5">
      <NavButton href="/menu" title="MENU" subtitle="－お品書き" />
      <NavButton href="/about" title="ABOUT" subtitle="－店のご案内" />
      <NavButton href="/blog" title="BLOG" subtitle="－日々のこと" />
    </div>
  );
}
