import type { ServiceSubCategory } from "../../definitions";
import { ImageUrl } from "../assets";

export const commercialPaintingAndDecorating = {
  newBuild: {
    label: "New Build",
    labelFarsi: "ساخت‌وساز جدید",
    image: { kind: "url", src: ImageUrl },
    description: [
      "Painting of new warehouses, factories , shops, all plasterboard, villaBoards, ",
    ],
    items: [
      "Office Fit-outs",
      "Retail Spaces",
      "Warehouse Coatings",
      "Body Corporate Maintenance",
    ],
  },
} as const satisfies ServiceSubCategory;
