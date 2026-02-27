import { SERVICES_PAGE } from "@/app/_lib/org/category/services";
import { toOtherLangProps } from "@/app/_lib/org/category/serviceLookup";
import ServicesOtherLanguages from "./otherLanguages/ServicesOtherLanguages";

const OtherLanguagesSnapshot = () => {
  return (
    <section className="space-y-6">
      {Object.entries(SERVICES_PAGE).map(([key, service]) => (
        <div key={key}>
          <ServicesOtherLanguages {...toOtherLangProps(service)} />
        </div>
      ))}
    </section>
  );
};

export default OtherLanguagesSnapshot;
