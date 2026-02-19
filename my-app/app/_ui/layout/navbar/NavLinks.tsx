import { PublicRoutes } from "@/app/_lib/routes/publicRoutes";
import Link from "next/link";

import Languages from "./OtherLanguages";
import ServicesMenuClient from "./ServiceMenu";

export const navLinksClasses =
  "rounded-md px-3 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-white";
export default function NavLinks() {
  return (
    <div className="flex items-center gap-1">
      <Link href={PublicRoutes.about()} className={navLinksClasses}>
        About Us
      </Link>

      <ServicesMenuClient />
      <Languages className={navLinksClasses} />

      <Link href={PublicRoutes.contact()} className={navLinksClasses}>
        Contact
      </Link>
    </div>
  );
}
