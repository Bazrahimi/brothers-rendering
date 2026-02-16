import { ServiceGroup } from "../definitions";

export const solidPlastering = {
  cladding: {
    label: "Board Installation",
    image: { kind: "svg", text: "Bathroom and wet area" },
    summary:
      "installation of blueboard, foamboard, hebels and render and text finish",
    items: ["Foam Board Installation", "Hebel Panel Systems", "Blue Board"],
  },

  finishing: {
    label: "Render & Texture",
    image: { kind: "svg", text: "Bathroom and wet area" },
    summary: "Restore damaged render and keep façades looking sharp.",
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
    image: { kind: "svg", text: "Bathroom and wet area" },
    summary: "this is a summary of repair and maintenance",
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
    image: { kind: "svg", text: "Bathroom and wet area" },
    summary: "this is for this",
    items: [
      "External Insulation Systems (EIFS)",
      "Thermal Render Systems",
      "Acoustic Wall Treatments",
      "Lightweight Facade Upgrades",
    ],
  },
} as const satisfies ServiceGroup;
