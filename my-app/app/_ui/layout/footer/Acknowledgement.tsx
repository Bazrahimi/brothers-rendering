import { ORG_PROFILE } from "@/app/_lib/org/profile";
import { Header } from "../../typography/Header";
import { P } from "../../typography/paragraph";

const Acknowledgement = () => {
  return (
    <section
      aria-labelledby="ack-heading"
      className="mx-auto mt-10 max-w-7xl px-6"
      role="region"
    >
      <div className="relative overflow-hidden rounded-lg border border-black/10 bg-org-secondary-dark p-4 sm:p-5">
        <span
          aria-hidden="true"
          className="absolute left-0 top-0 h-full w-1.5 bg-[linear-gradient(to_bottom,#000000,#CC0000,#FFFF00)]"
        />

        <Header
          as="h4"
          id="ack-heading"
          className="mb-2 text-sm font-semibold text-org-primary-main"
        >
          Acknowledgements
        </Header>

        {/* Country Acknowledgement */}
        <P className="  text-gray-900" size="sm">
          {ORG_PROFILE.orgName} acknowledges the Bunurong people of the Kulin
          Nation as the Traditional Custodians of the lands and waters in and
          around Greater Dandenong. We pay our respects to Elders past and
          present and extend that respect to all Aboriginal and Torres Strait
          Islander peoples. We honour their enduring connection to Country,
          culture, and community.
        </P>

        {/* Hazara Acknowledgement */}
        <P className=" text-gray-900 mt-3" size="sm">
          We also acknowledge Australian Hazara communities and their valued
          contributions to a more connected, compassionate, and inclusive
          Australia. We recognise the historical genocide and enduring
          persecution of Hazara people. As with First Nations stories, we honour
          the strength of those who carry this history while protecting culture,
          sustaining community, and building belonging across generations.
        </P>
      </div>
    </section>
  );
};

export default Acknowledgement;
