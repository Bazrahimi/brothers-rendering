// app/page.tsx

import { SERVICES } from "@/app/_lib/org/category/services";
import ServiceLeavesCarousel from "@/app/_ui/carousels/ServiceLeavesCarousel";
import { solidPlastering } from "./_lib/org/category/subCategories/solidPlastering";

export default function HomePage() {
  return (
    <div className="space-y-12 p-6">
      {/* {Object.entries(SERVICES).map(([key, service]) => (
        <ServiceLeavesCarousel
          key={key}
          subcategories={service.subcategories}
          heading={service.label}  // English
          locale="en"
        />
      ))} */}
      <ServiceLeavesCarousel
        subcategories={SERVICES.solidPlastering.subcategories}
        heading={SERVICES.solidPlastering.label}
        locale="en"
      
      />
    </div>
  );
}