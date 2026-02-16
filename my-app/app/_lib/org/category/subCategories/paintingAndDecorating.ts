import { cldCardHeroAuto } from "@/app/_lib/cloudinary/cloudinary";
import { ImageUrl, ServiceGroup } from "../definitions";

export const paintingAndDecorating = {
  residential_painting_work: {
    newBuild: {
      label: "New Build Residential Painting",
      image: {kind: "url", src: ImageUrl},
      summary:
        "Interior and exterior painting for new homes and multi-unit builds.",
      items: [
        "New Houses",
        "Duplex and Multiple units",
        "Extensions",
        "Plasterboard and Villaboards",
      ],
    },
    renovations_painting_work: {
      label: "Renovations & Specialized Coatings",
       image: { kind: "svg", text: "Renovations & Specialized Coatings" },
      summary: "Interior and exterior painting renovation and extensions",
      items: [
        "Garage Extensions",
        "Kitchen & Bathroom Renovations",
        "Deck Staining & Sealing",
        "Driveway and Concrete Sealers",
      ],
    },
  },
  commercial_painting_work: {
    label: "Commercial Painting",
      image: {kind: "url", src: ImageUrl},
    summary: "Durable coatings and flexible scheduling to minimise downtime.",
    items: [
      "Office Fit-outs",
      "Retail Spaces",
      "Warehouse Coatings",
      "Body Corporate Maintenance",
    ],
  },
} as const satisfies ServiceGroup;
