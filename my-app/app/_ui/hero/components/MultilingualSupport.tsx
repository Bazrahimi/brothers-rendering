import { OTHER_LANGUAGES as ol, type OtherLanguageKey } from "@/app/_lib/languages/multiculturalStatement";
import { P } from "@/app/_ui/typography/paragraph";

type Props = {
  otherLangKeys?: OtherLanguageKey[];
};

const MultilingualSupport = ({ otherLangKeys }: Props) => {
  if (!otherLangKeys?.length) return null;

  const getLanguageLabel = (key: OtherLanguageKey) =>
    key === "HZ" ? ol.HZ.label.HZ : ol.FA.label.FA;

  const languages = otherLangKeys
    .map(getLanguageLabel)
    .filter(Boolean)
    .join(" • ");

  return (
    <P className="text-sm text-slate-600">
      Multilingual support available:{" "}
      <span className="font-semibold text-slate-800">
        {"English"}
        {languages ? ` • ${languages}` : ""}
      </span>
    </P>
  );
};

export default MultilingualSupport;
