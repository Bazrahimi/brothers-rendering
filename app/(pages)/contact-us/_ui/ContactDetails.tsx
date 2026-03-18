import { CONTACT_FAQS, OPENING_HOURS } from "@/app/_lib/org/orgPages/contactUs";
import { ORG_PROFILE } from "@/app/_lib/org/profile";
import { cn } from "@/app/_lib/utils/cn";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";
import Link from "next/link";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import MultiLanguageCapacity from "@/app/_ui/content/MultiLanguageCapacity";
import ContactFAQ from "./ContactFAQ";
import ContactMap from "./ContactMap";
import OpeningHours from "./OpeningHours";
import ServiceArea from "./ServiceArea";

const ContactDetails = () => {
  const {
    phone,
    email,
    address,
    otherLangKeys,
    orgNameFarsi,
  } = ORG_PROFILE;



  // Basic safe formatting for tel: (remove spaces/brackets/dashes)
  const telHref = phone ? `tel:${phone.replace(/[^\d+]/g, "")}` : null;
  const mailHref = email ? `mailto:${email}` : null;

  // Free map link (Google Maps query)
  const mapsHref = address
    ? `https://www.google.com/maps?q=${encodeURIComponent(address)}`
    : null;

  const linkBase = cn(
    "inline-flex items-center gap-2 rounded-md px-2 py-1",
    "hover:bg-white hover:shadow-sm",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40",
  );

  return (
    <div className="space-y-5">
      {/* Intro */}
      <div className="space-y-1">
        <Header as="h3" size="sm">
          Prefer to reach us directly?
        </Header>
        <P className=" text-gray-600 text-center" size="sm">
          You can call, email, or visit us using the details below.
        </P>
      </div>
      <div className="mt-3 grid grid-cols-1 gap-3 rounded-lg bg-gray-50 p-3 text-gray-800 sm:grid-cols-2">
        {/* Phone */}
        {phone && telHref && (
          <P size="sm" className="flex items-center">
            <Link
              href={telHref}
              className={linkBase}
              aria-label={`Call ${ORG_PROFILE.orgName} on ${phone}`}
            >
              <MdPhone className="text-gray-600" aria-hidden />
              <span className="font-medium">{phone}</span>
            </Link>
          </P>
        )}

        {/* Email */}
        {email && mailHref && (
          <P size="sm" className="flex items-center">
            <Link
              href={mailHref}
              className={linkBase}
              aria-label={`Email ${ORG_PROFILE.orgName} at ${email}`}
            >
              <MdEmail className="text-gray-600" aria-hidden />
              <span className="font-medium">{email}</span>
            </Link>
          </P>
        )}

        {/* Address / Map */}
        {address && mapsHref && (
          <P size="sm" className="flex items-center sm:col-span-2">
            <Link
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className={linkBase}
              aria-label={`Open ${ORG_PROFILE.orgName} address in Google Maps`}
            >
              <MdLocationOn className="text-gray-600" aria-hidden />
              <span className="font-medium">{address}</span>
            </Link>
          </P>
        )}
      </div>

      <OpeningHours hours={OPENING_HOURS} />
      {otherLangKeys.length && (
        <MultiLanguageCapacity
          otherLangKeys={otherLangKeys}
          orgNameFarsi={orgNameFarsi}
        />
      )}

      <ContactFAQ items={CONTACT_FAQS} />
      <ServiceArea />
      {/* Embedded Map */}
      {address && <ContactMap address={address} />}
    </div>
  );
};

export default ContactDetails;
