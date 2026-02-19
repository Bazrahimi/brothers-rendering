import { cldLeafAuto } from "@/app/_lib/cloudinary/cloudinary";
import type { LeafImage } from "@/app/_lib/org/definitions";
import { svgFromText } from "@/app/_ui/image/svgFromText";
import Image from "next/image";

export default function ServiceLeafImage({
  image,
  alt,
}: {
  image: LeafImage;
  alt: string;
}) {
  const src =
    image.kind === "url" ? cldLeafAuto(image.src) : svgFromText(image.text);

  const isDataUrl = src.startsWith("data:image/");

  return (
    <div className="relative overflow-hidden rounded-2xl aspect-2/1 ">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 640px) 50vw, 100vw"
        className="object-cover"
        loading="lazy"
        unoptimized={isDataUrl}
      />
    </div>
  );
}
