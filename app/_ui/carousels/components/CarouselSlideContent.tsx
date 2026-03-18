"use client";

import { Header } from "../../typography/Header";
import List from "../../content/List";

type CarouselSlideContentProps = {
  label: string;
  items: string[];
};

export default function CarouselSlideContent({
  label,
  items,
}: CarouselSlideContentProps) {
  return (
    <div className="px-4 py-4">
      {/* Clamp title to 1 line so all cards align */}
      <Header as="h3" size="sm" className="line-clamp-1">
        {label}
      </Header>

      {/* List instead of description */}
      <div className="mt-2 max-h-[180px] text-slate-600">
        <List
          items={items}
          className="px-0 py-0"
          itemClassName="!gap-1"
          iconClassName="!h-3 !w-3"
          textClassName=" px-0  !text-sm"
        />
      </div>
    </div>
  );
}
