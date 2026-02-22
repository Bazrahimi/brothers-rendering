// // app/page.tsx

// import { SERVICES } from "@/app/_lib/org/category/services";
// import ServiceLeavesCarousel from "@/app/_ui/carousels/ServiceLeavesCarousel";

// export default function HomePage() {
//   return (
//     <div className="space-y-12 p-6">
//       {Object.entries(SERVICES).map(([key, service]) => (
//         <ServiceLeavesCarousel
//           key={key}
//           slug={service.slug}
//           subcategories={service.subcategories}
//           heading={service.label}  // English

//         />
//       ))}

//     </div>
//   );
// }
import { SERVICES } from "@/app/_lib/org/category/services";
import { Suspense } from "react";
import { ORG_PROFILE as op } from "./_lib/org/profile";
import MultiLanguageCapacity from "./_ui/content/MultiLanguageCapacity";
import OtherLanguagesSnapshot from "./_ui/content/OtherLanguagesSnapshot";
import ServiceSection from "./_ui/services/ServicesSection";
import ServiceArea from "./contact-us/_ui/ServiceArea";

export default function HomePage() {
  return (
    <main className="space-y-10">
      {/* <div>
        HeroComponent
      </div> */}
      <div>
        <ServiceArea />
      </div>
      {op.otherLangKeys.length && (
        <div>
          <MultiLanguageCapacity
            otherLangKeys={op.otherLangKeys}
            orgNameFarsi={op.orgNameFarsi}
          />
        </div>
      )}

      <OtherLanguagesSnapshot />
      <Suspense fallback={null}>
        {Object.entries(SERVICES).map(([key, service]) => (
          <ServiceSection key={key} service={service} />
        ))}
      </Suspense>
    </main>
  );
}
