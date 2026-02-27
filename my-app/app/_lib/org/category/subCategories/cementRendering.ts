import type { ServiceSubCategory } from "../../definitions";

export const cementRendering = {
  newRenderApplication: {
    label: "New Render Application",
    labelFarsi: "اجرای رندر جدید",
    image: { kind: "svg", text: "New Render Application" },
    description: [
      "A fresh cement render layer for a durable, weatherproof exterior finish.",
    ],
    items: [
      "Exterior wall preparation",
      "Base coat + finish coat",
      "Smooth or textured finish",
      "Paint-ready surface",
    ] as const,
  },

  renderingRepairs: {
    label: "Rendering Repairs",
    labelFarsi: "تعمیر رندر",
    image: { kind: "svg", text: "Rendering Repairs" },
    description: [
      "Repair cracked, chipped, or aged cement render to restore strength and appearance.",
    ],
    items: [
      "Crack repairs",
      "Patch and blend",
      "Recoat damaged areas",
      "Improve weather resistance",
    ] as const,
  },

  decorativeRendering: {
    label: "Decorative Rendering",
    labelFarsi: "رندر دکوراتیو",
    image: { kind: "svg", text: "Decorative Rendering" },
    description: [
      "Textures and finishes to make your façade unique and modern.",
    ],
    items: [
      "Textures and patterns",
      "Feature areas",
      "Modern finish options",
      "Decorative top coats",
    ] as const,
  },

  whatIsCementRender: {
    label: "What is Cement Rendering?",
    labelFarsi: "رندر سیمانی چیست؟",
    image: { kind: "svg", text: "What is Cement Rendering?" },
    description: [
      "Cement rendering uses cement, sand, and lime applied to masonry walls for a smooth or textured protective finish.",
    ],
    items: ["Brick", "Stone", "Concrete", "Interior & exterior walls"] as const,
  },
} as const satisfies ServiceSubCategory;