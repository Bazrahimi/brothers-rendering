// app/_ui/layout/footer/footer.tsx
// import { BsFillCartFill } from "react-icons/bs";
import { ORG_PROFILE } from "@/app/_lib/org/profile";

import Acknowledgement from "./Acknowledgement";
import GetInTouch from "./GetInTouch";
import OrganisationInfo from "./OrganisationInfo";
import QuickLinks from "./QuickLinks";
import SocialLinks from "./SocialLinks";

// -------------------------------
// Reusable className tokens
// -------------------------------
export const CN = {
  footer: "mt-16 bg-org-secondary-main",
  wrap: "mx-auto max-w-7xl px-6 py-14",
  grid: "grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 md:grid-cols-4",

  list: "space-y-2 text-sm",
  listDense: "space-y-3 text-sm",
  link: "underline underline-offset-4 decoration-black/30 hover:decoration-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 rounded-sm",
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

        {/* Get In touch */}
        <GetInTouch />

        {/* Social Media */}
        <SocialLinks />

        {/* Administration & Credits */}

        {/* <nav aria-labelledby="account">
          <Header as="h4" id="account" size="sm">
            Account
          </Header>
          <ul className={CN.list}>
            <li className={CN.Item}>
              <IoIosLogIn className={CN.Icon} aria-hidden="true" />
              <Link href={AuthRoutes.login()} className={CN.link}>
                Login
              </Link>
            </li>
            <li className={CN.Item}>
              <MdOutlineJoinInner className={CN.Icon} aria-hidden="true" />
              <Link href={AuthRoutes.signUp()} className={CN.link}>
                Sign Up
              </Link>
            </li>
            <li className={CN.Item}>
              <BsFillCartFill className={CN.Icon} aria-hidden="true" />
              <Link href={ShopRoutes.shopCart()} className={CN.link}>
                My Cart
              </Link>
            </li>
          </ul>
        </nav> */}
      </div>

      {/* Acknowledgements */}

      <Acknowledgement />
      {/* Copyright */}
      <div className={CN.copy}>
        © {new Date().getFullYear()} {ORG_PROFILE.orgName}. All rights reserved.
        | Powered by{" "}
        <a
          href="https://github.com/Bazrahimi"
          target="_blank"
          rel="noopener noreferrer"
          className={CN.link}
        >
          Baz Rahimi
        </a>
      </div>
    </footer>
  );
};

export default Footer;
