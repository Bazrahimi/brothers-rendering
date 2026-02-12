export const SERVICES = {
  service_1: {
    title: "Civil Dispute",
    shortDesc: "A short one-line summary of Service 1.",
    areasServed: ["Dandenong", "Melbourne South East"],
    category: "General",
    subcategories: ["Sub A", "Sub B"],
  },
  service_2: {
    title: "Service 2",
    shortDesc: "A short one-line summary of Service 2.",
    areasServed: ["Greater Melbourne"],
    category: "Support",
    subcategories: ["Sub C"],
  },
  service_3: {
    title: "Service 3",
    shortDesc: "A short one-line summary of Service 3.",
    areasServed: ["Victoria"],
    category: "Community",
    subcategories: [],
  },
} as const;

// How about this
