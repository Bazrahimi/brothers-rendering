import { SERVICES } from "./services";

export type ServiceKey = keyof typeof SERVICES;
export type Service = (typeof SERVICES)[ServiceKey];
export type ServiceTitle = Service["category"];

export type ServiceList = {
  label: string;
  items: readonly string[];
};

export type ServiceNode = ServiceList | ServiceGroup;

export interface ServiceGroup {
  [key: string]: ServiceNode;
}

export type ServiceConfig = {
  category: string;
  shortDesc: readonly string[];
  subcategories: ServiceGroup;
};
