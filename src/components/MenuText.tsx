type Props = {
  title: string;
  subtitle: string;
};

export function MenuText({ title, subtitle }: Props) {
  return (
    <div className="py-4 flex flex-col items-center gap-1">
      <div className="text-2xl font-bold">{title}</div>
      <div className="text-base font-normal">{subtitle}</div>
    </div>
  );
}
