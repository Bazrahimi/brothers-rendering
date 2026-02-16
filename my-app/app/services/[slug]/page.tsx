import { getServiceCategoryBySlug } from "@/app/_lib/org/category/helper";
import ServiceCTA from "@/app/_ui/content/ServiceCTA";
import PageIntro from "@/app/_ui/layout/PageIntro";
import Section from "@/app/_ui/layout/Section";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import ServiceDetails from "./_ui/ServiceDetails";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const found = getServiceCategoryBySlug(slug);
  if (!found) {
    notFound();
  }
  const { service } = found;

  return (
    <main className=" my-5 space-y-8">
      <Section id={slug}>
        <PageIntro heading={service.category} subHeading={service.shortDesc} />
      </Section>

      {/* Subcategories (nested object) */}
      {service.subcategories && (
        <Section>
          <ServiceDetails group={service.subcategories} />
        </Section>
      )}

      <Section>
        <Suspense fallback={null}>
          <ServiceCTA serviceCategory={service.category} />
        </Suspense>
      </Section>
    </main>
  );
};

export default page;
