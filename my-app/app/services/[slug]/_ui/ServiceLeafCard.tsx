import { cldCardHeroAuto } from "@/app/_lib/cloudinary/cloudinary";
import type { ServiceLeaf } from "@/app/_lib/org/category/definitions";
import { cn } from "@/app/_lib/utils/cn";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";
import ServiceLeafImage from "./ServiceLeafImage";

export default function ServiceLeafCard({
  leaf,
  level,
}: {
  leaf: ServiceLeaf;
  level: number;
}) {
  const hasImage = leaf.imageUrl;
  const hasItems = leaf.items.length > 0;

  return (
    <article className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm ">
      {/* 12-cols grind on sm+ */}
      <div className="grid gap-3 sm:gap-6 sm:grid-cols-12 sm:items-start">
        <header className="sm:col-span-12 space-y-3">
          <Header as={level === 0 ? "h2" : "h3"}>{leaf.label}</Header>
          {leaf.summary && <P>{leaf.summary}</P>}
        </header>

        {/* Row 2 - ITEMS (LEFT) */}
        {hasItems && (
          <section
            className={cn(
              "sm:col-span-12",
              // if image exist, items take 8 cols; otherwise take full width
              hasImage ? "sm:col-span-8" : "sm:col-span-12",
            )}
          >
            <ul className="list-disc space-y-1 pl-5 text-gray-700">
              {leaf.items.map((item) => (
                <li key={item}>
                  <P>{item}</P>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* ROW 2 - IMAGE (right) */}
        {hasImage && (
          <aside
            className={cn(
              // if there are no items, let the image take full width so it does not look lonely
              hasItems ? "sm:col-span-4" : "sm:col-span-12",
            )}
          >
            <ServiceLeafImage
              src={cldCardHeroAuto(leaf.imageUrl)}
              alt={leaf.label}
              className="w-full sm:aspect-[4/3"
            />
          </aside>
        )}
      </div>
    </article>
  );
}
