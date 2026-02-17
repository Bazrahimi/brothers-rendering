import type { CtaLabel } from "./definitions";

export const CTA = {
  freeQuote: {
    label: "Free Quote" as CtaLabel,
    message: "Hi, I’d like a free quote for: ",
  },
  freeConsultation: {
    label: "Free Consultation" as CtaLabel,
    message: "Hi, I’d like a free consultation for: ",
  },
};

export const ORG_SOCIAL_MEDIA = {
  facebook: "",
  instagram: "",
  tiktok: "", // leave empty or undefined if not used
} as const;



export const CTA_MAP: Record<CtaLabel, (typeof CTA)[keyof typeof CTA]> = {
  "Free Quote": CTA.freeQuote,
  "Free Consultation": CTA.freeConsultation,
};
