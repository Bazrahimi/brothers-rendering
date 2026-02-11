//app/_lib/org/org-profile.ts
const ORG_DOMAIN = "canconstruction.com.au" as const;
const orgName = "MGR BUILDING GROUP";

export const ORG_PROFILE = {
  orgName: orgName,
  orgNameFarsi: "",
  description:
    orgName +
    " Commercial and Residential Painting work through south easter suburbs",

  domain: ORG_DOMAIN,

  email: "canconstruction12@gmail.com",
  website: `https://${ORG_DOMAIN}`,
  phone: "+61 404 148 009",

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


