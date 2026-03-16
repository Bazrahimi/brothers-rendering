// app/_ui/layout/footer/footer.tsx
// import { BsFillCartFill } from "react-icons/bs";

import { uiFond } from "@/app/_lib/org/font";
import { cn } from "@/app/_lib/utils/cn";
import Acknowledgement from "./Acknowledgement";
import GetInTouch from "./GetInTouch";
import OrganisationInfo from "./OrganisationInfo";
import PoweredByKateb from "./PoweredByKateb";
import QuickLinks from "./QuickLinks";
import SocialLinks from "./SocialLinks";
import ServiceLink from "./ServicesLinks";

// -------------------------------
// Reusable className tokens
// -------------------------------
export const CN = {
  footer: "bg-org-secondary-main py-5",
  wrap: "mx-auto max-w-7xl px-6 py-14",
  grid: "grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 md:grid-cols-4",

  list: "space-y-2 text-sm",
  listDense: "space-y-3 text-sm",
  link: cn(
    uiFond.className,
    "underline underline-offset-4 decoration-black/30 hover:decoration-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 rounded-sm",
  ),
  socialLink:
    "flex items-center gap-2 underline underline-offset-4 decoration-black/30 hover:decoration-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 rounded-sm",
  Item: "flex items-start gap-2",
  Icon: "mt-1 text-black",
  copy: "border-t border-black/20 px-6 py-4 text-center text-xs text-gray-800",
};

// -------------------------------
// Data
// -------------------------------

const Footer = () => {
  return (
    <footer className={CN.footer} role="contentinfo">
      <div className={`${CN.wrap} ${CN.grid}`}>
        {/* Organisation Info */}
        <OrganisationInfo />

        {/* Quick Links */}
        <QuickLinks />
        
        <ServiceLink />
        {/* Get In touch */}
        <GetInTouch />

        {/* Social Media */}
        <SocialLinks />
      </div>

      {/* Acknowledgements */}

      <Acknowledgement />
      <PoweredByKateb  />
    </footer>
  );
};

export default Footer;
