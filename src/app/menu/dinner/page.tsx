import LunchPageLayout from "@/components/lunch/LunchPageLayout";
import { dinnerItems } from "@/lib/menu-data";

export default function DinnerPage() {
  return (
    <LunchPageLayout
      title="ディナー"
      subtitle="夜の懐石・一品"
      items={dinnerItems}
    />
  );
}
