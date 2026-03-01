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

export const getAllServiceLabels = (): ServicesPage["label"][] => {
  return Object.values(SERVICES_PAGE).map((s) => s.label);
};

export const getAllServiceLabelFarsi = (
  langs?: readonly OtherLanguageKey[],
): ServicesPage["labelFarsi"][] => {
  if (!shouldIncludeFarsi(langs)) return [];
  return Object.values(SERVICES_PAGE).map((s) => s.labelFarsi);
};

export const getAllSubcategoryLabels = (): string[] => {
  return unique(
    Object.values(SERVICES_PAGE).flatMap((service) =>
      Object.values(service.subcategories).map((leaf) => leaf.label),
    ),
  );
};

export const getAllSubcategoryLabelsFarsi = (
  langs?: readonly OtherLanguageKey[],
): string[] => {
  if (!shouldIncludeFarsi(langs)) return [];

  return unique(
    Object.values(SERVICES_PAGE).flatMap((service) =>
      Object.values(service.subcategories).map((leaf) => leaf.labelFarsi),
    ),
  );
};

const unique = (items: readonly string[]) =>
  Array.from(new Set(items.filter(Boolean)));
