import type { Metadata } from "next";
export type ImageMeta = {
  url: string;
  alt: string;
};

export type RootSeoConfig = {
  siteName: string;

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
