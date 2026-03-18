// app/_lib/org/category/servicesPage.ts
import type { ServicesPage } from "../definitions";

import { acrylicRendering } from "./subCategories/acrylicRendering";
import { cementRendering } from "./subCategories/cementRendering";
import { concreteRender } from "./subCategories/concreteRender";
import { crackRepairs } from "./subCategories/crackRepairs";
import { polystyreneCladding } from "./subCategories/polystyreneCladding";
import { hebelCladding } from "./subCategories/hebelCladding";

export const SERVICES_PAGE = {
  acrylicRendering: {
    slug: "acrylic-rendering-services",
    label: "Acrylic Rendering Services",
    image: [],
    labelFarsi: "رندر اکریلیک",
    description: [
      "Fast, flexible acrylic render finishes for residential and commercial projects.",
    ] as const,
    subcategories: acrylicRendering,
  },

  cementRendering: {
    slug: "cement-rendering-services",
    label: "Cement Rendering Services",
    image: [],
    labelFarsi: "رندر سیمانی",
    description: [
      "Durable cement rendering for weatherproof, modern exterior finishes.",
    ] as const,
    subcategories: cementRendering,
  },

  concreteRender: {
    slug: "concrete-render-services",
    label: "Concrete Render Services",
    image: [],
    labelFarsi: "رندر بتنی",
    description: [
      "Smooth concrete finishes for modern interiors and feature walls.",
    ] as const,
    subcategories: concreteRender,
  },

  crackRepairs: {
    slug: "crack-repair-services",
    label: "Crack Repair Services",
    image: [],
    labelFarsi: "تعمیر ترک",
    description: [
      "Wall crack diagnosis and repairs to restore durability and appearance.",
    ] as const,
    subcategories: crackRepairs,
  },

  polystyreneCladding: {
    slug: "polystyrene-cladding-services",
    label: "Polystyrene Cladding Services",
    image:[],
    labelFarsi: "کلادینگ پلی‌استایرن",
    description: [
      "Insulated foam cladding systems rendered for strength and modern curb appeal.",
    ] as const,
    subcategories: polystyreneCladding,
  },

  hebelCladding: {
    slug: "hebel-cladding-services",
    label: "Hebel Cladding Services",
    image: [],
    labelFarsi: "کلادینگ هبل",
    description: [
      "Hebel (AAC) panel installation and finishing for efficient, fire-rated walls.",
    ] as const,
    subcategories: hebelCladding,
  },
} as const satisfies Record<string, ServicesPage>;