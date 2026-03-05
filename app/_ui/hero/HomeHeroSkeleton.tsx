import { cn } from "@/app/_lib/utils/cn";

type HomeHeroSkeletonProps = {
  className?: string;
};

const bar = "h-4 rounded-full bg-slate-200/90";

const HomeHeroSkeleton = ({ className }: HomeHeroSkeletonProps) => {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white shadow-xl",
        className,
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(148,163,184,0.18),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(148,163,184,0.12),transparent_35%)]" />

      <div className="relative z-10 animate-pulse">
        <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-12 lg:items-center">
          <div className="space-y-6 lg:col-span-7">
            <div className="h-8 w-44 rounded-full bg-slate-200/90" />

            <div className="space-y-5 rounded-3xl border border-slate-200/70 bg-white/80 p-6 sm:p-7">
              <div className="space-y-3">
                <div className="h-10 w-11/12 rounded-2xl bg-slate-200/90" />
                <div className="h-10 w-8/12 rounded-2xl bg-slate-200/90" />
                <div className={cn(bar, "w-full")} />
                <div className={cn(bar, "w-10/12")} />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="h-10 rounded-xl bg-slate-200/90" />
                <div className="h-10 rounded-xl bg-slate-200/90" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-200/70 bg-white/85 p-5 sm:p-6">
              <div className="mx-auto h-44 w-44 rounded-3xl bg-slate-200/90 sm:h-52 sm:w-52" />
              <div className="mx-auto mt-6 h-10 w-2/3 rounded-xl bg-slate-200/90" />
              <div className="mx-auto mt-3 h-4 w-1/2 rounded-full bg-slate-200/90" />
            </div>
          </div>
        </div>

        <div className="space-y-4 border-t border-slate-200/80 p-6 sm:p-8">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="h-11 rounded-xl bg-slate-200/90" />
            <div className="h-11 rounded-xl bg-slate-200/90" />
            <div className="h-11 rounded-xl bg-slate-200/90" />
            <div className="h-11 rounded-xl bg-slate-200/90" />
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="h-12 flex-1 rounded-xl bg-slate-200/90" />
            <div className="h-12 w-full rounded-xl bg-slate-200/90 sm:w-64" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSkeleton;
