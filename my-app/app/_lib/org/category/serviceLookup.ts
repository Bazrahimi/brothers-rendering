import { SERVICES_PAGE } from "@/app/_lib/org/category/services";
import type { ServicesPage } from "../definitions";

export type ServicePageKey = keyof typeof SERVICES_PAGE;
export type ServicePageLabel = ServicesPage["label"];


export const getServiceLabel = (key: ServicePageKey): string => {
  return SERVICES_PAGE[key].label;
};

/** return full service config */
export const getService = (key: ServicePageKey): ServicesPage => {
  return SERVICES_PAGE[key];
};

const serviceBySlug = new Map<string, { key: ServicePageKey; service: ServicesPage }>(
  Object.entries(SERVICES_PAGE).map(([key, service]) => [
    service.slug,
    { key: key as ServicePageKey, service },
  ]),
);

export const getServiceLabelBySlug = (slug: string) => {
  return serviceBySlug.get(slug) ?? null;
};



export function toOtherLangProps(service: ServicesPage) {
  const subcategoryLabelsFarsi = Object.values(service.subcategories).map(
    (leaf) => leaf.labelFarsi,
  );

  return {
    serviceLabelFarsi: service.labelFarsi,
    subcategoryLabelsFarsi,
  };
}
