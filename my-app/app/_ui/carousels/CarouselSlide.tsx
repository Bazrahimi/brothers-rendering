"use client";

import type { ServiceLeaf } from "@/app/_lib/org/definitions";
import { PublicRoutes } from "@/app/_lib/routes/publicRoutes";
import Link from "next/link";
import CarouselImage from "./CarouselImage";
import CarouselSlideContent from "./CarouselSlideContent";

type Props = {
  leaf: ServiceLeaf;
  leafId: string;
  serviceSlug: string;
};

export default function CarouselSlide({ leaf, leafId, serviceSlug }: Props) {
  return (
    <Link
      href={`${PublicRoutes.service(serviceSlug)}#${leafId}`}
      className="block h-full"
    >
      <article className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <CarouselSlideContent
          label={leaf.label}
          description={[...leaf.description]}
        />
        <CarouselImage image={leaf.image} alt={leaf.label} />
      </article>
    </Link>
  );
}
