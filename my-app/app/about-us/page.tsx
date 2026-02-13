import { Fragment } from "react";
import { FaCheck } from "react-icons/fa6";
import { aboutUs } from "../_lib/org/orgPages";
import { Header } from "../_ui/typography/Header";
import { P } from "../_ui/typography/paragraph";

const renderParagraphs = (items: readonly string[]) =>
  items.map((item, idx) => (
    <P key={idx} className="mt-2">
      {item}
    </P>
  ));

const renderSection = (s: (typeof aboutUs.sections)[number]) => {
  const headingTag = s.headingTag ?? "h2";
  const headingSize = s.headingSize ?? "sm";
  const headingAlign = s.headingAlign ?? "left";

  if (s.type === "text") {
    if (!s.items.length) return null;
    return (
      <section aria-labelledby={s.id}>
        <Header
          as={headingTag}
          size={headingSize}
          align={headingAlign}
          className={s.headerClassName}
        >
          {s.title}
        </Header>
        {renderParagraphs(s.items)}
      </section>
    );
  }

  // list
  if (!s.items.length) return null;
  return (
    <section aria-labelledby={s.id}>
      <Header
        as={headingTag}
        size={headingSize}
        align={headingAlign}
        className={s.headerClassName ?? "mt-5"}
      >
        {s.title}
      </Header>

      <ul className="mt-2 space-y-2">
        {s.items.map((value, idx) => (
          <li key={idx} className="ml-5 flex items-center gap-2">
            {s.icon === "check" ? (
              <FaCheck className="h-4 w-4 shrink-0 text-green-500" aria-hidden />
            ) : null}
            <P>{value}</P>
          </li>
        ))}
      </ul>
    </section>
  );
};

const AboutUsPage = () => {
  return (
    <main className="my-5 md:my-10 space-y-5 md:space-y-10">
      {aboutUs.sections.map((s) => (
        <Fragment key={s.id}>{renderSection(s)}</Fragment>
      ))}
    </main>
  );
};

export default AboutUsPage;
