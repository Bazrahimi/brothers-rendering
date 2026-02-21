"use client";
import { cn } from "@/app/_lib/utils/cn";
import { Header } from "../typography/Header";
import { P } from "../typography/paragraph";

import type { Locale } from "./ServiceLeavesCarousel";
type CarouselSlideContentProps = {
  title: string;
  items: string[];
  locale: Locale;
};

const CarouselSlideContent = ({
  title,
  items,
  locale,
}: CarouselSlideContentProps) => {
  return (
    <div className="px-4 pb-4">
      <Header
        as="h3"
        size="sm"
        className={cn("text-slate-900", locale === "fa" && "text-right")}
      >
        {title}
      </Header>

      <P
        className={cn(
          "mt-2 text-slate-600 text-sm line-clamp-2",
          locale === "fa" && "text-right",
        )}
      >
        {items.slice(0, 2).join(" • ")}
      </P>
    </div>
  );
};

export default CarouselSlideContent;
