import { cn } from "@/app/_lib/utils/cn";
import { IMAGE_DEFAULT_BLUR } from "@/app/_ui/image/ImageShimer"; // use your existing file
import Image from "next/image";

export default function ServiceLeafImage({
  src,
  alt,
  className,
  imgClassName,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}) {
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
        placeholder="blur"
        blurDataURL={IMAGE_DEFAULT_BLUR}
        loading="lazy"
      />
    </div>
  );
}
