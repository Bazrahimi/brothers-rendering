import { LeafImage } from "@/app/_lib/org/category/definitions";
import { cldCardHeroAuto } from "@/app/_lib/cloudinary/cloudinary";
import { svgFromText } from "@/app/_ui/image/svgFromText";
import { cn } from "@/app/_lib/utils/cn";
import { IMAGE_DEFAULT_BLUR } from "@/app/_ui/image/ImageShimer";
import Image from "next/image";

export default function ServiceLeafImage({
  image,
  alt,
  className,
  imgClassName,
}: {
  image: LeafImage;
  alt: string;
  className?: string;
  imgClassName?: string;
}) {
  // ✅ Type-safe narrowing
  let src: string;

  if (image.kind === "url") {
    src = cldCardHeroAuto(image.src);
  } else {
    src = svgFromText(image.text);
  }

  const isDataUrl = src.startsWith("data:image/");

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-slate-200 bg-slate-100",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={900}
        className={cn("h-full w-full object-cover", imgClassName)}
        loading="lazy"
        {...(!isDataUrl && {
          placeholder: "blur" as const,
          blurDataURL: IMAGE_DEFAULT_BLUR,
        })}
      />
    </div>
  );
}
