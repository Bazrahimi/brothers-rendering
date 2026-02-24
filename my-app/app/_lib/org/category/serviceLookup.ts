import { SERVICES } from "@/app/_lib/org/category/services";
import type { Service } from "../definitions";

import type { ServiceKey } from "@/app/_lib/org/category/services";
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
