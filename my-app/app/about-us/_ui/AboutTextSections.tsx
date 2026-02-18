import type { TextSection } from "@/app/_lib/org/orgPages/aboutUs";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";

export default function AboutTextSections({
  sections,
}: {
  sections: readonly TextSection[];
}) {
  return (
    <section className="space-y-5 md:space-y-10">
      {sections.map((s) => (
        <section key={s.id} aria-labelledby={s.id}>
          <Header as="h2" size="sm">
            {s.title}
          </Header>

          {s.items.map((t, i) => (
            <P key={i} className="indent-6">
              {t}
            </P>
          ))}
        </section>
      ))}
    </section>
  );
}
