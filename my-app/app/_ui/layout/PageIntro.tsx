import { Header } from "../typography/Header";
import { P } from "../typography/paragraph";
type Props = {
  heading: string;
  subHeading?: readonly string[];
};

const PageIntro = ({ heading, subHeading }: Props) => {
  return (
    <>
      <Header as="h1" size="md" align="center" className="mb-5 md:mb-10">
        {heading}
      </Header>

      {subHeading?.map((t, i) => (
        <P key={i} className="mt-2">
          {t}
        </P>
      ))}
    </>
  );
};

export default PageIntro;
