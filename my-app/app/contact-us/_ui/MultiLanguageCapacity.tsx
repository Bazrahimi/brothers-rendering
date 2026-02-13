import { LANGUAGES, type LanguageKey } from "@/app/_lib/org/languages";
import { ORG_PROFILE } from "@/app/_lib/org/profile";
import { P } from "@/app/_ui/typography/paragraph";
import { cn } from "@/app/_lib/utils/cn";

const isRtl = (lang: LanguageKey) => lang === "FA" || lang === "HZ";

const ORDER: LanguageKey[] = ["EN", "HZ", "FA"];

const cardStyle = (lang: LanguageKey) => {
  switch (lang) {
    case "EN":
      return "bg-blue-300 border-blue-500";
    case "HZ":
      return "bg-gray-50 border-gray-200";
    case "FA":
      return "bg-yellow-200 border-yellow-500";
    default:
      return "bg-white border-gray-200";
  }
};

export default function MultiLanguageCapacity() {
  const langs = ORG_PROFILE.languages as readonly LanguageKey[];

  const hasNonEnglish = langs.some((l) => l !== "EN");
  if (!hasNonEnglish) return null;

  const orderedLangs = ORDER.filter((l) => langs.includes(l));

  return (
    <section className="mt-10 rounded-2xl border border-white/70 bg-white/80 shadow-sm backdrop-blur p-6 sm:p-8 space-y-6">
      {orderedLangs.map((lang) => {
        const name =
          lang === "EN"
            ? ORG_PROFILE.orgName
            : ORG_PROFILE.orgNameFarsi || ORG_PROFILE.orgName;

        const statement =
          LANGUAGES[lang].multiculturalStatement(name);

        return (
          <div
            key={lang}
            className={cn(
              "rounded-2xl border p-6 shadow-sm transition-all duration-300",
              "hover:shadow-md",
              cardStyle(lang),
            )}
          >
            <div className="mb-3 flex items-center justify-between">
              <h4 className="text-sm font-semibold text-gray-800">
                {LANGUAGES[lang].label}
              </h4>

              <span className="text-xs font-medium text-gray-500">
                {lang}
              </span>
            </div>

            <P
              dir={isRtl(lang) ? "rtl" : "ltr"}
              className={cn(
                "text-sm leading-relaxed text-gray-700",
                isRtl(lang) && "text-right",
              )}
            >
              {statement}
            </P>
          </div>
        );
      })}
    </section>
  );
}
