import { cn } from "@/app/_lib/utils/cn";

const ServiceSectionSkeleton = () => {
  return (
    <section
      className={cn(
        "animate-pulse rounded-3xl border border-slate-200 bg-white/70 p-4 shadow-sm sm:p-6"
      )}
      aria-hidden="true"
    >
      <div className="grid gap-4 lg:grid-cols-12 lg:items-center">
        <div className="h-44 rounded-2xl bg-slate-200 lg:col-span-5" />
        <div className="space-y-3 lg:col-span-7">
          <div className="h-7 w-2/3 rounded-xl bg-slate-200" />
          <div className="h-4 w-full rounded-full bg-slate-200" />
          <div className="h-4 w-5/6 rounded-full bg-slate-200" />
          <div className="h-10 w-40 rounded-xl bg-slate-200" />
        </div>
      </div>
      <div className="mt-5 h-40 rounded-2xl bg-slate-100" />
    </section>
  );
};

export default ServiceSectionSkeleton;
