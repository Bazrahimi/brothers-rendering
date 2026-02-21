
import { cn } from "@/app/_lib/utils/cn";
export default function CarouselSkeleton({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "min-h-85 rounded-2xl border border-slate-200 bg-slate-50",
        className
      )}
    />
  );
}
