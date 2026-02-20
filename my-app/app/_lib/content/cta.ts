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
} as const;

export type CtaKey = keyof typeof CTA;
export type Locale = "en" | "fa";

export const getCtaCopy = (key: CtaKey, locale: Locale) => {
  const c = CTA[key];
  return locale === "fa"
    ? { label: c.labelFarsi, message: c.messageFarsi, dir: "rtl" as const }
    : { label: c.label, message: c.message, dir: "ltr" as const };
};

export const ctaCall = (orgName: string, serviceLabel: string) =>
  `Tell ${orgName} what you need for ${serviceLabel}, and we’ll reply with clear next steps.`;

export const ctaCallFarsi = (orgNameLabel: string, serviceLabelFarsi: string) =>
  `به ${orgNameLabel} بگویید برای ${serviceLabelFarsi} به چه چیزی نیاز دارید، و ما با مراحل بعدیِ روشن پاسخ می‌دهیم.`;
