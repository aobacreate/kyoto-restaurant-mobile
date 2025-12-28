
type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <header className="w-full h-16 flex items-center justify-center bg-[var(--color-header-bg)]">
      <h1 className="text-2xl font-semibold tracking-wide">
        {title}
      </h1>
    </header>
  );
}
