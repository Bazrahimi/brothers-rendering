import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";

import type { TextSection } from "@/app/_lib/org/orgPages/aboutUs";

export default function AboutIntroduction({
  section,
}: {
  section: TextSection;
}) {
  return (
    <section aria-labelledby={section.id}>
      <Header as="h1" size="md" align="center" className="mb-5 md:mb-10">
        {section.title}
      </Header>

      {section.items.map((t, i) => (
        <P key={i} className="mt-2">
          {t}
        </P>
      ))}
    </section>
  );
}
