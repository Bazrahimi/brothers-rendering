import type { ServiceSubCategory } from "@/app/_lib/org/definitions";
import List from "@/app/_ui/content/List";
import { Header } from "@/app/_ui/typography/Header";
import { cn } from "@/app/_lib/utils/cn";

type Props = {
  heading: string;
  subcategories: ServiceSubCategory;
  className?: string;
};

export default function SubcategoriesOtherLangs({
  heading,
  subcategories,
  className,
}: Props) {
  const items = Object.values(subcategories).map((leaf) => leaf.labelFarsi);

  return (
    <section
      dir="rtl"
      className={cn(
        "rounded-3xl border border-slate-200 bg-white/70 shadow-sm backdrop-blur",
        "p-5 sm:p-7",
        className,
      )}
      aria-label={heading}
    >
      {/* Title row */}
      <div className="flex items-center justify-between gap-3">
        <Header as="h2" align="right" className="text-slate-900">
          {heading}
        </Header>

        {/* small decorative pill */}
        <span className="hidden sm:inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
          خدمات
        </span>
      </div>

    

      {/* List */}
      <div className="mt-4">
        <List
          items={items}
          variant="check"
          className="space-y-2"
          itemClassName="rounded-xl bg-slate-50/80 px-3 py-2 border border-slate-200/60"
          iconClassName="text-emerald-600"
        />
      </div>
    </section>
  );
}
