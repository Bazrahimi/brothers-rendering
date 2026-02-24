import Link from "next/link";
type Props = {
  href: string;
  label: string;
};
const HeroLink = ({ href, label }: Props) => {
  return (
    <Link
      href={href}
      className="font-semibold text-slate-700 hover:text-slate-900"
    >
      {label}
    </Link>
  );
};

export default HeroLink;
