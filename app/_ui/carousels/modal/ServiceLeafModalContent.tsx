import ServiceLeafImage from "@/app/(pages)/services/[slug]/_ui/ServiceLeafImage";
import type { ServiceLeaf } from "@/app/_lib/org/definitions";
import List from "@/app/_ui/content/List";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";

type Props = {
  leaf: ServiceLeaf;
  leafId: string;
};

export default function ServiceLeafModalContent({ leaf, leafId }: Props) {
  const hasItems = leaf.items.length > 0;

  return (
    <article id={leafId} className="scroll-mt-24">
      <div className="grid gap-5 sm:grid-cols-12 sm:items-start">
        <header className="space-y-3 sm:col-span-12">
          <Header as="h2">{leaf.label}</Header>

          {leaf.description?.map((text, i) => (
            <P key={i} className="indent-6">
              {text}
            </P>
          ))}
        </header>

        {hasItems && (
          <section className="sm:col-span-6">
            <div className="mb-4 h-px w-full bg-slate-200/70" />
            <List items={leaf.items} />
          </section>
        )}

        <aside className={hasItems ? "sm:col-span-6" : "sm:col-span-12"}>
          <ServiceLeafImage image={leaf.image}  />
        </aside>
      </div>
    </article>
  );
}
