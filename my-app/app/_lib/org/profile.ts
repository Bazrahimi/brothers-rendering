//app/_lib/org/org-profile.ts
import type { LanguageKey } from "./languages";
import { ORG_INDUSTRY_SECTORS } from "./serviceArea";
import type { CtaLabel } from "./definitions";

const ORG_DOMAIN = "canconstruction.com.au" as const;
const orgName = "FairPoint Lawyers ";

export const ORG_PROFILE = {
  orgName: orgName,
  orgNameFarsi: "شرکت ساختمانی کن",
  industry: ORG_INDUSTRY_SECTORS.BUILDING.industry,
  subSector: ORG_INDUSTRY_SECTORS.BUILDING.Sectors.painting,

  description:
    "Commercial and Residential Painting work through south easter suburbs",
  languages: ["EN", "HZ", "FA"] as const satisfies readonly LanguageKey[],

  domain: ORG_DOMAIN,

  email: "info@canconstruction.com.au",
  website: `https://${ORG_DOMAIN}`,
  phone: "+61 2343 3533",

  address: "22  Faldo Place Cranbourne North VIC 3977",
  abn: "37 649 729 395",

  logo: "/images/logo-transparent-hd.png",
  logoFullUrl: "",
  cta: "Free Quote" as CtaLabel,
} as const;


