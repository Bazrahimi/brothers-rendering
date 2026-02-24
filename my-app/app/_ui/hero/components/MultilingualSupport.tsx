import { OTHER_LANGUAGES as ol, type OtherLanguageKey } from "@/app/_lib/languages/multiculturalStatement";
import { P } from "@/app/_ui/typography/paragraph";

type Props = {
  otherLangKeys?: OtherLanguageKey[];
};

const MultilingualSupport = ({ otherLangKeys }: Props) => {
  if (!otherLangKeys?.length) return null;

  const languages = otherLangKeys
    .map((key) => ol[key]?.label[key])
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
