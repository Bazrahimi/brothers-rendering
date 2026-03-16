import type { ServicePageKey } from "../org/category/serviceLookup";

import { SERVICES_PAGE } from "@/app/_lib/org/category/services";
const languages = "/languages";
export const PublicRoutes = {
  home: () => "/",
  about: () => "/about-us",
  contact: () => "/contact-us",
  freeConsultation: () => "/free-consultation",
  service: (slug: string) => `/services/${slug}`,
  languages: () => languages,
  otherLanguages: (lang: string) => `${languages}/${encodeURIComponent(lang)}`,
} as const;

/** Service nav links */
export const getServiceCategoryLinks = () => {
  return (Object.keys(SERVICES_PAGE) as ServicePageKey[]).map((key) => {
    const label = SERVICES_PAGE[key].label;
    const slug = SERVICES_PAGE[key].slug;

    return {
      key,
      label: label,
      href: PublicRoutes.service(slug),
    };
  });
};

/** Quick links */
export const QUICK_LINKS = [
  { href: PublicRoutes.home(), label: "Home" },
  { href: PublicRoutes.about(), label: "About Us" },
  { href: PublicRoutes.contact(), label: "Contact us" },
] as const;


export const SERVICES_LINKS = [

  ...getServiceCategoryLinks().map(({ href, label }) => ({ href, label })),
];
