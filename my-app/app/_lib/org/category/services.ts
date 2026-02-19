
import type { Service } from "../definitions";
import { siliconAndCaulking } from "./subCategories/caulking";
import { commercialPaintingAndDecorating } from "./subCategories/commercialPainting";
import { residentialPaintingAndDecorating } from "./subCategories/residentialPainting";

import { solidPlastering } from "./subCategories/solidPlastering";

export const SERVICES = {
  residentialPainting: {
    label: "Residential Painting And Decorating",
    labelFarsi: "", 
    shortDesc: [
      "Comprehensive interior and exterior painting solutions for homes and businesses.",
    ] as const,

    subcategories: residentialPaintingAndDecorating,
  },
  commercialPainting: {
    label: "Commercial Painting And Decorating",
    labelFarsi: "",
    shortDesc: [
      "Comprehensive interior and exterior painting solutions for businesses.",
    ] as const,

    subcategories: commercialPaintingAndDecorating,
  },

  solidPlastering: {
    label: "Solid Plastering and Rendering",
    labelFarsi: "",
    shortDesc: [
      "Expert external cladding and traditional rendering services.",
    ] as const,

    subcategories: solidPlastering,
  },

  siliconAndCaulking: {
    label: "Silicon and Caulking",
    labelFarsi: "",
    shortDesc: [
      "Precision tiling and professional caulking for residential and commercial projects.",
    ] as const,

    subcategories: siliconAndCaulking,
  },
} as const satisfies Record<string, Service>;
