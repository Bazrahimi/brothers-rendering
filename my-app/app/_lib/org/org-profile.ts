const ORG_DOMAIN = "canconstruction.com.au" as const;
const orgName = "Can Construction Pty Ltd";

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

  address: "2 Faldo Place Cranbourne North VIC 3977",
  abn: "37 649 729 395",

  logo: "/images/logo-transparent-hd.png",
  logoFullUrl: "",
} as const;


