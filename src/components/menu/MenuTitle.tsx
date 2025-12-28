import { MenuText } from "./MenuText";
type Props = {
  title: string;
  subtitle: string;
};

export default function MenuTitle({ title, subtitle }: Props) {
  return <MenuText title={title} subtitle={subtitle} />;
}
