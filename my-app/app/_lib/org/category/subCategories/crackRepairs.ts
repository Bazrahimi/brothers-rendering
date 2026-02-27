import type { ServiceSubCategory } from "../../definitions";

export const crackRepairs = {
  repairServices: {
    label: "Wall Crack Repairs",
    labelFarsi: "تعمیر ترک‌های دیوار",
    image: { kind: "svg", text: "Wall Crack Repairs" },
    description: [
      "Repairs for plaster, brick, and rendered walls including drummy render and surface restoration.",
    ],
    items: [
      "Brick wall crack repairs",
      "Plaster wall repairs",
      "Rusted corner repairs",
      "Flaking paint fixes",
      "Membrane sealing where required",
    ] as const,
  },

  crackAssessment: {
    label: "Crack Assessment",
    labelFarsi: "ارزیابی ترک",
    image: { kind: "svg", text: "Crack Assessment" },
    description: [
      "Not all cracks are structural—assessment helps identify the cause and best repair approach.",
    ],
    items: [
      "Cosmetic hairline cracks",
      "Movement-related cracking",
      "Water ingress checks",
      "Repair recommendations",
    ] as const,
  },

  structuralWarningSigns: {
    label: "Structural Warning Signs",
    labelFarsi: "علائم هشدار سازه‌ای",
    image: { kind: "svg", text: "Structural Warning Signs" },
    description: [
      "Certain crack patterns and locations may indicate underlying structural issues.",
    ],
    items: [
      "Cracks wider than ~5mm",
      "Cracks near doors/windows",
      "Cracks at building corners",
      "Visible wall misalignment",
    ] as const,
  },

  drummyRenderAndSpalling: {
    label: "Drummy Render & Concrete Spalling",
    labelFarsi: "رندر درامی و پوسته‌شدن بتن",
    image: { kind: "svg", text: "Drummy Render & Spalling" },
    description: [
      "Drummy render is loose render that sounds hollow; spalling is concrete deterioration often linked to moisture exposure.",
    ],
    items: [
      "Loose render diagnosis",
      "Moisture source checks",
      "Efflorescence/mould symptoms",
      "Long-lasting repairs",
    ] as const,
  },

  repairMethods: {
    label: "Repair Methods",
    labelFarsi: "روش‌های تعمیر",
    image: { kind: "svg", text: "Repair Methods" },
    description: [
      "We use the right compounds and techniques based on the crack type and substrate.",
    ],
    items: [
      "Crack filling compounds",
      "Plaster patching and blending",
      "Stitching cracks where required",
      "Seal + protect before painting",
    ] as const,
  },
} as const satisfies ServiceSubCategory;