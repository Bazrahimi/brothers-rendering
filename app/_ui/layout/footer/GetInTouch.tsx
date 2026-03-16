import { HiPhone } from "react-icons/hi";

import { ORG_PROFILE } from "@/app/_lib/org/profile";
import { PublicRoutes } from "@/app/_lib/routes/publicRoutes";
import Link from "next/link";
import { FaWpforms } from "react-icons/fa6";
import {
  // HiLocationMarker,
  HiMail,
} from "react-icons/hi";
import { Header } from "../../typography/Header";
import { CN } from "./Footer";

const CONTACT = {
  email: ORG_PROFILE.email,
  ...(ORG_PROFILE.phone && {
    phone: ORG_PROFILE.phone,
  }),
  address: ORG_PROFILE.address,
};

const GetInTouch = () => {
  return (
    <address className="not-italic" aria-labelledby="contact-heading">
      <Header as="h4" id="contact-heading" size="sm" align="left">
        Get in touch
      </Header>
      <ul className={CN.listDense}>
        <li className={CN.Item}>
          <FaWpforms className={CN.Icon} aria-hidden="true" />
          <Link href={PublicRoutes.contact()} className={CN.link}>
            Quick Enquiry
          </Link>
        </li>

        <li className={CN.Item}>
          <HiMail className={CN.Icon} aria-hidden="true" />
          <a href={`mailto:${CONTACT.email}`} className={CN.link}>
            {CONTACT.email}
          </a>
        </li>
        <li className={CN.Item}>
          <HiPhone className={CN.Icon} aria-hidden="true" />
          <a
            href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
            className={CN.link}
          >
            {CONTACT.phone}
          </a>
        </li>
      </ul>
    </address>
  );
};

export default GetInTouch;
