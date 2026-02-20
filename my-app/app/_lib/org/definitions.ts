import { SERVICES } from "./category/services";

export type ServiceKey = keyof typeof SERVICES;

export type ServiceTitle = Service["label"];

export type LeafImage =
  | { kind: "url"; src: string }
  | { kind: "svg"; text: string };

export type ServiceLeaf = {
  label: string;
  labelFarsi: string;
  details: string[];
  image: LeafImage;
  items: readonly string[];
};

export type ServiceSubCategory = {
  [key: string]: ServiceLeaf;
};

export type Service = {
  label: string;
  labelFarsi: string; // 
  shortDesc: readonly string[];
  subcategories: ServiceSubCategory;
};

