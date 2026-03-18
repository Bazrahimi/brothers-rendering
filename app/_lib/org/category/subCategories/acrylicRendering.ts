import type { ServiceSubCategory } from "../../definitions";

export const acrylicRendering = {
  overview: {
    label: "Acrylic Rendering Overview",
    labelFarsi: "معرفی رندر اکریلیک",
    image: [],
    description: [
      "Acrylic rendering is a convenient way to upgrade exterior and interior surfaces with a modern, durable finish.",
    ],
    items: [
      "Residential homes and condos",
      "Commercial buildings",
      "Industrial facilities",
      "Colours and textures to suit any style",
    ] as const,
  },

  compatibleSurfaces: {
    label: "Compatible Surfaces",
    labelFarsi: "سطوح قابل اجرا",
    image: [],
    description: [
      "Versatile application across many surface types with strong adhesion and clean results.",
    ],
    items: [
      "Brick",
      "Concrete",
      "Stucco",
      "Plaster",
      "Drywall",
      "Metal",
      "Wood",
      "Tile",
      "Glass",
    ] as const,
  },

  substratesSystems: {
    label: "Boards & Cladding Systems",
    labelFarsi: "سیستم‌های برد و کلادینگ",
    image: [],
    description: [
      "High polymer acrylic render systems compatible with modern substrates used across Melbourne builds.",
    ],
    items: [
      "Blue board",
      "Hebel",
      "Polystyrene",
      "AFS",
      "Dincel",
      "Styropanels",
      "Foam walls",
      "Masonry walls",
    ] as const,
  },

  keyBenefits: {
    label: "Why Acrylic Render",
    labelFarsi: "چرا رندر اکریلیک",
    image: [],
    description: [
      "Acrylic renders offer faster drying, improved adhesion, and flexible performance compared to traditional cement render.",
    ],
    items: [
      "Superior adhesion on challenging surfaces",
      "Fast drying (days rather than weeks)",
      "Breathable yet water resistant",
      "Helps resist mould and bacteria growth",
      "Can be applied up to ~10mm without sagging (when done correctly)",
      "Tinting reduces need for extra paint coats",
      "Smooth or textured finishes",
    ] as const,
  },

  brandsAndFinishes: {
    label: "Products & Finishes",
    labelFarsi: "محصولات و فینیش‌ها",
    image: [],
    description: [
      "Premium products and texture coatings used to meet modern building requirements and hide older textures.",
    ],
    items: [
      "Dulux acrylic render",
      "Quikcote acrylic render",
      "Nutex (as referenced)",
      "MAC (as referenced)",
      "Granosite texture coating",
    ] as const,
  },
} as const satisfies ServiceSubCategory;