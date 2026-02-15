import type { ServiceGroup } from "../definitions";

export const solidPlastering = {
  cladding: {
    label: "Board Installation",
    items: ["Foam Board Installation", "Hebel Panel Systems", "Blue Board"],
  },

  finishing: {
    label: "Render & Texture",
    items: [
      "Cement Rendering",
      "Acrylic Texture Coatings",
      "Solid Plastering",
      "Patching and Repairs",
    ],
  },

  // ✅ NEW
  repairs: {
    label: "Repairs & Maintenance",
    items: [
      "Crack Repairs",
      "Water Damage Repairs",
      "Re-rendering of Existing Walls",
      "Patch & Blend Matching",
    ],
  },

  // ✅ NEW
  insulation: {
    label: "Insulation & Lightweight Systems",
    items: [
      "External Insulation Systems (EIFS)",
      "Thermal Render Systems",
      "Acoustic Wall Treatments",
      "Lightweight Facade Upgrades",
    ],
  },
} as const satisfies ServiceGroup;
