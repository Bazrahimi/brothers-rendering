import { Suspense } from "react";
import ImageGalleryClient from "./ImageGalleryClient";

import type { ImageMeta } from "@/app/_lib/definitions";

export type ImageGalleryProps = {
  images: ImageMeta[];
  priorityFirstImage?: boolean;
};

const GalleryFallback = () => (
  <div className="space-y-3 animate-pulse">
    <div className="aspect-[16/10] w-full rounded-2xl bg-slate-200" />
    <div className="grid grid-cols-3 gap-3">
      <div className="aspect-[4/3] rounded-xl bg-slate-200" />
      <div className="aspect-[4/3] rounded-xl bg-slate-200" />
      <div className="aspect-[4/3] rounded-xl bg-slate-200" />
    </div>
  </div>
);

const ImageGallery = ({ images, priorityFirstImage }: ImageGalleryProps) => {
  if (!images?.length) return null;

  return (
    <Suspense fallback={<GalleryFallback />}>
      <ImageGalleryClient
        images={images}
        priorityFirstImage={priorityFirstImage}
      />
    </Suspense>
  );
};

export default ImageGallery;
