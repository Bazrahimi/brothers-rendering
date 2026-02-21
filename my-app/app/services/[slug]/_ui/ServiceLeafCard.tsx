import type { ServiceLeaf } from "@/app/_lib/org/definitions";
import { ORG_PROFILE } from "@/app/_lib/org/profile";
import { cn } from "@/app/_lib/utils/cn";
import List from "@/app/_ui/content/List";
import ServiceCTA from "@/app/_ui/content/ServiceCTA";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";
import ServiceLeafImage from "./ServiceLeafImage";

type Props = {
  leaf: ServiceLeaf;
  index: number;
  leafId: string;
};

export default function ServiceLeafCard({ leaf, index, leafId }: Props) {
  const hasItems = leaf.items.length > 0;
  const isEven = index % 2 === 0;
  // const activeCta = CTA_MAP[ORG_PROFILE.cta];

  return (
    <>
      <article
        className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm scroll-mt-24"
        id={leafId}
      >
        <div className="grid gap-3 sm:gap-6 sm:grid-cols-12 sm:items-start mb-5 sm:mb-10">
          {/* Row 1 — Title + Summary (always full width) */}
          <header className="sm:col-span-12 space-y-3">
            <Header as="h2">{leaf.label}</Header>

            {leaf.description &&
              leaf.description.map((t, i) => (
                <P key={i} className="indent-6">
                  {t}
                </P>
              ))}
          </header>

          {/* Row 2 — Items (8 cols) */}
          {hasItems && (
            <section
              className={cn(
                "sm:col-span-6",
                isEven ? "sm:order-1" : "sm:order-2",
              )}
            >
              {/* Divider */}
              <div className="mb-4 h-px w-full bg-slate-200/70" />
              <List items={leaf.items} variant="check" />

              <div className="mt-5 hidden md:block">
                <ServiceCTA
                  ctaKey={ORG_PROFILE.cta}
                  serviceLabel={leaf.label}
                  locale="en"
                />
              </div>
            </section>
          )}

          {/* Row 2 — Image (4 cols) */}
          <aside
            className={cn(
              hasItems ? "sm:col-span-6" : "sm:col-span-12",
              isEven ? "sm:order-2" : "sm:order-1",
            )}
          >
            <ServiceLeafImage image={leaf.image} alt={leaf.label} />
            <div className="mt-5 block md:hidden">
              <ServiceCTA
                ctaKey={ORG_PROFILE.cta}
                serviceLabel={leaf.label}
                locale="en"
              />
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
