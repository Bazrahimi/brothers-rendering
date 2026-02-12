import { ORG_PROFILE } from "@/app/_lib/org/profile";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";

const ContactIntro = () => {
  return (
    <div className="space-y-2 text-center">
      <Header as="h2" align="center">{`Contact ${ORG_PROFILE.orgName}`}</Header>

      <P className="text-gray-700">
        {`A member of the ${ORG_PROFILE.orgName} team will review your enquiry and respond as soon as possible.`}
      </P>
    </div>
  );
};

export default ContactIntro;
