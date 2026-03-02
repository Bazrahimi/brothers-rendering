// app/robots.ts
import { ROOT_SEO } from "@/app/_lib/org/layoutAndSeo";
import type { MetadataRoute } from "next";
import { publicEnv } from "./_lib/env/public";

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
    sitemap: `${ROOT_SEO.baseUrl}/sitemap.xml`,
  };
}
