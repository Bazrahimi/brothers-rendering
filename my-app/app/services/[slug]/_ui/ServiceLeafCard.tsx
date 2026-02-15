import { cldCardHeroAuto } from "@/app/_lib/cloudinary/cloudinary";
import type { ServiceLeaf } from "@/app/_lib/org/category/definitions";
import { cn } from "@/app/_lib/utils/cn";
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
  const hasImage = Boolean(leaf.imageUrl);
  const hasItems = leaf.items.length > 0;
  const isEven = index % 2 === 0; // 0,2,4... => items left, image right

  return (
    <article className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
      <div className="grid gap-3 sm:gap-6 sm:grid-cols-12 sm:items-start">
        {/* Row 1: label + summary full width */}
        <header className="sm:col-span-12 space-y-3">
          <Header as={level === 0 ? "h2" : "h3"}>{leaf.label}</Header>
          {leaf.summary ? <P>{leaf.summary}</P> : null}
        </header>

        {/* Row 2: ITEMS */}
        {hasItems ? (
          <section
            className={cn(
              hasImage ? "sm:col-span-8" : "sm:col-span-12",
              // swap order on sm+
              hasImage && (isEven ? "sm:order-1" : "sm:order-2"),
            )}
          >
            <ul className="list-disc  space-y-1 pl-5 text-gray-700">
              {leaf.items.map((item) => (
                <li key={item}>
                  <P>{item}</P>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {/* Row 2: IMAGE */}
        {hasImage ? (
          <aside
            className={cn(
              hasItems ? "sm:col-span-4" : "sm:col-span-12",
              // IMPORTANT: image must also swap order
              hasItems && (isEven ? "sm:order-2" : "sm:order-1"),
            )}
          >
            <ServiceLeafImage
              src={cldCardHeroAuto(leaf.imageUrl!)}
              alt={leaf.label}
              className="w-full sm:aspect-[4/3]"

            />
          </aside>
        ) : null}
      </div>
    </article>
  );
}
