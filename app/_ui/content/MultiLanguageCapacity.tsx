// import {
//   LANGUAGES,
//   type LanguageKey,
//   type SecondaryLanguageKey,
// } from "@/app/_lib/org/languages";
import { ORG_PROFILE } from "@/app/_lib/org/profile";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";

import {
  OTHER_LANGUAGES,
  OtherLanguageKey,
  PRIMARY_LANGUAGE,
} from "@/app/_lib/languages/multiculturalStatement";
import SecondaryLanguageCard from "../MultiLanguageCapacity/OtherLanguageCard";

type Props = {
  otherLangKeys: OtherLanguageKey[];
  orgNameFarsi: string;
};
export default function MultiLanguageCapacity({ otherLangKeys, orgNameFarsi }: Props) {

  const labels = otherLangKeys.map((l) => OTHER_LANGUAGES[l].label.EN);

  const languageList =
    labels.length > 1
      ? `${labels.slice(0, -1).join(", ")} and ${labels.slice(-1)}`
      : labels[0] || "";

  const englishStatement = PRIMARY_LANGUAGE.statement(ORG_PROFILE.orgName);

  return (
    <section
      className="mt-10 rounded-2xl border border-slate-200 bg-white/70 shadow-sm backdrop-blur p-6 sm:p-8"
      aria-labelledby="multi-language-capacity"
    >
      <div className="space-y-3">
        <Header as="h3" size="sm" id="multi-language-capacity">
          Multi-language capacity
        </Header>

        <P className="text-center text-sm text-slate-600">
          <span className="font-medium text-slate-800">
            {ORG_PROFILE.orgName}
          </span>{" "}
          can also interact with clients in{" "}
          <span className="font-medium text-slate-800">{languageList}</span>.
        </P>

        {englishStatement.map((t, i) => (
          <P key={i} className=" text-gray-700 indent-6">
            {t}
          </P>
        ))}
        {/* <P>{englishStatement}</P> */}
      </div>

      <div className="mt-6 grid gap-4">
        {otherLangKeys.map((otherLangKey) => (
          <SecondaryLanguageCard key={otherLangKey} otherLangKey={otherLangKey} orgNameFarsi={orgNameFarsi} />
        ))}
      </div>

      <div>
      
      </div>

    </section>
  );
}
