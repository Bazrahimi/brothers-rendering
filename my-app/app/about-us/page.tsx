import { FaCheck } from "react-icons/fa6";
import { orgPages } from "../_lib/org/orgPages";
import { ORG_PROFILE } from "../_lib/org/profile";
import { Header } from "../_ui/typography/Header";
import { P } from "../_ui/typography/paragraph";

const renderParagraphs = (items: string[]) =>
  items.map((item, index) => (
    <P key={index} className="mt-2">
      {item}
    </P>
  ));

const renderTextSection = (
  id: string,
  title: string,
  items: string[],
  headerClassName?: string,
) => {
  if (!items.length) return null;

  return (
    <section aria-labelledby={id}>
      <Header as="h2" size="sm" className={headerClassName}>
        {title}
      </Header>
      {renderParagraphs(items)}
    </section>
  );
};

const AboutUsPage = () => {
  return (
    <main className="my-5 md:my-10">
      <section aria-labelledby="introduction">
        <Header as="h1" align="center" className="mb-5 md:mb-10">
          {`About ${ORG_PROFILE.orgName}`}
        </Header>
        {renderParagraphs(orgPages.aboutUs.introduction)}
      </section>

      {/* Content Stack */}
      <section className="mt-5 md:mt-10 space-y-5 md:space-y-10">
        {renderTextSection("purpose", "Our Pupose", orgPages.aboutUs.purpose)}
        {renderTextSection("vision", "Our Vision", orgPages.aboutUs.vision)}
        <section aria-labelledby="values">
          <Header as="h2" size="sm">
            Our Values
          </Header>
          <ul className="mt-2 space-y-2">
            {orgPages.aboutUs.values.map((value, index) => (
              <li key={index} className="ml-5 flex items-center gap-2">
                <FaCheck
                  className="h-4 w-4 shrink-0 text-green-500"
                  aria-hidden="true"
                />
                <P>{value}</P>
              </li>
            ))}
          </ul>
        </section>
        {renderTextSection(
          "what-we-do",
          "What We Do",
          orgPages.aboutUs.what_we_do,
        )}

        {renderTextSection(
          "governance",
          "Governance and Business Structure",
          orgPages.aboutUs.governance,
        )}
      </section>
    </main>
  );
};

export default AboutUsPage;
