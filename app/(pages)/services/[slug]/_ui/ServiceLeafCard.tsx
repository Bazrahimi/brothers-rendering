import type { ServiceLeaf } from "@/app/_lib/org/definitions";
import { cn } from "@/app/_lib/utils/cn";
import List from "@/app/_ui/content/List";
import ImageGallery from "@/app/_ui/image/ImageGallery";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";

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
              <List items={leaf.items} />
            </section>
          )}

          {/* Row 2 — Image (4 cols) */}
          <aside
            className={cn(
              hasItems ? "sm:col-span-6" : "sm:col-span-12",
              isEven ? "sm:order-2" : "sm:order-1",
            )}
          >
            <div className="mx-auto w-full max-w-3xl overflow-hidden">
              <ImageGallery images={leaf.image} priorityFirstImage />
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
