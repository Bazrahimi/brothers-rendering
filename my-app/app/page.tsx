// app/page.tsx

import { SERVICES } from "@/app/_lib/org/category/services";
import ServiceLeavesCarousel from "@/app/_ui/carousels/ServiceLeavesCarousel";


export default function HomePage() {
  return (
    <div className="space-y-12 p-6">
      {Object.entries(SERVICES).map(([key, service]) => (
        <ServiceLeavesCarousel
          key={key}
          slug={service.slug}
          subcategories={service.subcategories}
          heading={service.label}  // English
      
        />
      ))}
  
    </div>
  );
}
