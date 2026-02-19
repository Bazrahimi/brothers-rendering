import { SERVICES } from "@/app/_lib/org/category/services";
import type { ServiceKey } from "../org/definitions";
import { slugify } from "../utils/helper";
const languages = "/languages";
export const PublicRoutes = {
  home: () => "/",
  about: () => "/about-us",
  contact: () => "/contact-us",
  freeConsultation: () => "/free-consultation",
  service: (slug: string) => `/services/${slug}`,
  languages: () => languages,
  otherLanguages: (lang: string) =>
    `${languages}/${encodeURIComponent(lang)}`,
} as const;

/** Service nav links */
export const getServiceCategoryLinks = () => {
  return (Object.keys(SERVICES) as ServiceKey[]).map((key) => {
    const title = SERVICES[key].label;
    const slug = slugify(title);

    return {
      key,
      label: title,
      href: PublicRoutes.service(slug),
    };
  });
};

/** Quick links */
export const QUICK_LINKS = [
  { href: PublicRoutes.home(), label: "Home" },
  { href: PublicRoutes.about(), label: "About HCA" },
  ...getServiceCategoryLinks().map(({ href, label }) => ({ href, label })),
  { href: PublicRoutes.contact(), label: "Contact us" },
] as const;
