import ServiceLeafImage from "@/app/(pages)/services/[slug]/_ui/ServiceLeafImage";
import type { ServiceSubCategory } from "@/app/_lib/org/definitions";
import { ORG_PROFILE } from "@/app/_lib/org/profile";
import { cn } from "@/app/_lib/utils/cn";
import List from "@/app/_ui/content/List";
import ServiceCTA from "@/app/_ui/content/ServiceCTA";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";

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
            className="space-y-2"
            itemClassName="rounded-xl border border-slate-200/60 bg-slate-50/80 px-3 py-2"
            iconClassName="text-emerald-600"
          />
          <div className="mt-5">
            <div className="my-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
              <P className="my-2 text-slate-600">
                برای جزئیات بیشتر، از بخش‌های مربوطه استفاده کنید.
              </P>
            </div>
            <ServiceCTA
              ctaKey={ORG_PROFILE.cta}
              locale="fa"
              serviceLabelFarsi={heading}
              serviceLabel={heading}
            />
          </div>
        </section>

        {/* Row 2 — Image + Summary */}
        <aside
          className={cn("sm:col-span-6", isEven ? "sm:order-2" : "sm:order-1")}
        >
          {/* image is optional */}
          {img ? <ServiceLeafImage image={img} /> : null}
        </aside>
      </div>
    </article>
  );
}
