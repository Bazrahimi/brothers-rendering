import { cn } from "@/app/_lib/utils/cn";
import OtherLanguages from "../../layout/navbar/OtherLanguages";
import { Header } from "../../typography/Header";
import { P } from "../../typography/paragraph";
import List from "../List";

type Props = {
  serviceLabelFarsi: string;
  subcategoryLabelsFarsi: readonly string[];
  className?: string;
};

const ServicesOtherLanguages = ({
  serviceLabelFarsi,
  subcategoryLabelsFarsi,
  className,
}: Props) => {
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

          <div>
            <P className="inline-flex">بیشتر در زبانهای </P>{" "}
            <OtherLanguages className="inline-flex cursor-pointer items-center rounded-md px-1 text-sky-700 underline decoration-sky-300 underline-offset-2 transition hover:text-sky-800 hover:decoration-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60" />
          </div>
        </div>

        <div className="h-px w-full bg-slate-200/70" />
      </header>

      <List
        items={subcategoryLabelsFarsi}
        layout="grid"
        columns={2}
        className="mt-4 bg-transparent border-0 px-0 py-0"
        itemClassName="rounded-xl border border-slate-200/60 bg-slate-50/80 px-3 py-2"
        textClassName="bg-transparent border-0 px-0 text-slate-800"
      />
    </article>
  );
};

export default ServicesOtherLanguages;
