import { Header } from "../typography/Header";
import { P } from "../typography/paragraph";
type Props = {
  heading?: string;
  subHeading?: readonly string[];
  isRtl?: boolean,
};

const PageIntro = ({ heading, subHeading, isRtl=false }: Props) => {
  return (
    <>
      {heading && (
        <Header as="h1" className="my-5 md:mb-10">
          {heading}
        </Header>
      )}

      {subHeading?.map((t, i) => (
        <P key={i} className="indent-6" dir={isRtl ? "rtl" : "ltr"}>
          {t}
        </P>
      ))}
    </>
  );
};

export default PageIntro;
