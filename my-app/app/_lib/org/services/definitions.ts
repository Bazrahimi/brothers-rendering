import { SERVICES } from "./services";

export type ServiceKey = keyof typeof SERVICES;
export type Service = (typeof SERVICES)[ServiceKey];
export type ServiceTitle = Service["category"];

export type ServiceConfig = {
  category: string;
  shortDesc: readonly string[];
  areasServed: readonly string[];
  // eslint-disable-next-line
  subcategories: Record<string, any>;
};
