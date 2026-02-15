import type { ServiceKey } from "@/app/_lib/org/category/definitions";

import { SERVICES } from "@/app/_lib/org/category/services";
import type { SelectOption, ServiceQueryOption } from "./definitions";
export const ENQUIRY_FIELDS = {
  fullName: "fullName",
  email: "email",
  contactNumber: "contactNumber",
  queryType: "queryType",
  queryTypeLabel: "queryTypeLabel",
  qMessage: "qMessage",
} as const;

export const ORG_QUERY_TYPES = {
  // Services become query types automatically
  ...Object.fromEntries(
    (Object.keys(SERVICES) as ServiceKey[]).map((key) => [
      key,
      {
        label: SERVICES[key].category,
        description: SERVICES[key].shortDesc,
      },
    ]),
  ),

  feedback: {
    label: "Feedback",
    description: "Share feedback about our services or website.",
  },

  booking: {
    label: "Book a meeting",
    description: "Schedule a time to speak with our team.",
  },

  other: {
    label: "Other",
    description: "Anything else you’d like to ask.",
  },
} as const;

export type OrgQueryKey = keyof typeof ORG_QUERY_TYPES;

export type OrgQueryOption = {
  value: OrgQueryKey;
  label: (typeof ORG_QUERY_TYPES)[OrgQueryKey]["label"];
  description: (typeof ORG_QUERY_TYPES)[OrgQueryKey]["description"];
};

/** For your <Select /> options */
export const ORG_QUERY_OPTIONS: OrgQueryOption[] = (
  Object.keys(ORG_QUERY_TYPES) as OrgQueryKey[]
).map((key) => ({
  value: key,
  label: ORG_QUERY_TYPES[key].label,
  description: ORG_QUERY_TYPES[key].description,
}));

export const serviceQueryMap = {
  paintingAndDecorating: {
    value: "paintingAndDecorating",
    label: "Painting and Decorating",
  },
  solidPlastering: {
    value: "solidPlastering",
    label: "Solid Plastering and Rendering",
  },
  siliconAndCaulking: {
    value: "siliconAndCaulking",
    label: "Silicon and Caulking",
  },
} satisfies Record<ServiceKey, ServiceQueryOption>;

const serviceQueryOption = Object.values(serviceQueryMap);

export const queryOptions: SelectOption[] = [
  ...serviceQueryOption,
  { value: "freeQuote", label: "Free Quote" },
  { value: "feedback", label: "Feedback" },
  { value: "other", label: "Other" },
] as const;
