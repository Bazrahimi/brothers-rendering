import {
  LANGUAGES,
  type LanguageKey,
  type SecondaryLanguageKey,
} from "@/app/_lib/org/languages";
import { ORG_PROFILE } from "@/app/_lib/org/profile";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";

import SecondaryLanguageCard from "../MultiLanguageCapacity/SecondaryLanguageCard";

export default function MultiLanguageCapacity() {
  const langs = ORG_PROFILE.languages as readonly LanguageKey[];

  const secondaryLangs = langs.filter(
    (l): l is SecondaryLanguageKey => l !== "EN",
  );

  if (!secondaryLangs.length) return null;

  const labels = secondaryLangs.map((l) => LANGUAGES[l].label.EN);
  const languageList =
    labels.length === 2 ? `${labels[0]} and ${labels[1]}` : labels[0];

  const englishStatement = LANGUAGES.EN.multiculturalStatement(
    ORG_PROFILE.orgName,
  );

  return (
    <section
      className="mt-10 rounded-2xl border border-slate-200 bg-white/70 shadow-sm backdrop-blur p-6 sm:p-8"
      aria-labelledby="multi-language-capacity"
    >
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

      <div className="mt-6 grid gap-4">
        {secondaryLangs.map((lang) => (
          <SecondaryLanguageCard key={lang} lang={lang} />
        ))}
      </div>
    </section>
  );
}
