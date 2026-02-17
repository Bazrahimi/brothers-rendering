import type { ServiceSubCategory } from "@/app/_lib/org/category/definitions";
import ServiceLeafCard from "./ServiceLeafCard";

export default function ServiceDetails({
  subcategories,
}: {
  subcategories: ServiceSubCategory;
}) {
  return (
    <div className="space-y-4">
      {Object.entries(subcategories).map(([key, leaf], index) => (
        <ServiceLeafCard key={key} leaf={leaf} index={index} />
      ))}
    </div>
  );
}
