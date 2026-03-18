import { cldLeafAuto } from "@/app/_lib/cloudinary/cloudinary";
import type { ImageMeta } from "@/app/_lib/definitions";
import { cn } from "@/app/_lib/utils/cn";
import { IMAGE_DEFAULT_BLUR } from "@/app/_ui/image/ImageShimer";

import Image from "next/image";

export default function ServiceLeafImage({
  image,
  aspect = "aspect-[2/1]", // default ratio
}: {
  image: ImageMeta[];
  aspect?: string;
}) {
  const primaryImage = image[0];
  if (!primaryImage) return null;

  return (
    <div className={cn("relative overflow-hidden rounded-2xl", aspect)}>
      <Image
        src={cldLeafAuto(primaryImage.url)}
        alt={primaryImage.alt}
        fill
        sizes="(min-width: 640px) 50vw, 100vw"
        className="object-cover"
        loading="lazy"
        placeholder="blur"
        blurDataURL={IMAGE_DEFAULT_BLUR}
      />
    </div>
  );
}
