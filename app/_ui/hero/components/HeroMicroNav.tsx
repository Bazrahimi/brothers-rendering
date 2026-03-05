import HeroLink from "./HeroLink";
import { P } from "../../typography/paragraph";

type Props = {
  items: Array<{
    href: string;
    label: string;
  }>;
};

export default function HeroMicroNav({ items }: Props) {
  return (
    <div className="border-t border-slate-200 bg-gray-50  px-2 py-3 sm:px-6 mx-3 rounded-2xl">
      <P className="flex flex-wrap items-center gap-x-5 gap-y-2  text-white">
        {items.map(({ href, label }) => (
          <HeroLink key={href} href={href} label={label} />
        ))}
      </P>
    </div>
  );
}
