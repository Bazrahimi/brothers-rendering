export const CTA = {
  freeQuote: {
    label: "Free Quote",
    labelFarsi: "قیمت‌دهی مجانی",
    message: "Hi, I’d like a free quote for: ",
    messageFarsi: "سلام، می‌خواهم یک قیمت رایگان برای این مورد دریافت کنم: ",
  },
  freeConsultation: {
    label: "Free Consultation",
    labelFarsi: "مشاوره رایگان",
    message: "Hi, I’d like a free consultation for: ",
    messageFarsi: "سلام، می‌خواهم یک مشاوره رایگان برای این مورد دریافت کنم: ",
  },
};

export type CtaKey = keyof typeof CTA;

// export const CTA = {
//   freeQuote: {
//     label: "Free Quote" as CtaLabel,
//     message: "Hi, I’d like a free quote for: ",
//   },
//   freeConsultation: {
//     label: "Free Consultation" as CtaLabel,
//     message: "Hi, I’d like a free consultation for: ",
//   },
// };

export const CTA_MAP: Record<CtaKey, (typeof CTA)[keyof typeof CTA]> = {
  freeQuote: CTA.freeQuote,
  freeConsultation: CTA.freeConsultation,
};
