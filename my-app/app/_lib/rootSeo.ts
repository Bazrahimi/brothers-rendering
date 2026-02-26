import { ORG_PROFILE as op } from "@/app/_lib/org/profile";
import { ORG_ROOT_SEO as ors } from "@/app/_lib/org/rootSeo.config";

const normalizeBaseUrl = (url: string) => url.replace(/\/+$/, "");
const DEV_BASE_URL = "http://localhost:3000";

export const ROOT_SEO = {
  siteName: op.orgName,
  baseUrl: normalizeBaseUrl(
    process.env.NODE_ENV === "development" ? DEV_BASE_URL : op.website,
  ),

  title: op.orgName,
  description: op.description,

  ogImagePath: ors.ogImagePath,
  themeColor: ors.themeColor,
  manifestPath: ors.manifestPath,
  icons: ors.icons,
  locale: ors.locale,
  robots: ors.robots,
} as const;

export function absoluteUrl(pathOrUrl: string): string {
  if (!pathOrUrl) return `${ROOT_SEO.baseUrl}${ROOT_SEO.ogImagePath}`;
  if (pathOrUrl.startsWith("http") || pathOrUrl.startsWith("//"))
    return pathOrUrl;
  return `${ROOT_SEO.baseUrl}${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`;
}

export function canonicalPath(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${ROOT_SEO.baseUrl}${p}`;
}
