import HeroLink from "./HeroLink";

type Props = {
  items: Array<{
    href: string;
    label: string;
  }>;
};

export default function HeroMicroNav({ items }: Props) {
  return (
    <div className="border-t border-slate-200 bg-white/60 px-6 py-3 sm:px-8">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-600">
        {items.map(({ href, label }) => (
          <HeroLink key={href} href={href} label={label} />
        ))}
      </div>
    </div>
  );
}
