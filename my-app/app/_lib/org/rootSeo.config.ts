import type { OrgRootSeo } from "./definitions";

export const ORG_ROOT_SEO = {
  ogImagePath: "/images/og_image.png",
  themeColor: "#0b254d",
  manifestPath: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
  locale: {
    default: "en_AU",
    alternates: ["fa_IR"],
  },
  robots: {
    index: true,
    follow: true,
  },
} satisfies OrgRootSeo;