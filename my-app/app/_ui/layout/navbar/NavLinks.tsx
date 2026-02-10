import { PublicRoutes } from "@/app/_lib/routes/publicRoutes";
import Link from "next/link";

import ServicesMenuClient from "./ServiceMenu";

export default function NavLinks() {
  return (
    <div className="flex items-center gap-1">
      <Link
        href={PublicRoutes.about()}
        className="rounded-md px-3 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-white"
      >
        About Us
      </Link>

      <ServicesMenuClient />

      <Link
        href={PublicRoutes.contact()}
        className="rounded-md px-3 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-white"
      >
        Contact
      </Link>

      {/* CTA example (kept for later)
      <Link
        href="/member/join"
        className="ml-2 rounded-full bg-org-secondary-main px-4 py-2 text-sm font-semibold text-white transition hover:bg-org-secondary-light"
      >
        Become a Member
      </Link>
      */}
    </div>
  );
}
