import { SERVICES } from "./services";

export type ServiceKey = keyof typeof SERVICES;
export type Service = (typeof SERVICES)[ServiceKey];
export type ServiceTitle = Service["category"];

export const ImageUrl =
  "v1771144431/business-f/building/bath1234poof_y6clz0.png";

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

/**
 * 1) Type guard: at runtime, we need to know wether a node is:
 * -  a leaf (ServiceLeaf) => render a card with label, summary, image, items.
 * -   a group (ServiceGroup) => render heading + recurse into children.
 *
 * TypeScript types disappears at runtime, so we do a safe-check.
 */

export const isServiceLeaf = (node: unknown): node is ServiceLeaf => {
  // if it is null, undefined, number, string, etc. => not a leaf
  if (!node || typeof node !== "object") return false;

  // Treat it as a "Partial Leaf" so we can check fields safely.
  const n = node as Partial<ServiceLeaf>;

  // Leaf must have these properties Partial<ServiceLeaf>;
  return (
    typeof n.label === "string" &&
    typeof n.summary === "string" &&
    typeof n.imageUrl === "string" &&
    Array.isArray(n.items)
  );
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
