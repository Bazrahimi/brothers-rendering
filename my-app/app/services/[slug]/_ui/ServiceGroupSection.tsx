import { Header } from "@/app/_ui/typography/Header";
import { prettifyKey } from "@/app/_lib/org/category/definitions";

export function ServiceGroupSection({
  groupKey,
  level,
  children,
}: {
  groupKey: string;
  level: number;
  children: React.ReactNode;
}) {
  return (
    <section
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
      aria-label={prettifyKey(groupKey)}
    >
      <Header as={level === 0 ? "h2" : "h3"} size="sm" align="center">
        {prettifyKey(groupKey)}
      </Header>

      <div className="mt-4">{children}</div>
    </section>
  );
}
