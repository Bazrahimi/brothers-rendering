import { ImageUrl, ServiceGroup } from "../definitions";

export const paintingAndDecorating = {
  residential: {
    newBuild: {
      label: "New Build Residential Painting",
      imageUrl: ImageUrl,
      summary:
        "Interior and exterior painting for new homes and multi-unit builds.",
      items: [
        "New Houses",
        "Duplex and Multiple units",
        "Extensions",
        "Plasterboard and Villaboards",
      ],
    },
    renovations: {
      label: "Renovations & Specialized Coatings",
      imageUrl: ImageUrl,
      summary: "Interior and exterior painting renovation and extensions",
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
    imageUrl: ImageUrl,
    summary: "Durable coatings and flexible scheduling to minimise downtime.",
    items: [
      "Office Fit-outs",
      "Retail Spaces",
      "Warehouse Coatings",
      "Body Corporate Maintenance",
    ],
  },
} as const satisfies ServiceGroup;
