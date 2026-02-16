import { slugify } from "../../utils/helper";
import type { Service, ServiceKey, ServiceTitle } from "./definitions";

import { SERVICES } from "./services";

/** Get title for a service key (type-safe) */
export const getServiceLabel = (key: ServiceKey): string => {
  return SERVICES[key].label;
};

/** return full service config */
export const getService = (key: ServiceKey): Service => {
  return SERVICES[key];
};

export const getServiceLabelBySlug = (slug: string) => {
  // Find by matching slugified title
  const entry = Object.entries(SERVICES).find(([, service]) => {
    return slugify(service.label) === slug;
  });

  if (!entry) return null;
  const [key, service] = entry;
  return { key, service };
};
