// app/manifest.ts
import { ORG_PROFILE as op } from "@/app/_lib/org/profile";
import type { MetadataRoute } from "next";
import { publicAssets } from "./_lib/org/publicAssets";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: op.orgName,
    short_name: op.orgName, // or a shorter brand name if you have one
    description: op.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    theme_color: op.primaryColor,
    background_color: op.secondaryColor,

    // ✅ IMPORTANT: Next's typings do NOT allow "any maskable" as one string.
    // Add separate icon entries for "any" and "maskable".
    icons: [
      {
        src: publicAssets.icons.apple,
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: publicAssets.icons.apple,
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
