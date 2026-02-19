import type { ServiceSubCategory } from "../../definitions";
import { ImageUrl } from "../../helper";

export const commercialPaintingAndDecorating = {
  newBuild: {
    label: "New Build",
    labelFarsi: "t",
    image: { kind: "url", src: ImageUrl },
    details:
      ["Painting of new warehouses, factories , shops, all plasterboard, villaBoards, "],
    items: [
      "Office Fit-outs",
      "Retail Spaces",
      "Warehouse Coatings",
      "Body Corporate Maintenance",
    ],
  },
} as const satisfies ServiceSubCategory;
