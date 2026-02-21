"use client";

import Link from "next/link";
import { slugify } from "@/app/_lib/utils/helper";
import { PublicRoutes } from "@/app/_lib/routes/publicRoutes";
import CarouselImage from "./CarouselImage";
import CarouselSlideContent from "./CarouselSlideContent";
import type { ServiceLeaf } from "@/app/_lib/org/definitions";
import type { Locale } from "./ServiceLeavesCarousel";

type Props = {
  leaf: ServiceLeaf;
  serviceSlug: string;
  locale: Locale;
};

export default function CarouselSlide({
  leaf,
  serviceSlug,
  locale,
}: Props) {
  const title = locale === "fa" ? leaf.labelFarsi : leaf.label;
  const sectionId = slugify(leaf.label);

  return (
    <Link
      href={`${PublicRoutes.service(serviceSlug)}#${sectionId}`}
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