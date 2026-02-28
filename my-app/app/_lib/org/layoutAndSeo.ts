// app/_lib/org/layoutAndSeo.ts
import type { Metadata, Viewport } from "next";
import { ORG_PROFILE as op } from "./profile";

/**
 * Central source of truth for layout + SEO defaults.
 * Goal: ship fast + keep consistent across all sites.
 */

export type RootSeoConfig = {
  siteName: string;
  baseUrl: string; // must be absolute e.g. https://example.com
  themeColor: string;
  manifestPath: string;
  icons: {
    icon: string;
    apple: string;
  };
  defaultOgImagePath: string; // should start with "/"
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
  canonicalPathname: `/${string}` | "/";
  /**
   * Optional override OG image
   */
  ogImagePath?: `/${string}`;
  /**
   * Optional keywords (nice for small biz templates; not critical)
   */
  keywords?: string[];
  /**
   * Optional "noindex" for staging/private pages
   */
  noindex?: boolean;
};

/** Always return a correct absolute base URL. */
export function getBaseUrl(): string {
  // In dev, always point to localhost.
  if (process.env.NODE_ENV === "development") return "http://localhost:3000";

  // op.website should already be absolute ("https://domain.com").
  // If someone accidentally sets "domain.com" we guard below.
  const w = op.website?.trim();
  if (!w) return "https://example.com";

  if (w.startsWith("http://") || w.startsWith("https://")) return w;

  return `https://${w}`;
}

export const ROOT_SEO: RootSeoConfig = {
  siteName: op.orgName,
  baseUrl: getBaseUrl(),
  themeColor: "#030501",
  manifestPath: "/manifest.json",
  icons: {
    icon: "/icons/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
  // ✅ use leading slash so URL joining is reliable
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
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${ROOT_SEO.baseUrl}${clean}`;
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
    metadataBase: new URL(ROOT_SEO.baseUrl),

    title: {
      default: ROOT_SEO.siteName,
      template: `%s | ${ROOT_SEO.siteName}`,
    },

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
      ? { index: false, follow: false, googleBot: { index: false, follow: false } }
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
export function seoPage(input: Omit<PageSeo, "title" | "description"> & Partial<Pick<PageSeo, "title" | "description">>): PageSeo {
  return {
    title: input.title ?? op.orgName,
    description: input.description ?? op.description,
    canonicalPathname: input.canonicalPathname,
    ogImagePath: input.ogImagePath,
    keywords: input.keywords,
    noindex: input.noindex,
  };
}