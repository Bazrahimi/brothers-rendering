import { SECONDARY_LANGUAGES as sl } from "@/app/_lib/languages/multiculturalStatement";
import { ORG_PROFILE } from "@/app/_lib/org/profile";
import { PublicRoutes } from "@/app/_lib/routes/publicRoutes";
import { cn } from "@/app/_lib/utils/cn";
import Link from "next/link";

const SecondaryLanguages = ({ className }: { className: string }) => {
  const langs = ORG_PROFILE.SecondaryLanguages;

  const hasHz = langs.includes("HZ");
  const hasFa = langs.includes("FA");

  // if neither exists -> render nothing
  if (!hasHz && !hasFa) return null;

  const labels: string[] = [];

  if (hasHz) labels.push(sl.HZ.label.HZ);
  if (hasFa) labels.push(sl.FA.label.FA);

  return (
    <Link
      href={PublicRoutes.secondaryLanguages(labels.join("-"))}
      className={cn(className)}
    >
      {labels.join(" - ")}
    </Link>
  );
};

export default SecondaryLanguages;
