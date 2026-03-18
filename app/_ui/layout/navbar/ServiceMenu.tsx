"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { HiChevronDown } from "react-icons/hi";

import { getServiceCategoryLinks } from "@/app/_lib/routes/publicRoutes";
import { useDropdownMenu } from "./useDropdownMenu";

export type ServiceItem = {
  href: string;
  label: string;
};

export const SERVICES: readonly ServiceItem[] = getServiceCategoryLinks();

export default function ServicesMenuClient() {
  const totalItems = SERVICES.length;
  const pathname = usePathname();

  const {
    open,
    setOpen,
    rootRef,
    btnRef,
    setItemRef,
    onButtonKeyDown,
    onMenuKeyDown,
  } = useDropdownMenu(totalItems);

  // Close the dropdown whenever route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname, setOpen]);

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={btnRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="services-submenu"
        onClick={() => setOpen((v) => !v)}
        onKeyDown={onButtonKeyDown}
        className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-white/90 transition duration-200 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30"
      >
        Services
        <HiChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          id="services-submenu"
          role="menu"
          aria-label="Services submenu"
          onKeyDown={onMenuKeyDown}
          className="absolute left-1/2 top-full z-40 mt-3 w-72 max-w-[calc(100vw-1rem)] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-org-primary-main/95 p-2 text-white shadow-2xl ring-1 ring-black/20 backdrop-blur-xl"
        >
          <div className="px-3 pb-2 pt-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
              Explore
            </p>
          </div>

          <ul className="space-y-1">
            {SERVICES.map((item, idx) => (
              <li key={item.href}>
                <Link
                  ref={setItemRef(idx)}
                  href={item.href}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-white/85 transition duration-200 hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none"
                >
                  <span>{item.label}</span>
                  <span className="translate-x-0 text-white/0 transition duration-200 group-hover:translate-x-0.5 group-hover:text-white/50">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
