// app/sitemap.ts
import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/app/_lib/org/layoutAndSeo";
import { ORG_PROFILE as op } from "@/app/_lib/org/profile";
import { SERVICES_PAGE } from "@/app/_lib/org/category/services";
import { PublicRoutes } from "@/app/_lib/routes/publicRoutes";
import type { OtherLanguageKey } from "./_lib/languages/multiculturalStatement";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl(PublicRoutes.home()),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl(PublicRoutes.about()),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl(PublicRoutes.contact()),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // ✅ Only include /languages if the org supports other languages
  const otherLangKeys = (op.otherLangKeys ?? []) as OtherLanguageKey[];
  if (otherLangKeys.length > 0) {
    pages.push({
      url: absoluteUrl(PublicRoutes.languages()),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    });

    // Optional: include each /languages/:lang page too
    for (const lang of otherLangKeys) {
      pages.push({
        url: absoluteUrl(PublicRoutes.otherLanguages(lang)),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.45,
      });
    }
  }

  const servicePages: MetadataRoute.Sitemap = Object.values(SERVICES_PAGE).map(
    (service) => ({
      url: absoluteUrl(PublicRoutes.service(service.slug)),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    }),
  );

  return [...pages, ...servicePages];
}