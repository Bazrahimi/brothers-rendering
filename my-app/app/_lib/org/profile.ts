//app/_lib/org/org-profile.ts

import { CtaKey } from "../content/cta";
import { OtherLanguageKey } from "../languages/multiculturalStatement";
import { LeafImage } from "./definitions";
import { ORG_INDUSTRY_SECTORS } from "./serviceArea";

const ORG_DOMAIN = "brothersrendering.com.au" as const;
const orgName = "Brothers Rendering Services Pty Ltd";

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
  website: `https://${ORG_DOMAIN}`,
  phone: "+61 2343 3222",
  address: "22  Faldo Place Cranbourne North VIC 3977",
  abn: "37 649 729 395",
  logo: "/images/logo-transparent-hd.png",
  logoFullUrl: "",
  heroImgUrl: { kind: "url", src: 'business-f/building/brothers-rendering/brother-render-hero-image_klfiqy.png' } as LeafImage,
  cta: "freeQuote" as CtaKey,
} as const;
