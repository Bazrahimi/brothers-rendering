import type { ImageMeta } from "../definitions";

export type ServiceLeaf = {
  label: string;
  labelFarsi: string;
  description: string[];
  image: ImageMeta[];
  items: readonly string[];
};

export type ServiceSubCategory = {
  [key: string]: ServiceLeaf;
};

export type ServicesPage = {
  label: string;
  labelFarsi: string; //
  slug: string;
  description: readonly string[];
  image: ImageMeta[];
  subcategories: ServiceSubCategory;
};

