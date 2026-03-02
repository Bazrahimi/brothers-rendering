// app/robots.ts
import type { MetadataRoute } from "next";
import { publicEnv } from "./_lib/env/public";
import { ORG_PROFILE } from "./_lib/org/profile";

const allowIndexing = publicEnv.allowIndexing === "true";

export default function robots(): MetadataRoute.Robots {
  if (!allowIndexing) {
    return {
      rules: [
        {
          userAgent: "*",
          disallow: "/",
        },
      ],
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${ORG_PROFILE.baseUrl}/sitemap.xml`,
  };
}
