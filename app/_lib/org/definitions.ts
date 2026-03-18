export type LeafImage =
  | { kind: "url"; src: string }
  | { kind: "svg"; text: string };

  

export type ServiceLeaf = {
  label: string;
  labelFarsi: string;
  description: string[];
  image: LeafImage;
  items: readonly string[];
};

export type ServiceSubCategory = {
  [key: string]: ServiceLeaf;
};

export type ServicesPage = {
  label: string;
  labelFarsi: string; //
  slug: string;
  description: readonly string[];
  image: LeafImage;
  subcategories: ServiceSubCategory;
};

export type OrgRootSeo = {
  ogImagePath: string;
  themeColor: string;
  manifestPath: string;
  icons: {
    icon: string;
    apple: string;
  };
  locale: {
    default: string; // e.g. "en_AU"
    alternates?: string[];
  };
  robots: {
    index: boolean;
    follow: boolean;
  };
};
