import { OTHER_LANGUAGES as ol } from "@/app/_lib/languages/multiculturalStatement";
import { ORG_PROFILE } from "@/app/_lib/org/profile";
import { PublicRoutes } from "@/app/_lib/routes/publicRoutes";
import { cn } from "@/app/_lib/utils/cn";
import Link from "next/link";

const OtherLanguages = ({ className }: { className: string }) => {
  const langs = ORG_PROFILE.otherLangKeys;

  const hasHz = langs.includes("HZ");
  const hasFa = langs.includes("FA");

  // if neither exists -> render nothing
  if (!hasHz && !hasFa) return null;

  const labels: string[] = [];

  if (hasHz) labels.push(ol.HZ.label.HZ);
  if (hasFa) labels.push(ol.FA.label.FA);

  return (
    <Link
      href={PublicRoutes.otherLanguages(labels.join("-"))}
      className={cn(className)}
    >
      {labels.join(" - ")}
    </Link>
  );
};

export default OtherLanguages;
