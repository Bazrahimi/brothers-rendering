import {
  LANGUAGES,
  SECONDARY_LANGUAGE_DISPLAY,
  type LanguageKey,
  type SecondaryLanguageKey,
} from "@/app/_lib/org/languages";
import { ORG_PROFILE } from "@/app/_lib/org/profile";
import { cn } from "@/app/_lib/utils/cn";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";

const isRtl = (lang: SecondaryLanguageKey) => lang === "FA" || lang === "HZ";

const accentStyle = (lang: SecondaryLanguageKey) => {
  switch (lang) {
    case "HZ":
      return "border-bg-org-primary-main/50 bg-gradient-to-br from-org-primary-dark to-org-secondary-dark";
    case "FA":
      return "border-bg-org-secondary-main/50 bg-gradient-to-br from-org-secondary-dark to-org-primary-dark";
  }
};

const accentDot = (lang: SecondaryLanguageKey) => {
  switch (lang) {
    case "HZ":
      return "bg-org-secondary-main";
    case "FA":
      return "bg-org-primary-main";
  }
};

export default function MultiLanguageCapacity() {
  const langs = ORG_PROFILE.languages as readonly LanguageKey[];

  // Secondary languages only (exclude EN)
  const secondaryLangs = langs.filter(
    (l): l is SecondaryLanguageKey => l !== "EN",
  );

  // If only English -> don't render
  if (!secondaryLangs.length) return null;

  const labels = secondaryLangs.map((l) => SECONDARY_LANGUAGE_DISPLAY[l]);
  const languageList =
    labels.length === 2 ? `${labels[0]} and ${labels[1]}` : labels[0];

  // English statement (always primary)
  const englishStatement = LANGUAGES.EN.multiculturalStatement(
    ORG_PROFILE.orgName,
  );

  return (
    <section
      className="mt-10 rounded-2xl border border-slate-200 bg-white/70 shadow-sm backdrop-blur p-6 sm:p-8"
      aria-labelledby="multi-language-capacity"
    >
      {/* Header */}
      <div className="space-y-3">
        <Header as="h3" size="sm" align="center" id="multi-language-capacity">
          Multi-language capacity
        </Header>

        <P className="text-center text-sm text-slate-600">
          <span className="font-medium text-slate-800">
            {ORG_PROFILE.orgName}
          </span>{" "}
          can also interact with clients in{" "}
          <span className="font-medium text-slate-800">{languageList}</span>.
        </P>

        <P className="text-sm text-slate-700">{englishStatement}</P>
      </div>

      {/* Secondary Language Cards */}
      <div className="mt-6 grid gap-4">
        {secondaryLangs.map((lang) => {
          const orgNameForRtl = ORG_PROFILE.orgNameFarsi || ORG_PROFILE.orgName;

          const statement =
            LANGUAGES[lang].multiculturalStatement(orgNameForRtl);

          return (
            <div
              key={lang}
              className={cn(
                "rounded-2xl border p-5 sm:p-6 shadow-sm transition-shadow hover:shadow-md",
                accentStyle(lang),
              )}
            >
              <div className="mb-3 flex items-center gap-2">
                <span
                  className={cn("h-2.5 w-2.5 rounded-full", accentDot(lang))}
                  aria-hidden
                />

                <Header as="h4" align="right" size="sm" className="text-white">
                  {SECONDARY_LANGUAGE_DISPLAY[lang]}
                </Header>
              </div>

              <P
                dir={isRtl(lang) ? "rtl" : "ltr"}
                className={cn(
                  "leading-relaxed text-gray-50",
                  isRtl(lang) && "text-right",
                )}
              >
                {statement}
              </P>
            </div>
          );
        })}
      </div>
    </section>
  );
}
