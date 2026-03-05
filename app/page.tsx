import { SERVICES_PAGE } from "@/app/_lib/org/category/services";
import { ORG_PROFILE as op } from "./_lib/org/profile";
import MultiLanguageCapacity from "./_ui/content/MultiLanguageCapacity";

import dynamic from "next/dynamic";
import ServiceSection from "./_ui/services/ServicesSection";
import ServiceArea from "./contact-us/_ui/ServiceArea";

import { Suspense } from "react";
import OtherLanguagesSnapshot from "./_ui/content/OtherLanguagesSnapshot";

import { buildMetadata, SEO_PAGES } from "./_lib/org/layoutAndSeo";
import HomeHero from "./_ui/hero/HomeHero";
import HomeHeroSkeleton from "./_ui/hero/HomeHeroSkeleton";
import ServiceSectionSkeleton from "./_ui/services/ServiceSectionSkeleton";
const ContactFormLazy = dynamic(() => import("./contact-us/_ui/ContactForm"), {
  // ssr: false,
  loading: () => <div className="max-w-lg mx-auto h-[500px]" />,
});

export const metadata = buildMetadata(SEO_PAGES.home());

export default function HomePage() {
  return (
    <main className="space-y-10">
      <Suspense fallback={<HomeHeroSkeleton />}>
        <HomeHero />
      </Suspense>

      <div>
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

      {Object.entries(SERVICES_PAGE).map(([key, service]) => (
        <Suspense key={key} fallback={<ServiceSectionSkeleton />}>
          <ServiceSection service={service} />
        </Suspense>
      ))}

      <ContactFormLazy showMotion />
    </main>
  );
}
