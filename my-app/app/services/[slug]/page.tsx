import { getServiceLabelBySlug } from "@/app/_lib/org/helper";
import { ORG_PROFILE } from "@/app/_lib/org/profile";
import { CTA_MAP } from "@/app/_lib/org/sociaMediaLinks";
import ServiceCTA from "@/app/_ui/content/ServiceCTA";
import PageHeading from "@/app/_ui/layout/PageIntro";
import Section from "@/app/_ui/layout/Section";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import ServiceDetails from "./_ui/ServiceDetails";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const found = getServiceLabelBySlug(slug);

  if (!found) {
    notFound();
  }
  const { service } = found;
  const activeCta = CTA_MAP[ORG_PROFILE.cta];

  return (
    <main className=" my-5 space-y-8">
      <Section id={slug}>
        <PageHeading heading={service.label} subHeading={service.shortDesc} />
      </Section>

      {/* Subcategories (nested object) */}
      {service.subcategories && (
        <Section>
          <ServiceDetails subcategories={service.subcategories} />
        </Section>
      )}

      <Section>
        <Suspense fallback={null}>
          <ServiceCTA
            headingLabel={activeCta.label}
            serviceLabel={service.label}
            message={activeCta.message}
            generalEnquiry
          />
        </Suspense>
      </Section>
    </main>
  );
};

export default page;
