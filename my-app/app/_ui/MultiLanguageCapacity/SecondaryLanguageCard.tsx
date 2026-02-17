import { LANGUAGES, type SecondaryLanguageKey } from "@/app/_lib/org/languages";
import { ORG_PROFILE } from "@/app/_lib/org/profile";
import { cn } from "@/app/_lib/utils/cn";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";

const accentStyle = (lang: SecondaryLanguageKey) => {
  switch (lang) {
    case "HZ":
      return "border-bg-org-primary-main/50 bg-gradient-to-br from-org-primary-dark to-org-secondary-dark";
    case "FA":
      return "border-bg-org-secondary-main/50 bg-gradient-to-br from-org-secondary-dark to-org-primary-dark";
  }
};

export default function SecondaryLanguageCard({
  lang,
}: {
  lang: SecondaryLanguageKey;
}) {
  const orgNameForRtl = ORG_PROFILE.orgNameFarsi || ORG_PROFILE.orgName;
  const statement = LANGUAGES[lang].multiculturalStatement(orgNameForRtl);

  const nativeLabelByLang: Record<SecondaryLanguageKey, string> = {
    HZ: LANGUAGES.HZ.label.HZ,
    FA: LANGUAGES.FA.label.FA,
  };
  const nativeLabel = nativeLabelByLang[lang];

  return (
    <div
      dir="rtl"
      className={cn(
        "rounded-2xl border p-5 sm:p-6 shadow-sm transition-shadow hover:shadow-md",
        accentStyle(lang),
      )}
    >
      <div className="mb-3 flex items-center gap-2">
        <Header as="h4" align="right" className="text-white">
          {nativeLabel}
        </Header>
      </div>

      <P className="leading-relaxed text-gray-50">{statement}</P>
    </div>
  );
}
