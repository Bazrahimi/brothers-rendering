import type { ServiceLeaf } from "@/app/_lib/org/category/definitions";
import { cn } from "@/app/_lib/utils/cn";
import List from "@/app/_ui/content/List";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";
import ServiceLeafImage from "./ServiceLeafImage";

export default function ServiceLeafCard({
  leaf,
  level,
  index,
}: {
  leaf: ServiceLeaf;
  level: number;
  index: number;
}) {
  const hasItems = leaf.items.length > 0;
  const isEven = index % 2 === 0;

  return (
    <article className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
      <div className="grid gap-3 sm:gap-6 sm:grid-cols-12 sm:items-start">
        {/* Row 1 — Title + Summary (always full width) */}
        <header className="sm:col-span-12 space-y-3">
          <Header as={level === 0 ? "h2" : "h3"} align="center">
            {leaf.label}
          </Header>

          {leaf.summary && (
            <P className="text-gray-800" size="lg">
              {leaf.summary}
            </P>
          )}
        </header>

        {/* Row 2 — Items (8 cols) */}
        {hasItems && (
          <section
            className={cn(
              "sm:col-span-6",
              isEven ? "sm:order-1" : "sm:order-2",
            )}
          >
            <List items={leaf.items} variant="check" />
          </section>
        )}

        {/* Row 2 — Image (4 cols) */}
        <aside
          className={cn(
            hasItems ? "sm:col-span-6" : "sm:col-span-12",
            isEven ? "sm:order-2" : "sm:order-1",
          )}
        >
          <ServiceLeafImage
            image={leaf.image}
            alt={leaf.label}
            // className="w-full sm:aspect-[4/2] "
          />
        </aside>
      </div>
    </article>
  );
}
