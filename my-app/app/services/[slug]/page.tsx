import { TextSection } from "@/app/_lib/org/orgPages/aboutUs";
import { getServiceCategoryBySlug } from "@/app/_lib/org/services/helper";
import { cn } from "@/app/_lib/utils/cn";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";
import AboutIntroduction from "@/app/about-us/_ui/AboutIntroduction";
import { notFound } from "next/navigation";

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
    <main className="my-10 space-y-8">
      <SectionWrapper>
        <AboutIntroduction section={introSection} />
      </SectionWrapper>

      {/* Subcategories (nested object) */}
      {service.subcategories && (
        <section className="space-y-6">
          <Header as="h2" size="sm">
            Service details
          </Header>

          {Object.entries(service.subcategories).map(
            ([groupKey, groupValue]) => {
              // groupValue might be nested deeper (like residential.newBuild etc.)
              // We render it generically.
              return (
                <div
                  key={groupKey}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  {/* If this level has a label */}
                  {"label" in (groupValue as any) && (
                    <Header as="h3" size="xs">
                      {(groupValue as any).label}
                    </Header>
                  )}

                  {/* Render children recursively-ish (simple) */}
                  <div className="mt-3 space-y-4">
                    {Object.entries(groupValue as Record<string, any>).map(
                      ([k, v]) => {
                        if (k === "label") return null;

                        // If v has { label, type: [] }
                        if (v && typeof v === "object" && "type" in v) {
                          return (
                            <div key={k}>
                              <P className="font-medium text-slate-800">
                                {v.label ?? k}
                              </P>
                              {Array.isArray(v.type) && v.type.length ? (
                                <ul className="mt-2 list-disc pl-5 text-slate-700">
                                  {v.type.map((item: string) => (
                                    <li key={item}>{item}</li>
                                  ))}
                                </ul>
                              ) : null}
                            </div>
                          );
                        }

                        // If v is already a { type: [] } array-ish
                        if (Array.isArray(v)) {
                          return (
                            <div key={k}>
                              <P className="font-medium text-slate-800">{k}</P>
                              <ul className="mt-2 list-disc pl-5 text-slate-700">
                                {v.map((item: string) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          );
                        }

                        // Otherwise, skip unknown shapes
                        return null;
                      },
                    )}
                  </div>
                </div>
              );
            },
          )}
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
