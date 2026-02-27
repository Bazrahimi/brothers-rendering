//app/languages/[otherLangs]/page.tsx
import { OTHER_LANGUAGES as ol } from "@/app/_lib/languages/multiculturalStatement";
import { SERVICES_PAGE } from "@/app/_lib/org/category/services";
import { ORG_PROFILE as op } from "@/app/_lib/org/profile";
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

  const otherLangKeys = op.otherLangKeys;
 if (!otherLangKeys) return notFound();



  return (
    <main className="my-5 space-y-8">
      <Section id={decoded}>
        {otherLangKeys.map((lang) => (
          <div key={lang}>
            <PageIntro
              heading={lang === "HZ" ? ol[lang].label.HZ : ol[lang].label.FA}
              subHeading={ol[lang].statement(op.orgNameFarsi)}
              isRtl
            />
          </div>
        ))}
      </Section>
      <Section>
        {Object.entries(SERVICES_PAGE).map(([key, service]) => (
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
        ctaKey={op.cta}
        locale="fa"
        serviceLabel="test"
        generalEnquiry
        
        />
      </Section>
    </main>
  );
};

export default OtherLanguagePage;
