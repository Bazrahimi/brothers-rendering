import { SERVICES_LIST } from "./services";

export const serviceListArray = [
  ...Object.entries(SERVICES_LIST).map(([key, displayValue]) => ({
    value: key, // what gets submitted
    label: displayValue, // what user sees
  })),

  {
    value: "feedback",
    label: "Feedback",
  },
  {
    value: "booking",
    label: "Book a meeting",
  },
];
