import { Header } from "../../typography/Header";
import { P } from "../../typography/paragraph";
type HeroHeadAndDescProps = {
  orgName: string;
  orgNameFarsi?: string;
  otherLangKeys?: string[];
  description?: string;
};

export const HeroHeadAndDesc = ({
  orgName,
  orgNameFarsi,
  otherLangKeys,
  description,
}: HeroHeadAndDescProps) => {
  const showFarsiName =
    otherLangKeys?.includes("HZ") || otherLangKeys?.includes("FA");

  return (
    <>
      <Header as="h1" className="text-slate-900">
        {orgName}
      </Header>
      {showFarsiName && orgNameFarsi && (
        <Header as="h1" className="text-slate-700">
          {orgNameFarsi}
        </Header>
      )}
      {description && <P className="text-slate-600">{description}</P>}
    </>
  );
};
