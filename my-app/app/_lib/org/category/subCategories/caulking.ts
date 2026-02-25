import type { ServiceSubCategory } from "../../definitions";

import { ImageUrl } from "../asset";

export const siliconAndCaulking = {
  caulking: {
    label: "Professional Caulking",
    labelFarsi: "درزگیری حرفه‌ای",
    image: { kind: "svg", text: "Professional Caulking" },
    description: ["this is summary of Profesional caulking"],
    items: [
      "Expansion Joints",
      "Window & Door Caulking",
      "Wet Area Siliconing (Bath/Shower)",
      "Commercial Sealing & Extension Joints",
    ],
  },

  // ✅ NEW
  wet_areas: {
    label: "Bathrooms & Wet Areas",
    labelFarsi: "حمام‌ها و فضاهای مرطوب",
    image: { kind: "svg", text: "Bathroom and wet area" },
    description: ["this is bathroom and wet area"],
    items: [
      "Bathroom Re-siliconing",
      "Shower Screen & Tray Sealing",
      "Kitchen Sink & Splashback Sealing",
      "Laundry & Trough Sealing",
    ],
  },

  // ✅ NEW
  weatherproofing: {
    label: "Exterior Weatherproofing",
    labelFarsi: "آب‌بندی فضای بیرونی",
    image: { kind: "url", src: ImageUrl },
    description: ["this is summary of exterior weatherProfing"],
    items: [
      "Facade & Cladding Joint Sealing",
      "Brick Expansion Joint Sealing",
      "External Gap Sealing (Draft & Moisture)",
      "Balcony & Parapet Joint Sealing",
    ],
  },

  // ✅ NEW (optional extra)
  fireRated: {
    label: "Fire-Rated & Acoustic Sealing",
    labelFarsi: "آب‌بندی مقاوم در برابر آتش و آکوستیک",
    image: { kind: "url", src: ImageUrl },
    description: ["this is a summary of fire-reated and acoustis sealing"],
    items: [
      "Fire-Rated Penetration Sealing",
      "Acoustic Sealing Between Units",
      "Service Pipe/Conduit Sealing",
      "Compliance Sealing for Commercial Builds",
    ],
  },
} as const satisfies ServiceSubCategory;
