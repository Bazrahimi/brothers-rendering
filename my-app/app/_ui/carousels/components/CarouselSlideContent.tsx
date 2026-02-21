"use client";

import { Header } from "../../typography/Header";
import { P } from "../../typography/paragraph";

type CarouselSlideContentProps = {
  label: string;
  description: string[];
};

export default function CarouselSlideContent({
  label,
  description,
}: CarouselSlideContentProps) {
  return (
    <div className="px-4 py-4">
      {/* Clamp title to 1 line so all cards align */}
      <Header as="h3" size="sm" className="line-clamp-1">
        {label}
      </Header>

      {/* Reserve space with min-h so cards are consistent */}
      <P className="mt-2 text-slate-600 text-sm line-clamp-2 min-h-[40px]">
        {description?.[0] ?? ""}
      </P>
    </div>
  );
}
