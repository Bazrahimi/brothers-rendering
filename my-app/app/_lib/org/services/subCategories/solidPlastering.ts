import { ServiceGroup, ServiceList } from "../definitions";

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
} as const satisfies ServiceGroup;
