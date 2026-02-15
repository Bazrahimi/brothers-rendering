import { ImageUrl, ServiceGroup } from "../definitions";

export const siliconAndCaulking = {
  caulking: {
    label: "Professional Caulking",
    imageUrl: ImageUrl,
    summary: "this is summary of Profesional caulking",
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
    imageUrl: ImageUrl,
    summary: "this is bathroom and wet area",
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
    imageUrl: ImageUrl,
    summary: "this is summary of exterior weatherProfing",
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
    imageUrl: ImageUrl,
    summary: "this is a summary of fire-reated and acoustis sealing",
    items: [
      "Fire-Rated Penetration Sealing",
      "Acoustic Sealing Between Units",
      "Service Pipe/Conduit Sealing",
      "Compliance Sealing for Commercial Builds",
    ],
  },
} as const satisfies ServiceGroup;
