// app/_lib/org/layoutAndSeo.ts
import type { Metadata, Viewport } from "next";
import { PublicRoutes } from "../routes/publicRoutes";
import { images } from "./assets";
import { getHomeServiceKeywords } from "./category/serviceLookup";
import { getBaseUrl, ORG_PROFILE as op } from "./profile";
import { SERVICE_AREA } from "./serviceArea";

export type RootSeoConfig = {
  siteName: string;
  themeColor: string;
  manifestPath: string;
  icons: NonNullable<Metadata["icons"]>;
  defaultOgImagePath: string;
  robots: Metadata["robots"];
};

/**
 * Per-page SEO input.
 * Keep only what changes per page.
 */
export type PageSeo = {
  title: string; // page title (without template suffix)
  description: string;
  /**
   * Canonical pathname, e.g. "/" "/about-us" "/contact-us"
   * We build absolute canonical using ROOT_SEO.baseUrl
   */
  canonicalPathname: string;
  /**
   * Optional override OG image
   */
  ogImagePath?: string;
  /**
   * Optional keywords (nice for small biz templates; not critical)
   */
  keywords?: string[];
  /**
   * Optional "noindex" for staging/private pages
   */
  noindex?: boolean;
};

export const ROOT_SEO: RootSeoConfig = {
  siteName: op.orgName,
  themeColor: "#030501",
  manifestPath: "/manifest.webmanifest",
  icons: {
    icon: images.icon.icon,
    apple: images.icon.apple,
  },
  defaultOgImagePath: "/images/og_image.png",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

/**
 * Convert a pathname or path into an absolute URL.
 * - "/images/og.png" => "https://site.com/images/og.png"
 * - "images/og.png"  => "https://site.com/images/og.png"
 */
export function absoluteUrl(path: string): string {
  return `${getBaseUrl()}${path}`;
}

/**
 * ✅ Central viewport export.
 * Put this in app/layout.tsx: `export { viewport } from ...`
 */
export const viewport: Viewport = {
  themeColor: ROOT_SEO.themeColor,
};

/**
 * Build consistent metadata for any page.
 * Use this inside:
 * - app/layout.tsx  (global defaults)
 * - app/page.tsx, app/about-us/page.tsx, app/contact-us/page.tsx (page overrides)
 */
export function buildMetadata(page: PageSeo): Metadata {
  const canonical = absoluteUrl(page.canonicalPathname);
  const ogImage = absoluteUrl(page.ogImagePath ?? ROOT_SEO.defaultOgImagePath);

  return {
    metadataBase: new URL(getBaseUrl()),

    title: page.title,

    // Page-level title/description
    // (In App Router: this merges nicely with template)
    description: page.description,

    alternates: { canonical },

    manifest: ROOT_SEO.manifestPath,
    icons: ROOT_SEO.icons,

    // Robots:
    // - Keep defaults index/follow
    // - allow page.noindex to override
    robots: page.noindex
      ? {
          index: false,
          follow: false,
          googleBot: { index: false, follow: false },
        }
      : ROOT_SEO.robots,

    keywords: page.keywords,

    openGraph: {
      type: "website",
      siteName: ROOT_SEO.siteName,
      url: canonical,
      title: page.title,
      description: page.description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${ROOT_SEO.siteName} preview`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [ogImage],
    },

    // Optional niceties for small biz:
    other: {
      // prevents iOS auto-detecting phone numbers into blue links
      "format-detection": "telephone=no",
    },
  };
}

/**
 * A tiny helper to create per-page SEO objects quickly.
 * (Just avoids repeating op/orgName everywhere.)
 */
export function seoPage(
  input: Omit<PageSeo, "title" | "description"> &
    Partial<Pick<PageSeo, "title" | "description">>,
): PageSeo {
  return {
    title: input.title ?? op.orgName,
    description: input.description ?? op.description,
    canonicalPathname: input.canonicalPathname,
    ogImagePath: input.ogImagePath,
    keywords: input.keywords,
    noindex: input.noindex,
  };
}

const locationKeywords = [
  SERVICE_AREA.primaryRegion,
  SERVICE_AREA.state,
  SERVICE_AREA.country,
];

// Central, reuseable SEO configs
export const SEO_PAGES = {
  home: (): PageSeo => ({
    canonicalPathname: PublicRoutes.home(),
    title: op.orgName,
    description: op.description,
    keywords: [
      op.orgName,
      ...locationKeywords,
      ...getHomeServiceKeywords(op.otherLangKeys),
    ],
  }),
  about: (): PageSeo => ({
    canonicalPathname: PublicRoutes.about(),
    title: `About ${op.orgName}`,
    description: `Learn about ${op.orgName}, our experience, values, and the team behind our rendering and cladding work in Melbourne.`,
    keywords: [
      op.orgName,
      `About ${op.orgName}`,
      "Render",
      "Rendering",
      "Solid Plastering",
      ...locationKeywords,
    ],
  }),

  contact: (): PageSeo => ({
    canonicalPathname: PublicRoutes.contact(),
    title: `Contact ${op.orgName}`,
    description: `Request a free quote or free consultation or send an enquiry to ${op.orgName}. We service South East Melbourne and surrounding suburbs.`,
    keywords: [
      op.orgName,
      `Contact ${op.orgName}`,
      "Render Quote",
      "rendering",
      SERVICE_AREA.primaryRegion,
      ...(SERVICE_AREA.featuredSuburbs ?? []),
    ],
  }),

  // Dynamic helper for services
  service: (input: {
    slug: string;
    label: string;
    description: string;
    keywords?: string[];
    ogImagePath?: string;
  }): PageSeo => ({
    canonicalPathname: PublicRoutes.service(input.slug),
    title: `${input.label} | ${op.orgName}`,
    description: input.description,
    keywords: [op.orgName, ...(input.keywords ?? [])],
    ogImagePath: input.ogImagePath,
  }),
};
