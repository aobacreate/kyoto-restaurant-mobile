import NavButton from "../common/NavButton";

export default function MenuButtons() {
  return (
    <div className="flex flex-col items-center gap-5">
      <NavButton href="/menu/lunch" title="ランチ" subtitle="－昼のお品書き" />
      <NavButton href="/menu/dinner" title="ディナー" subtitle="－夜の懐石・一品" />
      <NavButton href="/menu/drink" title="ドリンク" subtitle="－日本酒・お飲み物" />
    </div>
  );
}
