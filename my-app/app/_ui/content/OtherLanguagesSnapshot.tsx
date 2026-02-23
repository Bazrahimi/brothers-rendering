import { SERVICES } from "@/app/_lib/org/category/services";
import { toOtherLangProps } from "@/app/_lib/org/helper";
import ServicesOtherLanguages from "./otherLanguages/ServicesOtherLanguages";

const OtherLanguagesSnapshot = () => {
  return (
    <section className="space-y-6">
      {Object.entries(SERVICES).map(([key, service]) => (
        <div key={key}>
          <ServicesOtherLanguages {...toOtherLangProps(service)} />
        </div>
      ))}
    </section>
  );
};

export default OtherLanguagesSnapshot;
