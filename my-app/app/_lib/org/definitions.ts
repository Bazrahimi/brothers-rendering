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

export type Service = {
  label: string;
  labelFarsi: string; //
  slug: string;
  description: readonly string[];
  image: LeafImage;
  subcategories: ServiceSubCategory;
};
