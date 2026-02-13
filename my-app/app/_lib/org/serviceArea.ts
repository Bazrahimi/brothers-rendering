

export const ORG_SECTORS = {
  BUILDING: {
    label: "Building and Construction",
    defaultScope: "metro",
    subSectors: {
      painting: "Painting and Decorating",
      builder: "Registered Builders",
      rendering: "Solid Plastering and Rendering",
    },
  },

  PROFESSIONAL: {
    label: "Professional",
    defaultScope: "national",
    subSectors: {
      lawyer: "Principal Lawyers",
      accountant: "Registered Tax Agent",
    },
  },

  ASSOCIATION: {
    label: "Association",
    defaultScope: "state",
    subSectors: {
      ngo: "Non profit organisation",
    },
  },
} as const;

export type OrgSectorKey = keyof typeof ORG_SECTORS;
export type CoverageScope = (typeof ORG_SECTORS)[OrgSectorKey]["defaultScope"];

export type ServiceArea = {
  scope: CoverageScope;          // "metro" | "state" | "national"
  primaryRegion: string;         // "South East Melbourne"
  state: string;                 // "VIC"
  country: string;               // "Australia"
  featuredSuburbs?: string[];    // for SEO pages/sections
  note?: string;                 // short marketing sentence
};

export const SERVICE_AREA: ServiceArea = {
  scope: ORG_SECTORS.BUILDING.defaultScope, // or derive from ORG_PROFILE.orgSector
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
