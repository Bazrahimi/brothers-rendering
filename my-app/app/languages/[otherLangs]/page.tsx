//app/languages/[otherLangs]/page.tsx
import { OTHER_LANGUAGES as ol } from "@/app/_lib/languages/multiculturalStatement";
import { SERVICES } from "@/app/_lib/org/category/services";
import { ORG_PROFILE } from "@/app/_lib/org/profile";
import PageIntro from "@/app/_ui/layout/PageIntro";
import Section from "@/app/_ui/layout/Section";
import { notFound } from "next/navigation";
import SubcategoriesOtherLangs from "./_ui/SubcategoriesOtherLangs";
import ServiceCTA from "@/app/_ui/content/ServiceCTA";

const OtherLanguagePage = async ({
  params,
}: {
  params: Promise<{ otherLangs: string }>;
}) => {
  const { otherLangs } = await params;

  const decoded = decodeURIComponent(otherLangs);
  const dashIndex = decoded.indexOf("-");
  const first = dashIndex === -1 ? decoded : decoded.slice(0, dashIndex);
  const second = dashIndex === -1 ? "" : decoded.slice(dashIndex + 1);

  const secondaryLanguageKeys = ORG_PROFILE.otherLangKeys;
  if (secondaryLanguageKeys.length === 0) return notFound();
  const selectedLangs = secondaryLanguageKeys.filter((lang) => {
    const labels = ol[lang].label;
    const hzLabel = "HZ" in labels ? labels.HZ : "";
    const faLabel = "FA" in labels ? labels.FA : "";

    return (
      lang === first ||
      lang === second ||
      hzLabel === first ||
      hzLabel === second ||
      faLabel === first ||
      faLabel === second
    );
  });

  return (
    <main className="my-5 space-y-8">
      <Section id={decoded}>
        {selectedLangs.map((lang) => (
          <div key={lang}>
            <PageIntro
              heading={lang === "HZ" ? ol[lang].label.HZ : ol[lang].label.FA}
              subHeading={ol[lang].statement(ORG_PROFILE.orgNameFarsi)}
              isRtl
            />
          </div>
        ))}
      </Section>
      <Section>
        {Object.entries(SERVICES).map(([key, service]) => (
          <div key={key}>
            <SubcategoriesOtherLangs
              heading={service.labelFarsi}
              subcategories={service.subcategories}
            />
          </div>
        ))}
      </Section>

      <Section>
        <ServiceCTA 
        ctaKey={ORG_PROFILE.cta}
        locale="fa"
        serviceLabel="test"
        generalEnquiry
        
        />
      </Section>
    </main>
  );
};

export default OtherLanguagePage;
