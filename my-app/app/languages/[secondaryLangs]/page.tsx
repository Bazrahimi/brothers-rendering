//app/languages/[secondaryLangs]/page.tsx
import { SECONDARY_LANGUAGES as sl } from "@/app/_lib/languages/multiculturalStatement";
import { ORG_PROFILE } from "@/app/_lib/org/profile";
import PageIntro from "@/app/_ui/layout/PageIntro";
import Section from "@/app/_ui/layout/Section";

const OtherLanguagePage = async ({
  params,
}: {
  params: Promise<{ secondaryLangs: string }>;
}) => {
  const { secondaryLangs } = await params;
  const decoded = decodeURIComponent(secondaryLangs);
  const hyphenIndex = decoded.indexOf("-");
  const firstLang =
    hyphenIndex === -1 ? decoded : decoded.slice(0, hyphenIndex);
  const secondLang =
    hyphenIndex === -1 || hyphenIndex === decoded.length - 1
      ? undefined
      : decoded.slice(hyphenIndex + 1);

  const langs = ORG_PROFILE.secondaryLanguages;
  const selectedLabels = [firstLang, secondLang].filter(
    (lang): lang is string => Boolean(lang),
  );
  const selectedLangs = langs.filter((lang) =>
    selectedLabels.includes(
      lang === "HZ" ? sl[lang].label.HZ : sl[lang].label.FA,
    ),
  );

  return (
    <main className="my-5 space-y-8">
      <Section id={decoded}>
        {selectedLangs.map((lang) => (
          <div key={lang}>
            <PageIntro
              heading={lang === "HZ" ? sl[lang].label.HZ : sl[lang].label.FA}
              subHeading={sl[lang].statement(ORG_PROFILE.orgNameFarsi)}
              isRtl
            />
          </div>
        ))}
      </Section>
    </main>
  );
};

export default OtherLanguagePage;
