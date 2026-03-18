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
  const href = `${PublicRoutes.service(serviceSlug)}#${leafId}`;

  return (
    <Link
      href={href}
      className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 rounded-2xl"
      prefetch={false}
    >
      <article className="h-full flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
        {/* Image */}
        <div className="overflow-hidden">
          <CarouselImage image={leaf.image} />
        </div>

        {/* Content */}
        <div className="flex-1">
          <CarouselSlideContent
            label={leaf.label}
            description={[...leaf.description]}
          />
        </div>
      </article>
    </Link>
  );
}
