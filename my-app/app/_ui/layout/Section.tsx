import { cn } from "@/app/_lib/utils/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  labelledBy?: string;
};

export default function Section({
  children,
  className,
  id,
  labelledBy,
}: Props) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "scroll-mt-24 rounded-b-3xl border border-slate-200 bg-gray-50 shadow-sm p-6 sm:p-8",
        className,
      )}
    >
      {children}
    </section>
  );
}
