import type { MetadataRoute } from "next";
import { ORG_PROFILE } from "@/app/_lib/org/profile";
import { ORG_ROOT_SEO } from "@/app/_lib/org/rootSeo.config";

export const ORG_MANIFEST: MetadataRoute.Manifest = {
  name: ORG_PROFILE.orgName,
  short_name: ORG_PROFILE.orgName, // or ORG_PROFILE.shortName
  description: ORG_PROFILE.description,
  start_url: "/",
  scope: "/",
  display: "standalone",
  background_color: "#ffffff",
  theme_color: ORG_ROOT_SEO.themeColor,
  icons: [
    {
      src: "/icons/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
      purpose: "maskable",
    },
    {
      src: "/icons/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "maskable",
    },
  ],
};