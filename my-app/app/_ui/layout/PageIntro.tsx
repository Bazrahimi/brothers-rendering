import { Header } from "../typography/Header";
import { P } from "../typography/paragraph";
type Props = {
  heading?: string;
  subHeading?: readonly string[];
};

const PageIntro = ({ heading, subHeading }: Props) => {
  return (
    <>
      {heading && (
        <Header as="h1" className="mb-5 md:mb-10">
          {heading}
        </Header>
      )}

      {subHeading?.map((t, i) => (
        <P key={i} className="indent-6">
          {t}
        </P>
      ))}
    </>
  );
};

export default PageIntro;
