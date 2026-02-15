import { cldCardHeroAuto } from "@/app/_lib/cloudinary/cloudinary";
import type { ServiceLeaf } from "@/app/_lib/org/category/definitions";
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
  const imageSrc = leaf.imageUrl ? cldCardHeroAuto(leaf.imageUrl) : "";

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="grid gap-6 sm:grid-cols-12 sm:items-start">
        {/* CONTENT: always first on mobile, left on sm+ */}
        <div
          className={
            leaf.imageUrl
              ? "order-1 sm:order-none sm:col-span-8 space-y-4"
              : "order-1 sm:order-none sm:col-span-12 space-y-4"
          }
        >
          <Header as={level === 0 ? "h2" : "h3"} size="sm">
            {leaf.label}
          </Header>

          {leaf.summary ? (
            <P className="text-sm text-slate-600">{leaf.summary}</P>
          ) : null}

          {leaf.items.length ? (
            <ul className="list-disc space-y-1 pl-5 text-slate-700">
              {leaf.items.map((item) => (
                <li key={item}>
                  <P className="text-sm">{item}</P>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {/* IMAGE: bottom on mobile, right on sm+ */}
        {leaf.imageUrl ? (
          <div className="order-2 sm:order-none sm:col-span-4">
            <ServiceLeafImage
              src={imageSrc || leaf.imageUrl}
              alt={leaf.label}
              className="w-full  sm:aspect-[4/3] "
            />
          </div>
        ) : null}
      </div>
    </article>
  );
}
