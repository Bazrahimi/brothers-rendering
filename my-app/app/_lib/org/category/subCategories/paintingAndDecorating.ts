import type { ServiceGroup } from "../definitions";

export const paintingAndDecorating = {
  residential: {
    newBuild: {
      label: "Residential Painting",
      items: [
        "New Houses",
        "Duplex and Multiple units",
        "Extensions",
        "Plasterboard and Villaboards",
      ],
    },
    renovations: {
      label: "Renovations & Specialized Coatings",
      items: [
        "Garage Extensions",
        "Kitchen & Bathroom Renovations",
        "Deck Staining & Sealing",
        "Driveway and Concrete Sealers",
      ],
    },
  },
  commercial: {
    label: "Commercial Painting",
    items: [
      "Office Fit-outs",
      "Retail Spaces",
      "Warehouse Coatings",
      "Body Corporate Maintenance",
    ],
  },
} as const satisfies ServiceGroup;
