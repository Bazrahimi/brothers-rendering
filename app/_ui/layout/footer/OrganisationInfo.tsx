import { ORG_PROFILE } from "@/app/_lib/org/profile";
import { Header } from "../../typography/Header";
import { P } from "../../typography/paragraph";

const OrganisationInfo = () => {
  return (
    <div className="sm:col-span-2">
      <Header as="h4" size="sm" align="left">
        {ORG_PROFILE.orgName}
      </Header>
      <P size="md" className="text-gray-900">
        {ORG_PROFILE.description}
      </P>
      <P className="mt-2 " size="sm">
        <span className="font-medium">ABN:</span> {ORG_PROFILE.abn}
      </P>
      <P className="mt-2" size="sm">
        {ORG_PROFILE.address}
      </P>
    </div>
  );
};

export default OrganisationInfo;
