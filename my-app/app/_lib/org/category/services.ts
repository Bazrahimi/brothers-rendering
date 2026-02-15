import { ServiceConfig } from "./definitions";
import { siliconAndCaulking } from "./subCategories/caulking";
import { paintingAndDecorating } from "./subCategories/paintingAndDecorating";
import { solidPlastering } from "./subCategories/solidPlastering";

export const SERVICES = {
  paintingAndDecorating: {
    category: "Painting and Decorating",
    shortDesc: [
      "Comprehensive interior and exterior painting solutions for homes and businesses.",
    ] as const,

    subcategories: paintingAndDecorating,
  },

  solidPlastering: {
    category: "Solid Plastering and Rendering",
    shortDesc: [
      "Expert external cladding and traditional rendering services.",
    ] as const,

    subcategories: solidPlastering,
  },

  siliconAndCaulking: {
    category: "Silicon and Caulking",
    shortDesc: [
      "Precision tiling and professional caulking for residential and commercial projects.",
    ] as const,

    subcategories: siliconAndCaulking,
  },
} as const satisfies Record<string, ServiceConfig>;
