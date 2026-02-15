import { cn } from "@/app/_lib/utils/cn";
import { IMAGE_DEFAULT_BLUR } from "@/app/_ui/image/ImageShimer";
import Image from "next/image";

export default function ServiceLeafImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mt-4 overflow-hidden rounded-xl border border-slate-200 bg-slate-100",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={700}
        className="h-48 w-full object-cover"
        placeholder="blur"
        blurDataURL={IMAGE_DEFAULT_BLUR}
        // nice default for non-critical images:
        loading="lazy"
      />
    </div>
  );
}
