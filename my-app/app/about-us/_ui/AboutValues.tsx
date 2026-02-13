import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";
import { FaCheck } from "react-icons/fa6";

import type { ValuesSection } from "@/app/_lib/org/orgPages/aboutUs";

export default function AboutValues({ section }: { section: ValuesSection }) {
  if (!section.items.length) return null;

  return (
    <section aria-labelledby={section.id}>
      <Header as="h2" size="sm" className="mt-5">
        {section.title}
      </Header>

      <ul className="mt-2 space-y-2">
        {section.items.map((value, i) => (
          <li key={i} className="ml-5 flex items-center gap-2">
            {section.icon === "check" ? (
              <FaCheck
                className="h-4 w-4 shrink-0 text-green-500"
                aria-hidden
              />
            ) : null}
            <P>{value}</P>
          </li>
        ))}
      </ul>
    </section>
  );
}
