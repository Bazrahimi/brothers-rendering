import { ServiceGroup } from "../definitions";

export const siliconAndCaulking = {
  caulking: {
    label: "Professional Caulking",
    items: [
      "Expansion Joints",
      "Window & Door Caulking",
      "Wet Area Siliconing (Bath/Shower)",
      "Commercial Sealing & Extension Joints",
    ],
  },
} as const satisfies ServiceGroup;
