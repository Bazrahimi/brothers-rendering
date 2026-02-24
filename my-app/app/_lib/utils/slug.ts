// app/_lib/utils/helper.ts

export const unSlugify = (slug: string) =>
  slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

export const slugify = (str: string) =>
  str
    .normalize("NFKD")
    // Keep English letters, Persian letters, numbers, and spaces
    .replace(/[^a-zA-Z0-9\u0600-\u06FF\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .toLowerCase();
