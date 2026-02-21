import { SERVICES } from "./category/services";
import { slugify } from "../utils/helper";

export type ServiceKey = keyof typeof SERVICES;

export type ServiceTitle = Service["label"];

export type LeafImage =
  | { kind: "url"; src: string }
  | { kind: "svg"; text: string };

export type ServiceLeaf = {
  label: string;
  labelFarsi: string;
  description: string[];
  image: LeafImage;
  items: readonly string[];
};

export type ServiceSubCategory = {
  [key: string]: ServiceLeaf;
};

export type Service = {
  label: string;
  labelFarsi: string; // 
  slug: string; 
  description: readonly string[];
  subcategories: ServiceSubCategory;
};



export const  isLeaf = (v: unknown): v is ServiceLeaf => {
  return (
    typeof v === "object" &&
    v !== null &&
    "label" in v &&
    "labelFarsi" in v &&
    "image" in v &&
    "items" in v
  );
}
