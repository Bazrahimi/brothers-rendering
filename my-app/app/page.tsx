import { SERVICES_PAGE } from "@/app/_lib/org/category/services";
import { ORG_PROFILE as op } from "./_lib/org/profile";
import MultiLanguageCapacity from "./_ui/content/MultiLanguageCapacity";

import ServiceSection from "./_ui/services/ServicesSection";
import ServiceArea from "./contact-us/_ui/ServiceArea";

import { Suspense } from "react";
import OtherLanguagesSnapshot from "./_ui/content/OtherLanguagesSnapshot";

import { buildMetadata, seoPage } from "./_lib/org/layoutAndSeo";
import HomeHero from "./_ui/hero/HomeHero";
import ContactForm from "./contact-us/_ui/ContactForm";

export const metadata = buildMetadata(
  seoPage({
    canonicalPathname: "/",
    title: op.orgName,
    description: op.description,
    keywords: [
      op.orgName,
      "Rendering",
      "Plastering",
      "Cladding",
      "Melbourne",
      "South East Melbourne",
    ],
    // ogImagePath: "/images/og-home.png",
  }),
);

export default function HomePage() {
  return (
    <main className="space-y-10">
      <HomeHero />
      {/* <div>
        <ServiceArea />
      </div>
      {op.otherLangKeys.length ? (
        <div>
          <MultiLanguageCapacity
            otherLangKeys={op.otherLangKeys}
            orgNameFarsi={op.orgNameFarsi}
          />
          <OtherLanguagesSnapshot />
        </div>
      ) : null}

      <Suspense fallback={null}>
        {Object.entries(SERVICES_PAGE).map(([key, service]) => (
          <ServiceSection key={key} service={service} />
        ))}
      </Suspense>

      <Suspense>
        <ContactForm showMotion />
      </Suspense> */}
    </main>
  );
}
