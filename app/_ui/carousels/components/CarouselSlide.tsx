"use client";

import type { ServiceLeaf } from "@/app/_lib/org/definitions";
import { useState } from "react";
import CarouselImage from "./CarouselImage";
import CarouselSlideContent from "./CarouselSlideContent";

import ServiceLeafModal from "../modal/ServiceLeafModal";
type Props = {
  leaf: ServiceLeaf;
  leafId: string;
};

export default function CarouselSlide({ leaf, leafId }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group block h-full w-full text-left cursor-pointer focus:outline-none"
      >
        <article className="h-full flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
          {/* Image */}
          <div className="overflow-hidden">
            <CarouselImage image={leaf.image}  />
          </div>

          {/* Content */}
          <div className="flex-1">
            <CarouselSlideContent
              label={leaf.label}
              items={leaf.items.slice(0, 4)}
            />
          </div>
        </article>
      </button>
      <ServiceLeafModal
        open={open}
        onClose={() => setOpen(false)}
        leaf={leaf}
        leafId={leafId}
      />
    </>
  );
}
