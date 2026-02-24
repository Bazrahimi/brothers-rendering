import { Header } from "@/app/_ui/typography/Header";

import type { ValuesSection } from "@/app/_lib/org/orgPages/aboutUs";
import List from "@/app/_ui/content/List";

export default function AboutValues({ section }: { section: ValuesSection }) {
  if (!section.items.length) return null;

  return (
    <section aria-labelledby={section.id}>
      <Header as="h2" size="sm" className="mt-5">
        {section.title}
      </Header>

      <List items={section.items} className="mt-2 ml-5" />
    </section>
  );
}
