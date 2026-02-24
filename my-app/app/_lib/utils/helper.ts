import type { Service, ServiceKey } from "../org/definitions";
import { SERVICES } from "../org/category/services";

export const unSlugify = (slug: string) =>
  slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

export const slugify = (str: string) =>
  str
    .normalize("NFKD")
    // Keep English letters, Persian letters, numbers, and spaces
    .replace(/[^a-zA-Z0-9\u0600-\u06FF\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .toLowerCase();

/** Get title for a service key (type-safe) */
export const getServiceLabel = (key: ServiceKey): string => {
  return SERVICES[key].label;
};

/** return full service config */
export const getService = (key: ServiceKey): Service => {
  return SERVICES[key];
};

const serviceBySlug = new Map<string, { key: ServiceKey; service: Service }>(
  Object.entries(SERVICES).map(([key, service]) => [
    service.slug,
    { key: key as ServiceKey, service },
  ]),
);

export const getServiceLabelBySlug = (slug: string) => {
  return serviceBySlug.get(slug) ?? null;
};

export const ImageUrl =
  "v1771144431/business-f/building/bath1234poof_y6clz0.png";

export function toOtherLangProps(service: Service) {
  const subcategoryLabelsFarsi = Object.values(service.subcategories).map(
    (leaf) => leaf.labelFarsi,
  );

  return {
    serviceLabelFarsi: service.labelFarsi,
    subcategoryLabelsFarsi,
  };
}
