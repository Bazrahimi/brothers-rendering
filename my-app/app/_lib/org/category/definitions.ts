import { SERVICES } from "./services";

export type ServiceKey = keyof typeof SERVICES;
export type Service = (typeof SERVICES)[ServiceKey];
export type ServiceTitle = Service["category"];





export const ImageUrl = "https://res.cloudinary.com/drvh5xeuw/image/upload/v1771144431/business-f/building/bath1234poof_y6clz0.png"


export type ServiceLeaf = {
  label: string;
  summary: string;
  imageUrl: string;
  items: readonly string[];
};

// ✅ recursive type MUST be an interface (or “object type”)
export interface ServiceGroup {
  [key: string]: ServiceLeaf | ServiceGroup;
}

export type ServiceConfig = {
  category: string;
  shortDesc: readonly string[];
  subcategories: ServiceGroup;
};
