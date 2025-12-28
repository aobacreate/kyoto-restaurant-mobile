import LunchPageLayout from "@/components/lunch/LunchPageLayout";
import { lunchItems } from "@/lib/menu-data";

export default function LunchPage() {
  return (
    <LunchPageLayout
      title="ランチ"
      subtitle="昼のお品書き"
      items={lunchItems}
    />
  );
}
