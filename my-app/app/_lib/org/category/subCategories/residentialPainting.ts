import { ImageUrl, type ServiceSubCategory } from "../definitions";

export const residentialPaintingAndDecorating = {
  newBuild: {
    label: "New Build",
    image: { kind: "url", src: ImageUrl },
    summary:
      "Interior and exterior painting for new homes and multi-unit builds.",
    items: [
      "New Houses",
      "Duplex and Multiple units",
      "Extensions",
      "Plasterboard and Villaboards",
    ],
  },
  renovationAndExtensions: {
    label: "Renovation And Extensions",
    image: { kind: "svg", text: "Renovations & Specialized Coatings" },
    summary: "Interior and exterior painting renovation and extensions",
    items: [
      "Garage Extensions",
      "Kitchen & Bathroom Renovations",
      "Deck Staining & Sealing",
      "Driveway and Concrete Sealers",
    ],
  },
} as const satisfies ServiceSubCategory;
