// app/manifest.ts
import { ORG_ICONS } from "@/app/_lib/org/icons";
import { ROOT_SEO } from "@/app/_lib/org/layoutAndSeo";
import { ORG_PROFILE as op } from "@/app/_lib/org/profile";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: op.orgName,
    short_name: op.orgName, // or a shorter brand name if you have one
    description: op.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#1ba174",
    theme_color: ROOT_SEO.themeColor,

    // ✅ IMPORTANT: Next's typings do NOT allow "any maskable" as one string.
    // Add separate icon entries for "any" and "maskable".
    icons: [
      // Any
      {
        src: ORG_ICONS.android256,
        sizes: "256x256",
        type: "image/png",
        purpose: "any",
      },
      {
        src: ORG_ICONS.android512,
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },

      // Maskable
      {
        src: ORG_ICONS.android256,
        sizes: "256x256",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: ORG_ICONS.android512,
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
