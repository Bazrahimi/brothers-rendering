import { ImageUrl, ServiceSubCategory } from "../definitions";

export const commercialPaintingAndDecorating = {
  newBuild: {
    label: "New Build",
    image: { kind: "url", src: ImageUrl },
    summary:
      "Painting of new warehouses, factories , shops, all plasterboard, villaBoards, ",
    items: [
      "Office Fit-outs",
      "Retail Spaces",
      "Warehouse Coatings",
      "Body Corporate Maintenance",
    ],
  },
} as const satisfies ServiceSubCategory;
