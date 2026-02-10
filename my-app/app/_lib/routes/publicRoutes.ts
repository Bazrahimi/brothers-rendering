export const PublicRoutes = {
  home: () => "/",
  about: () => "/about-us",
  contact: () => "/contact-us",
  service: (slug:string) => `/services/${slug}`
} as const;
