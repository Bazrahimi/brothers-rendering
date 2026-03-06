//app/_lib/org/org-profile.ts

import { CtaKey } from "../content/cta";
import { OtherLanguageKey } from "../languages/multiculturalStatement";
import { ORG_INDUSTRY_SECTORS } from "./serviceArea";

const ORG_DOMAIN = "brothersrendering.com.au" as const;
const orgName = "Brothers Rendering Services Pty Ltd";

export const getBaseUrl = (): string => {
  if (process.env.NODE_ENV === "development") return "http://localhost:3000";
  return `https://${ORG_DOMAIN}`;
};

export const ORG_PROFILE = {
  orgName: orgName,
  orgNameFarsi: "",
  industry: ORG_INDUSTRY_SECTORS.BUILDING.industry,
  subSector: ORG_INDUSTRY_SECTORS.BUILDING.Sectors.rendering,
  description:
    "Residential and commercial rendering and cladding in the south eastern suburbs of Melbourne",
  // languages: ["EN", "HZ", "FA"] as const satisfies readonly LanguageKey[],
  otherLangKeys: [] as OtherLanguageKey[],
  domain: ORG_DOMAIN,
  email: "info@canconstruction.com.au",
  phone: "+61 420 910 786",
  address: "35 Westpool Dr, Hallam VIC 3803",
  abn: "24 612 814 294",
  cta: "freeQuote" as CtaKey,
  primaryColor: "#030501",
  secondaryColor: "#1ba174",
} as const;
