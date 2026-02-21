export type DayKey = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

export type DayHours =
  | { closed: true }
  | { closed: false; open: string; close: string }; // "09:00", "17:30"

export type OpeningHours = Record<DayKey, DayHours>;

export const OPENING_HOURS: OpeningHours = {
  mon: { closed: false, open: "09:00", close: "17:00" },
  tue: { closed: false, open: "09:00", close: "17:00" },
  wed: { closed: false, open: "09:00", close: "17:00" },
  thu: { closed: false, open: "09:00", close: "17:00" },
  fri: { closed: false, open: "09:00", close: "17:00" },
  sat: { closed: true },
  sun: { closed: true },
};

export type FAQItem = {
  q: string;
  a: string;
};

export const CONTACT_FAQS: readonly FAQItem[] = [
  {
    q: "What services do you provide?",
    a: "You can browse our services on this website. If you’re not sure which one you need, choose “Other” in the form and describe what you’re looking for.",
  },
  {
    q: "How soon will I get a reply?",
    a: "We aim to respond as soon as possible. If your enquiry is urgent, please call us directly.",
  },
  {
    q: "Can I book a meeting?",
    a: "Yes. Select “Booking” in the enquiry form and tell us your preferred day/time, and we’ll confirm availability.",
  },
  {
    q: "Do you service my area?",
    a: "Tell us your suburb in the message and we’ll confirm if we can help.",
  },
  {
    q: "I’m not sure which option to pick.",
    a: "No problem — choose “Other” and write your question. We’ll direct it to the right person.",
  },
] as const;


export const SOCIAL_MEDIA = {
  facebook: "www.faceboo.com",
  instagram: "www",
  tiktok: "", // leave empty or undefined if not used
} as const;
