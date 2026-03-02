import type { ServiceSubCategory } from "@/app/_lib/org/definitions";
import { Suspense } from "react";
import ServiceLeafCard from "./ServiceLeafCard";
import ServiceLeafCardSkeleton from "./ServiceLeafCardSkeleton";

export default function ServiceDetails({
  subcategories,
}: {
  subcategories: ServiceSubCategory;
}) {
  return (
    <div className="space-y-4">
      {Object.entries(subcategories).map(([key, leaf], index) => (
        <Suspense key={key} fallback={<ServiceLeafCardSkeleton />}>
          <ServiceLeafCard leaf={leaf} index={index} leafId={key} />
        </Suspense>
      ))}
    </div>
  );
}
