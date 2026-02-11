import { ORG_PROFILE } from "@/app/_lib/org/profile";
import { cn } from "@/app/_lib/utils/cn";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";
import Link from "next/link";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const ContactHeader = () => {
  const phone = ORG_PROFILE.phone?.trim();
  const email = ORG_PROFILE.email?.trim();
  const address = ORG_PROFILE.address?.trim();

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
    <>
      <div className="space-y-1">
        <Header align="center" as="h2">
          {`Contact ${ORG_PROFILE.orgName}`}
        </Header>

        <P className="text-gray-700">
          {`We’ll get back to you as soon as possible.`}
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
    </>
  );
};

export default ContactHeader;
