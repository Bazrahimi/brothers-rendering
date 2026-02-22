// import { LANGUAGES, type OtherLanguageKey } from "@/app/_lib/org/languages";
import {
  OTHER_LANGUAGES,
  OtherLanguageKey,
} from "@/app/_lib/languages/multiculturalStatement";
import { cn } from "@/app/_lib/utils/cn";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";

const accentStyle = (lang: OtherLanguageKey) => {
  switch (lang) {
    case "HZ":
      return "border-bg-org-primary-main/50 bg-gradient-to-br from-org-primary-dark to-org-secondary-dark";
    case "FA":
      return "border-bg-org-secondary-main/50 bg-gradient-to-br from-org-secondary-dark to-org-primary-dark";
  }
};

export default function SecondaryLanguageCard({
  otherLangKey,
  orgNameFarsi,
}: {
  otherLangKey: OtherLanguageKey;
  orgNameFarsi: string;
}) {
  const statement = OTHER_LANGUAGES[otherLangKey].statement(orgNameFarsi);

  const nativeLabelByLang: Record<OtherLanguageKey, string> = {
    HZ: OTHER_LANGUAGES.HZ.label.HZ,
    FA: OTHER_LANGUAGES.FA.label.FA,
  };
  const nativeLabel = nativeLabelByLang[otherLangKey];

  return (
    <div
      dir="rtl"
      className={cn(
        "rounded-2xl border p-5 sm:p-6 shadow-sm transition-shadow hover:shadow-md",
        accentStyle(otherLangKey),
      )}
    >
      <div className="mb-3 flex items-center gap-2">
        <Header as="h4" align="right" className="text-white">
          {nativeLabel}
        </Header>
      </div>

      {/* <P className="leading-relaxed text-gray-50">{statement}</P> */}
      {statement.map((t, i) => (
        <P key={i} className="text-gray-50 pr-4">
          {t}
        </P>
      ))}
    </div>
  );
}
