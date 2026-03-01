import { SERVICES_PAGE } from "@/app/_lib/org/category/services";
import { OtherLanguageKey } from "../../languages/multiculturalStatement";
import type { ServicesPage } from "../definitions";

export type ServicePageKey = keyof typeof SERVICES_PAGE;
export type ServicePageLabel = ServicesPage["label"];

export const getServiceLabel = (key: ServicePageKey): string => {
  return SERVICES_PAGE[key].label;
};

/** return full service config */
export const getService = (key: ServicePageKey): ServicesPage => {
  return SERVICES_PAGE[key];
};

const serviceBySlug = new Map<
  string,
  { key: ServicePageKey; service: ServicesPage }
>(
  Object.entries(SERVICES_PAGE).map(([key, service]) => [
    service.slug,
    { key: key as ServicePageKey, service },
  ]),
);

export const getServiceLabelBySlug = (slug: string) => {
  return serviceBySlug.get(slug) ?? null;
};

export function toOtherLangProps(service: ServicesPage) {
  const subcategoryLabelsFarsi = Object.values(service.subcategories).map(
    (leaf) => leaf.labelFarsi,
  );

  return {
    serviceLabelFarsi: service.labelFarsi,
    subcategoryLabelsFarsi,
  };
}

/* ---------------------------
   ✅ SEO / keyword helpers
---------------------------- */
const shouldIncludeFarsi = (langs?: readonly OtherLanguageKey[]) =>
  !!langs?.some((l) => l === "FA" || l === "HZ");

export const getHomeServiceKeywords = (
  langs?: readonly OtherLanguageKey[],
): string[] => {
  const services = Object.values(SERVICES_PAGE);

  const en = services.map((s) => s.label);
  const fa = shouldIncludeFarsi(langs) ? services.map((s) => s.labelFarsi) : [];

  return unique([...en, ...fa]);
};

export const getServiceSubcategoryKeywordsBySlug = (
  slug: string,
  langs?: readonly OtherLanguageKey[],
): string[] => {
  // 1) find the service by slug
  const service = Object.values(SERVICES_PAGE).find((s) => s.slug === slug);
  if (!service) return [];

  // 2) read subcategories (overview, compatibleSurfaces, etc)
  const leaves = Object.values(service.subcategories);

  // 3) EN labels always
  const en = leaves.map((leaf) => leaf.label);

  // 4) FA labels only if FA/HZ enabled
  const fa = shouldIncludeFarsi(langs)
    ? leaves.map((leaf) => leaf.labelFarsi)
    : [];

  // 5) dedupe + return
  return unique([...en, ...fa]);
};

const unique = (items: readonly string[]) =>
  Array.from(new Set(items.filter(Boolean)));
