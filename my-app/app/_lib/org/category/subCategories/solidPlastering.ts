import { ServiceSubCategory } from "../../definitions";

export const solidPlastering = {
  cladding: {
    label: "Board Installation",
    labelFarsi: "نصب پنل",
    image: { kind: "svg", text: "Bathroom and wet area" },
    description:
      ["installation of blueboard, foamboard, hebels and render and text finish"],
    items: ["Foam Board Installation", "Hebel Panel Systems", "Blue Board"],
  },

  finishing: {
    label: "Render & Texture",
    labelFarsi: "اندود و بافت",
    image: { kind: "svg", text: "Bathroom and wet area" },
    description: ["Restore damaged render and keep façades looking sharp."],
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
    labelFarsi: "تعمیرات و نگهداری",
    image: { kind: "svg", text: "Bathroom and wet area" },
    description: ["this is a summary of repair and maintenance"],
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
    labelFarsi: "عایق‌کاری و سیستم‌های سبک",
    image: { kind: "svg", text: "Bathroom and wet area" },
    description: ["this is for this"],
    items: [
      "External Insulation Systems (EIFS)",
      "Thermal Render Systems",
      "Acoustic Wall Treatments",
      "Lightweight Facade Upgrades",
    ],
  },
} as const satisfies ServiceSubCategory;
