import type { Service } from "../definitions";
import { siliconAndCaulking } from "./subCategories/caulking";
import { commercialPaintingAndDecorating } from "./subCategories/commercialPainting";
import { residentialPaintingAndDecorating } from "./subCategories/residentialPainting";

import { solidPlastering } from "./subCategories/solidPlastering";

export const SERVICES = {
  residentialPainting: {
    slug: "residential-painting-and-decorating",
    label: "Residential Painting And Decorating",
    image: { kind: "svg", text: "Residential Painting And Decorating" },
    labelFarsi: "نقاشی و دکوراسیون مسکونی",
    description: [
      "Comprehensive interior and exterior painting solutions for homes and businesses.",
    ] as const,
    subcategories: residentialPaintingAndDecorating,
  },

  commercialPainting: {
    slug: "commercial-painting-and-decorating",
    label: "Commercial Painting And Decorating",
    image: { kind: "svg", text: "Commercial Painting And Decorating" },
    labelFarsi: "نقاشی و دکوراسیون تجاری",
    description: [
      "Comprehensive interior and exterior painting solutions for businesses.",
    ] as const,
    subcategories: commercialPaintingAndDecorating,
  },

  solidPlastering: {
    slug: "solid-plastering-and-rendering",
    label: "Solid Plastering and Rendering",
    image: { kind: "svg", text: "Solid Plastering and Rendering" },
    labelFarsi: "گچ‌کاری و اندودکاری",
    description: [
      "Expert external cladding and traditional rendering services.",
    ] as const,
    subcategories: solidPlastering,
  },

  siliconAndCaulking: {
    slug: "silicon-and-caulking",
    label: "Silicon and Caulking",
    image: { kind: "svg", text: "Silicon and Caulking" },
    labelFarsi: "سیلیکون‌کاری و درزگیری",
    description: [
      "Precision tiling and professional caulking for residential and commercial projects.",
    ] as const,
    subcategories: siliconAndCaulking,
  },
} as const satisfies Record<string, Service>;

export type ServiceKey = keyof typeof SERVICES;
export type ServiceTitle = Service["label"];
