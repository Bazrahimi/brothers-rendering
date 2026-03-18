import { PublicRoutes } from "@/app/_lib/routes/publicRoutes";
import Image from "next/image";
import Link from "next/link";
import { publicAssets } from "@/app/_lib/org/publicAssets";
import { ORG_PROFILE } from "@/app/_lib/org/profile";
import NavLinks from "./NavLinks";


const Navbar = () => {
  return (
    <nav
      className="
        sticky top-0 z-100
        flex h-16 w-full items-center justify-between
        border-b border-white/10
        bg-org-primary-main/90
        px-4 sm:px-6
        text-white
        backdrop-blur
        supports-[backdrop-filter]:bg-org-primary-main/80
      "
    >
      <div className="flex items-center gap-4">
        <Link
          href={PublicRoutes.home()}
          className="inline-flex items-center gap-2"
        >
          <Image
            src={publicAssets.icons.icon}
            alt={`${ORG_PROFILE.orgName} Logo`}
            width={28}
            height={28}
            className="rounded-full bg-white p-1 transition duration-200 hover:opacity-80"
            priority
          />
          <span className="hidden text-sm font-semibold sm:inline">
            {ORG_PROFILE.orgName}
          </span>
        </Link>
      </div>
      <div className="flex items-start">
        <NavLinks />

      </div>
    </nav>
  );
};

export default Navbar;
