import { getServiceCategoryBySlug } from "@/app/_lib/org/category/helper";
import { TextSection } from "@/app/_lib/org/orgPages/aboutUs";
import { cn } from "@/app/_lib/utils/cn";
import AboutIntroduction from "@/app/about-us/_ui/AboutIntroduction";
import { notFound } from "next/navigation";
import ServiceDetails from "./_ui/ServiceDetails";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const found = getServiceCategoryBySlug(slug);
  if (!found) {
    notFound();
  }
  const { service } = found;

  const introSection = {
    id: slug,
    title: service.category,
    items: service.shortDesc,
  } satisfies TextSection;

  return (
    <main className=" my-5 space-y-8">
      <SectionWrapper>
        <AboutIntroduction section={introSection} />
      </SectionWrapper>

      {/* Subcategories (nested object) */}
      {service.subcategories && (
        <section>
          <ServiceDetails group={service.subcategories} />
        </section>
      )}
    </main>
  );
};

export default page;

const SectionWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={cn(
        "rounded-b-3xl border border-slate-200 bg-gray-50   shadow-sm backdrop-blur p-6 sm:p-8",
        className,
      )}
    >
      {children}
    </section>
  );
};
