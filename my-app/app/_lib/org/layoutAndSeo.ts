//app/_lib/org/layoutAndSeo.ts
import { ORG_PROFILE as op } from "./profile";

const themeColor = "#030501";
const manifestPath = "/manifest.json";
const icons = {
  icon: "/icons/favicon.ico",
  apple: "/icons/apple-touch-icon.png",
};

export const LAYOUT_SEO = {
  rootLayout: {
    siteName: op.orgName,
    baseUrl:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : op.website,
  },
  Title: op.orgName,
  description: op.description,
  themeColor: themeColor,
};
