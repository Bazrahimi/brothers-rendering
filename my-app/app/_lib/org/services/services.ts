import { ServiceConfig } from "./definitions";

export const SERVICES = {
  paintingAndDecorating: {
    category: "Painting and Decorating",
    shortDesc: [
      "Comprehensive interior and exterior painting solutions for homes and businesses.",
    ] as const,

    areasServed: ["Dandenong", "Melbourne South East"],

    subcategories: {
      residential: {
        newBuild: {
          label: "Residential Painting",
          type: [
            "New Houses",
            "Duplex and Multiple units",
            "Extensions",
            "Plasterboard and Villaboards",
          ],
        },
        renovations: {
          label: "Renovations & Specialized Coatings",
          type: [
            "Garage Extensions",
            "Kitchen & Bathroom Renovations",
            "Deck Staining & Sealing",
            "Driveway and Concrete Sealers",
          ],
        },
      },
      commercial: {
        label: "Commercial Painting",
        type: [
          "Office Fit-outs",
          "Retail Spaces",
          "Warehouse Coatings",
          "Body Corporate Maintenance",
        ],
      },
    },
  },

  solidPlastering: {
    category: "Solid Plastering and Rendering",
    shortDesc: [
      "Expert external cladding and traditional rendering services.",
    ] as const,
    areasServed: ["Greater Melbourne", "South East Suburbs"],

    subcategories: {
      cladding: {
        label: "Board Installation",
        type: ["Foam Board Installation", "Hebel Panel Systems", "Blue Board"],
      },
      finishing: {
        label: "Render & Texture",
        type: [
          "Cement Rendering",
          "Acrylic Texture Coatings",
          "Solid Plastering",
          "Patching and Repairs",
        ],
      },
    },
  },

  tilingAndCaulking: {
    category: "Tiling and Caulking",
    shortDesc: [
      "Precision tiling and professional caulking for residential and commercial projects.",
    ] as const,
    areasServed: ["Victoria", "Melbourne South East"],

    subcategories: {
      tiling: {
        label: "Tiling Services",
        type: [
          "Floor & Wall Tiling",
          "Bathroom & Kitchen Splashbacks",
          "Outdoor Pavers",
          "Pool Tiling",
        ],
      },
      caulking: {
        label: "Professional Caulking",
        type: [
          "Expansion Joints",
          "Window & Door Caulking",
          "Wet Area Siliconing (Bath/Shower)",
          "Commercial Sealing & Extension Joints",
        ],
      },
    },
  },
} as const satisfies Record<string, ServiceConfig>;
