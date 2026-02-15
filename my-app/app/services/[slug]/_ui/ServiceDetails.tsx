import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";
import type {
  ServiceGroup,
  ServiceLeaf,
} from "@/app/_lib/org/category/definitions";
import { cn } from "@/app/_lib/utils/cn";
import Image from "next/image";

/** Type guard: leaf node (has label + items). */
const isServiceLeaf = (node: unknown): node is ServiceLeaf => {
  if (!node || typeof node !== "object") return false;

  const n = node as Partial<ServiceLeaf>;
  return (
    typeof n.label === "string" &&
    typeof n.summary === "string" &&
    typeof n.imageUrl === "string" &&
    Array.isArray(n.items)
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
        // ✅ leaf -> render a service card
        if (isServiceLeaf(node)) {
          return (
            <article
              key={key}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <Header as={level === 0 ? "h3" : "h4"} size="xs">
                {node.label}
              </Header>

              {node.summary ? (
                <P className="mt-2 text-sm text-slate-600">{node.summary}</P>
              ) : null}

              {node.imageUrl ? (
                <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
                  {/* If you prefer, swap this to <img> for simplicity. */}
                  <Image
                    src={node.imageUrl}
                    alt={node.label}
                    width={1200}
                    height={700}
                    className="h-48 w-full object-cover"
                  />
                </div>
              ) : null}

              {node.items.length ? (
                <ul className="mt-4 list-disc space-y-1 pl-5 text-slate-700">
                  {node.items.map((item) => (
                    <li key={item}>
                      <P className="text-sm">{item}</P>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          );
        }

        // ✅ branch -> nested group
        const childGroup = node as ServiceGroup;

        return (
          <section
            key={key}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            aria-label={prettifyKey(key)}
          >
            <Header as={level === 0 ? "h3" : "h4"} size="xs">
              {prettifyKey(key)}
            </Header>

            <div className="mt-4">
              <ServiceDetails group={childGroup} level={level + 1} />
            </div>
          </section>
        );
      })}
    </div>
  );
}
