//app/_lib/org/org-profile.ts
import type { LanguageKey } from "./languages";
import { ORG_SECTORS } from "./serviceArea";

const ORG_DOMAIN = "canconstruction.com.au" as const;
const orgName = "Can Construction Pty Ltd";

export const ORG_PROFILE = {
  orgName: orgName,
  orgNameFarsi: "شرکت ساختمانی کن",
  sector: ORG_SECTORS.BUILDING.label,
  subSector: ORG_SECTORS.BUILDING.subSectors.painting,

  description:
    "Commercial and Residential Painting work through south easter suburbs",
  languages: ["EN", "FA", "HZ"] as const satisfies readonly LanguageKey[],

  domain: ORG_DOMAIN,

  email: "info@canconstruction.com.au",
  website: `https://${ORG_DOMAIN}`,
  phone: "+61 470 292 364",

  address: "22  Faldo Place Cranbourne North VIC 3977",
  abn: "37 649 729 395",

  logo: "/images/logo-transparent-hd.png",
  logoFullUrl: "",
} as const;

export const ORG_SOCIAL_MEDIA = {
  facebook: "",
  instagram: "",
  tiktok: "", // leave empty or undefined if not used
} as const;
