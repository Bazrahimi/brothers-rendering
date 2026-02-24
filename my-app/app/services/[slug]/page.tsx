import { getServiceLabelBySlug } from "@/app/_lib/org/category/serviceLookup";
import { ORG_PROFILE } from "@/app/_lib/org/profile";
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

  return (
    <main className=" my-5 space-y-8">
      <Section id={slug}>
        <PageHeading heading={service.label} subHeading={service.description} />
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
            ctaKey={ORG_PROFILE.cta}
            locale="en"
            serviceLabel={service.label}
            generalEnquiry
          />
        </Suspense>
      </Section>
    </main>
  );
};

export default page;
