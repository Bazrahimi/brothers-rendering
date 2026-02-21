"use client";
import { cn } from "@/app/_lib/utils/cn";
import { Header } from "../typography/Header";
import { P } from "../typography/paragraph";

type CarouselSlideContentProps = {
  label: string;
  description: string[];
};

const CarouselSlideContent = ({
  label,
  description,
}: CarouselSlideContentProps) => {
  return (
    <div className="px-4 pb-4">
      <Header as="h3" size="sm">
        {label}
      </Header>

      <P className={cn("mt-2 text-slate-600 text-sm line-clamp-2")}>
        {description}
      </P>
    </div>
  );
};

export default CarouselSlideContent;
