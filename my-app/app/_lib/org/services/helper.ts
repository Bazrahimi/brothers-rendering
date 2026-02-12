import type { Service, ServiceKey } from "./definitions";

import { SERVICES } from "./services";

/** Get title for a service key (type-safe) */
export const getServiceTitle = (key: ServiceKey): string => {
  return SERVICES[key].title;
};

/** return full service config */
export const getService = (key: ServiceKey): Service => {
  return SERVICES[key];
};

