import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";
import type { ServiceGroup, ServiceList, ServiceNode } from "@/app/_lib/org/category/definitions";
import { cn } from "@/app/_lib/utils/cn";


const isServiceList = (node: ServiceNode): node is ServiceList => {
  return (
    typeof node === "object" &&
    node !== null &&
    "label" in node &&
    "items" in node &&
    Array.isArray((node as any).items)
  );
};

function prettifyKey(key: string) {
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function ServiceDetails({
  group,
  level = 0,
}: {
  group: ServiceGroup;
  level?: number;
}) {
  return (
    <div className={cn("space-y-4", level === 0 && "space-y-6")}>
      {Object.entries(group).map(([key, node]) => {
        // ✅ leaf node -> render list
        if (isServiceList(node)) {
          return (
            <div key={key} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <Header as={level === 0 ? "h3" : "h4"} size="xs">
                {node.label}
              </Header>

              {node.items.length ? (
                <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                  {node.items.map((item) => (
                    <li key={item}>
                      <P className="text-sm">{item}</P>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          );
        }

        // ✅ branch node -> render nested group
        return (
          <div key={key} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <Header as={level === 0 ? "h3" : "h4"} size="xs">
              {prettifyKey(key)}
            </Header>

            <div className="mt-4">
              <ServiceDetails group={node} level={level + 1} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
