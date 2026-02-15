import type { ServiceGroup } from "../definitions";

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

  // ✅ NEW
  wetAreas: {
    label: "Bathrooms & Wet Areas",
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
    items: [
      "Fire-Rated Penetration Sealing",
      "Acoustic Sealing Between Units",
      "Service Pipe/Conduit Sealing",
      "Compliance Sealing for Commercial Builds",
    ],
  },
} as const satisfies ServiceGroup;
