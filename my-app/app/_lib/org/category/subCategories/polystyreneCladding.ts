import type { ServiceSubCategory } from "../../definitions";

export const polystyreneCladding = {
  systemOverview: {
    label: "Polystyrene Cladding System",
    labelFarsi: "سیستم کلادینگ پلی‌استایرن",
    image: { kind: "svg", text: "Polystyrene System" },
    description: [
      "Insulated polystyrene cladding systems rendered for durability, protection, and street appeal.",
    ],
    items: [
      "Thermal insulation performance",
      "Lightweight panels",
      "Rendered exterior finish",
      "Suitable for extensions",
    ] as const,
  },

  keyBenefits: {
    label: "Benefits of Polystyrene Cladding",
    labelFarsi: "مزایای کلادینگ پلی‌استایرن",
    image: { kind: "svg", text: "Cladding Benefits" },
    description: [
      "A flexible, modern exterior solution designed for insulation, durability, and design versatility.",
    ],
    items: [
      "Superior insulation",
      "Termite/rodent resistance (as referenced)",
      "Fire-retardant properties (as referenced)",
      "Waterproof & vapour-proof characteristics (as referenced)",
      "Versatile sizes and shapes",
    ] as const,
  },

  brickLook: {
    label: "Polystyrene Brick Cladding Look",
    labelFarsi: "نمای آجری پلی‌استایرن",
    image: { kind: "svg", text: "3D Brick Look" },
    description: [
      "Achieve a 3D brick appearance while improving energy efficiency through an insulated cladding system.",
    ],
    items: [
      "3D brick wall appearance",
      "Enhanced curb appeal",
      "Improved energy efficiency",
      "Rendered finish options",
    ] as const,
  },

  brands: {
    label: "Brands We Use",
    labelFarsi: "برندهای مورد استفاده",
    image: { kind: "svg", text: "Brands" },
    description: [
      "We use established polystyrene systems and products for consistent performance.",
    ],
    items: ["Masterwall", "Unitex"] as const,
  },

  pricingFactors: {
    label: "Cost Factors",
    labelFarsi: "عوامل تعیین هزینه",
    image: { kind: "svg", text: "Cost Factors" },
    description: [
      "Pricing depends on system selection, building size, storeys, access, and existing wall condition.",
    ],
    items: [
      "Building size",
      "Number of storeys",
      "Site access",
      "Material thickness",
      "Existing wall condition",
    ] as const,
  },
} as const satisfies ServiceSubCategory;