import { SERVICES } from "./services";

export type ServiceKey = keyof typeof SERVICES;

export type ServiceTitle = Service["label"];

export const ImageUrl =
  "v1771144431/business-f/building/bath1234poof_y6clz0.png";

export type LeafImage =
  | { kind: "url"; src: string }
  | { kind: "svg"; text: string };

export type ServiceLeaf = {
  label: string;
  summary: string;
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

/**
 * 2) Helper: keys like "newBuild" or "siliconAndCaulking" look ugly.
 *    This converts them to "New Build" or "Silicon And Caulking".
 */
export const prettifyKey = (key: string) => {
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2") // camelCase -> camel Case
    .replace(/[-_]/g, " ") // kebab_case -> spaces
    .replace(/\b\w/g, (c) => c.toUpperCase()); // Title Case
};

export function isLeaf(node: ServiceLeaf): node is ServiceLeaf {
  return (
    typeof (node as ServiceLeaf).label === "string" &&
    typeof (node as ServiceLeaf).summary === "string" &&
    (node as ServiceLeaf).image != null &&
    typeof (node as ServiceLeaf).image === "object" &&
    Array.isArray((node as ServiceLeaf).items)
  );
}
