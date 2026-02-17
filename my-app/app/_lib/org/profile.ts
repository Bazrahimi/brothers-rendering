//app/_lib/org/org-profile.ts
import type { LanguageKey } from "./languages";
import { ORG_INDUSTRY_SECTORS } from "./serviceArea";

const ORG_DOMAIN = "canconstruction.com.au" as const;
const orgName = "14 Star Gems ";

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

export const ORG_SOCIAL_MEDIA = {
  facebook: "",
  instagram: "",
  tiktok: "", // leave empty or undefined if not used
} as const;

type CtaLabel = "Free Quote" | "Free Consultation";

export const CTA = {
  freeQuote: {
    label: "Free Quote" as CtaLabel,
    message: "Hi, I’d like a free quote for: ",
  },
  freeConsultation: {
    label: "Free Consultation" as CtaLabel,
    message: "Hi, I’d like a free consultation for: ",
  },
};

export const CTA_MAP: Record<CtaLabel, (typeof CTA)[keyof typeof CTA]> = {
  "Free Quote": CTA.freeQuote,
  "Free Consultation": CTA.freeConsultation,
};
