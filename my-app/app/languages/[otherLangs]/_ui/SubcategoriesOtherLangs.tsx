import type { ServiceSubCategory } from "@/app/_lib/org/definitions";
import { cn } from "@/app/_lib/utils/cn";
import List from "@/app/_ui/content/List";
import ServiceCTA from "@/app/_ui/content/ServiceCTA";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";
import ServiceLeafImage from "@/app/services/[slug]/_ui/ServiceLeafImage";

type Props = {
  heading: string;
  subcategories: ServiceSubCategory;
  index?: number;
  className?: string;
};

export default function SubcategoriesOtherLangs({
  heading,
  subcategories,
  index = 0,
  className,
}: Props) {
  const isEven = index % 2 === 0;

  const leaves = Object.values(subcategories);

  // ✅ list items
  const items = leaves.map((leaf) => leaf.labelFarsi);

  // ✅ pick ONE image (first leaf image) for the right panel
  const img = leaves[0]?.image;

  const count = items.length;

  return (
    <article
      dir="rtl"
      className={cn(
        "rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur sm:p-7",
        className,
      )}
      aria-label={heading}
    >
      <div className="grid gap-3 sm:gap-6 sm:grid-cols-12 sm:items-start">
        {/* Row 1 — Title */}
        <header className="sm:col-span-12 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <Header as="h2" align="right" className="text-slate-900">
              {heading}
            </Header>

            <span className="hidden sm:inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
              خدمات
            </span>
          </div>

          <div className="h-px w-full bg-slate-200/70" />
        </header>

        {/* Row 2 — List */}
        <section
          className={cn("sm:col-span-6", isEven ? "sm:order-1" : "sm:order-2")}
        >
          <List
            items={items}
            variant="check"
            className="space-y-2"
            itemClassName="rounded-xl border border-slate-200/60 bg-slate-50/80 px-3 py-2"
            iconClassName="text-emerald-600"
          />
        </section>

        {/* Row 2 — Image + Summary */}
        <aside
          className={cn("sm:col-span-6", isEven ? "sm:order-2" : "sm:order-1")}
        >
          {/* image is optional */}
          {img ? <ServiceLeafImage image={img} alt={heading} /> : null}

          <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
            <Header as="h3" align="right" className="text-slate-900" size="sm">
              خلاصه
            </Header>

            <P className="mt-2 text-slate-700">
              {count} مورد در این بخش موجود است.
            </P>

            <P className="mt-2 text-slate-600">
              برای جزئیات بیشتر، از بخش‌های مربوطه استفاده کنید.
            </P>

            {/* <ServiceCTA headingLabel=" برای جزئیات بیشتر، از بخش‌های مربوطه استفاده کنید." serviceLabel={heading}  isRtl /> */}
            
          </div>
        </aside>
      </div>
      
    </article>
  );
}
