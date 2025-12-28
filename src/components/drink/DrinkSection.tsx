
type Item = {
  id: string;
  title: string;
  price: number;
};

type Props = {
  items: Item[];
};

export default function DrinkSection({ items }: Props) {
  return (
    <ul className="max-w-[316px] mx-auto space-y-6">
      {items.map((item) => (
        <li key={item.id} className="flex justify-between">
          <span>{item.title}</span>
          <span>¥ {item.price}</span>
        </li>
      ))}
    </ul>
  );
}
