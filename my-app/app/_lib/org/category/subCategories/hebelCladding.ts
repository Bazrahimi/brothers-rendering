import type { ServiceSubCategory } from "../../definitions";

export const hebelCladding = {
  whatIsHebel: {
    label: "What is Hebel (AAC)?",
    labelFarsi: "هبل (AAC) چیست؟",
    image: { kind: "svg", text: "What is Hebel" },
    description: [
      "Hebel is Autoclaved Aerated Concrete (AAC): a lightweight precast building material with strong insulation properties.",
    ],
    items: [
      "Lightweight panels and blocks",
      "Thermal insulation",
      "Sound insulation",
      "Precast AAC system",
    ] as const,
  },

  keyBenefits: {
    label: "Key Benefits",
    labelFarsi: "مزایای اصلی",
    image: { kind: "svg", text: "Key Benefits" },
    description: [
      "Hebel supports energy efficiency, fire resistance, and acoustic comfort for modern builds.",
    ],
    items: [
      "Energy efficiency",
      "Fire resistance (as referenced)",
      "Sound insulation",
      "Lightweight yet strong",
      "Versatile design finishes",
    ] as const,
  },

  applications: {
    label: "Applications",
    labelFarsi: "کاربردها",
    image: { kind: "svg", text: "Applications" },
    description: [
      "Suitable for residential, commercial, and multi-residential developments across many wall systems.",
    ],
    items: [
      "Residential buildings",
      "Commercial buildings",
      "Multi-residential developments",
      "Educational institutions",
      "Industrial buildings",
      "External walls",
      "Floors and fences (as referenced)",
    ] as const,
  },

  choosingContractor: {
    label: "Choosing the Right Installer",
    labelFarsi: "انتخاب نصاب مناسب",
    image: { kind: "svg", text: "Choosing Installer" },
    description: [
      "Selecting an experienced installer ensures correct installation, compliance, and long-term performance.",
    ],
    items: [
      "Experience and expertise",
      "Comprehensive services",
      "Material quality",
      "Customer reviews",
      "Warranty and support",
    ] as const,
  },

  maintenance: {
    label: "Maintenance",
    labelFarsi: "نگهداری",
    image: { kind: "svg", text: "Maintenance" },
    description: [
      "Low maintenance overall; routine cleaning and inspections help preserve appearance and performance.",
    ],
    items: [
      "Regular cleaning",
      "Routine inspections",
      "Repair chips/cracks early",
      "Repainting cycles (if painted)",
    ] as const,
  },
} as const satisfies ServiceSubCategory;