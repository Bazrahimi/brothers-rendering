import { PublicRoutes } from "../routes/publicRoutes";
import { slugify } from "./helper";
export const SERVICES_LIST = {
  1: "Services 1",
  2: "Services 2",
  3: "Services 3",
} as const;

export type ServicesId = keyof typeof SERVICES_LIST;

export const getServiceLabel = (serviceId: number): string => {
  const item = SERVICES_LIST[serviceId as ServicesId];
  if (!item) return "";
  return item;
};

export const getServiceLinks = () => {
  return Object.values(SERVICES_LIST).map((label) => {
    const slug = slugify(label);

    return {
      label,
      href: PublicRoutes.service(slug),
    };
  });
};

export const QUICK_LINKS = [
  { href: PublicRoutes.home(), label: "Home" },
  { href: PublicRoutes.about(), label: "About HCA" },
  ...getServiceLinks(),
  {href: PublicRoutes.contact(), label: "Contact-us"}
];
