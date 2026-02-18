import { SERVICES } from "./category/services";

export type ServiceKey = keyof typeof SERVICES;

export type ServiceTitle = Service["label"];



export type LeafImage =
  | { kind: "url"; src: string }
  | { kind: "svg"; text: string };

export type ServiceLeaf = {
  label: string;
  details: string[];
  image: LeafImage;
  items: readonly string[];
};

export type ServiceSubCategory = {
  [key: string]: ServiceLeaf;
};

export type Service = {
  label: string;
  shortDesc: readonly string[];
  subcategories: ServiceSubCategory;
};

export type CtaLabel = "Free Quote" | "Free Consultation";

// /**
//  * 2) Helper: keys like "newBuild" or "siliconAndCaulking" look ugly.
//  *    This converts them to "New Build" or "Silicon And Caulking".
//  */
// export const prettifyKey = (key: string) => {
//   return key
//     .replace(/([a-z])([A-Z])/g, "$1 $2") // camelCase -> camel Case
//     .replace(/[-_]/g, " ") // kebab_case -> spaces
//     .replace(/\b\w/g, (c) => c.toUpperCase()); // Title Case
// };
