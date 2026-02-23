import { Header } from "../../typography/Header";
import { P } from "../../typography/paragraph";
import { cn } from "@/app/_lib/utils/cn";

type Props = {
  serviceLabelFarsi: string;
  subcategoryLabelsFarsi: readonly string[];
  className?: string;
  badgeLabel?: string; // optional, e.g. "خدمات"
};

const ServicesOtherLanguages = ({
  serviceLabelFarsi,
  subcategoryLabelsFarsi,
  className,
  badgeLabel,
}: Props) => {
  const count = subcategoryLabelsFarsi.length;
  return (
    <article
      dir="rtl"
      className={cn(
        "rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur sm:p-7",
        className,
      )}
      aria-label={serviceLabelFarsi}
    >
      <header className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          <Header as="h3" align="right" className="text-slate-900">
            {serviceLabelFarsi}
          </Header>

          <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
            {badgeLabel}
          </span>
        </div>

        <div className="h-px w-full bg-slate-200/70" />
      </header>

      <P className="mt-3 text-slate-600">{count} مورد در این بخش</P>

      {/* simple responsive list */}
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {subcategoryLabelsFarsi.map((label) => (
          <li
            key={label}
            className="rounded-xl border border-slate-200/60 bg-slate-50/80 px-3 py-2 text-slate-800"
          >
            {label}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ServicesOtherLanguages;
