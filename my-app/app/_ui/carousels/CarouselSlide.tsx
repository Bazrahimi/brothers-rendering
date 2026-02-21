"use client";

import type { ServiceLeaf } from "@/app/_lib/org/definitions";
import { PublicRoutes } from "@/app/_lib/routes/publicRoutes";
import Link from "next/link";
import CarouselImage from "./CarouselImage";
import CarouselSlideContent from "./CarouselSlideContent";
import type { Locale } from "./ServiceLeavesCarousel";

type Props = {
  leaf: ServiceLeaf;
  leafId: string;
  serviceSlug: string;
  locale: Locale;
};

export default function CarouselSlide({
  leaf,
  leafId,
  serviceSlug,
  locale,
}: Props) {
  const title = locale === "fa" ? leaf.labelFarsi : leaf.label;

  return (
    <Link
      href={`${PublicRoutes.service(serviceSlug)}#${leafId}`}
      className="block h-full"
    >
      <article className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <CarouselSlideContent
          title={title}
          description={[...leaf.description]}
          locale={locale}
        />
        <CarouselImage image={leaf.image} alt={title} />
      </article>
    </Link>
  );
}
