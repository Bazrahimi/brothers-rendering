//app/_lib/org/org-profile.ts

import { CtaKey } from "../content/cta";
import { OtherLanguageKey } from "../languages/multiculturalStatement";
import { LeafImage } from "./definitions";
import { ORG_INDUSTRY_SECTORS } from "./serviceArea";

const ORG_DOMAIN = "mgrbuildinggroup.com.au" as const;
const orgName = "Clyde Painting Services ";

export const ORG_PROFILE = {
  orgName: orgName,
  orgNameFarsi: "شرکت موسوی کن",
  industry: ORG_INDUSTRY_SECTORS.BUILDING.industry,
  subSector: ORG_INDUSTRY_SECTORS.BUILDING.Sectors.painting,
  description:
    "Commercial and Residential Painting work through south easter suburbs",
  // languages: ["EN", "HZ", "FA"] as const satisfies readonly LanguageKey[],
  otherLangKeys: ["HZ", "FA"] as OtherLanguageKey[],
  domain: ORG_DOMAIN,
  email: "info@canconstruction.com.au",
  website: `https://${ORG_DOMAIN}`,
  phone: "+61 2343 3222",
  address: "22  Faldo Place Cranbourne North VIC 3977",
  abn: "37 649 729 395",
  logo: "/images/logo-transparent-hd.png",
  logoFullUrl: "",
  heroImgUrl: { kind: "svg", text: orgName } as LeafImage,
  cta: "freeQuote" as CtaKey,
} as const;
