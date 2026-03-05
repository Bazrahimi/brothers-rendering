

export const ORG_INDUSTRY_SECTORS = {
  BUILDING: {
    industry: "Building and Construction",
    defaultScope: "metro",
    Sectors: {
      painting: "Painting and Decorating",
      builder: "Registered Builders",
      rendering: "Solid Plastering and Rendering",
    },
  },

  PROFESSIONAL: {
    industry: "Professional",
    defaultScope: "national",
    sectors: {
      lawyer: "Principal Lawyers",
      accountant: "Registered Tax Agent",
    },
  },

  ASSOCIATION: {
    industry: "Association",
    defaultScope: "state",
    sectors: {
      ngo: "Non profit organisation",
    },
  },
  TECHNOLOGY: {
    industry: "technology",
    defaultScope: "state",
    sectors: {
      web_development: "Web Application | Software",
    },
  }
} as const;

export type OrgIndustrySectorKey = keyof typeof ORG_INDUSTRY_SECTORS;
export type CoverageScope = (typeof ORG_INDUSTRY_SECTORS)[OrgIndustrySectorKey]["defaultScope"];

export type ServiceArea = {
  scope: CoverageScope;          // "metro" | "state" | "national"
  primaryRegion: string;         // "South East Melbourne"
  state: string;                 // "VIC"
  country: string;               // "Australia"
  featuredSuburbs?: string[];    // for SEO pages/sections
  note?: string;                 // short marketing sentence
};

export const SERVICE_AREA: ServiceArea = {
  scope: ORG_INDUSTRY_SECTORS.BUILDING.defaultScope, // or derive from ORG_PROFILE.orgSector
  primaryRegion: "South East Melbourne",
  state: "VIC",
  country: "Australia",
  featuredSuburbs: [
    "Cranbourne",
    "Cranbourne North",
    "Narre Warren",
    "Berwick",
    "Dandenong",
    "Noble Park",
    "Springvale",
    "Keysborough",
    "Pakenham",
    "Officer",
  ],
  note:
    "We provide commercial and residential painting services across Melbourne, with a focus on the South Eastern suburbs.",
};


export const scopeLabel = (scope: string) => {
  switch (scope) {
    case "metro":
      return "Melbourne Metro";
    case "state":
      return "Victoria-Wide";
    case "national":
      return "Australia-Wide";
    default:
      return scope;
  }
};