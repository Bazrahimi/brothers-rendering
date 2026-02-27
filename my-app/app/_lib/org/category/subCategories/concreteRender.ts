import type { ServiceSubCategory } from "../../definitions";

export const concreteRender = {
  smoothConcreteFinish: {
    label: "Smooth Concrete Finish",
    labelFarsi: "فینیش بتنی صاف",
    image: { kind: "svg", text: "Smooth Concrete Finish" },
    description: [
      "Concrete finish render creates clean, smooth surfaces for modern interiors and feature walls.",
    ],
    items: [
      "Smooth interior finishes",
      "Modern design look",
      "Colour and texture options",
      "Feature walls",
    ] as const,
  },

  interiorFitOuts: {
    label: "Interior Fit-outs",
    labelFarsi: "فیت‌آوت داخلی",
    image: { kind: "svg", text: "Interior Fit-outs" },
    description: [
      "Suitable for many interior spaces where appearance is a priority.",
    ],
    items: [
      "Offices",
      "Retail shop fittings",
      "Hospitals",
      "Gyms",
      "Beauty salons",
      "Cafes and restaurants",
    ] as const,
  },

  maintenance: {
    label: "Maintenance Considerations",
    labelFarsi: "نکات نگهداری",
    image: { kind: "svg", text: "Maintenance" },
    description: [
      "Concrete render may require more ongoing maintenance to keep its finish looking fresh.",
    ],
    items: [
      "Periodic cleaning",
      "Touch-ups where needed",
      "Re-seal/repaint cycles",
      "Surface inspections",
    ] as const,
  },

  designTrend: {
    label: "Design Trend: Concrete Finishes",
    labelFarsi: "ترند طراحی: فینیش بتنی",
    image: { kind: "svg", text: "Concrete Design Trend" },
    description: [
      "Concrete textures pair well with raw materials, earthy tones, and natural outdoor spaces.",
    ],
    items: ["Pool areas", "Water features", "Outdoor feature walls"] as const,
  },
} as const satisfies ServiceSubCategory;