"use client";

import { getServiceLinks } from "@/app/_lib/routes/publicRoutes";
import Link from "next/link";
import { HiChevronDown } from "react-icons/hi";

import { useDropdownMenu } from "./useDropdownMenu";

// function entriesOf<T extends Record<PropertyKey, unknown>>(obj: T) {
//   return Object.entries(obj) as Array<[keyof T, T[keyof T]]>;
// }

export type ServiceItem = {
  href: string;
  label: string;
};
export const SERVICES: readonly ServiceItem[] = getServiceLinks();

export default function ServicesMenuClient() {
  const totalItems = SERVICES.length;

  const {
    open,
    setOpen,
    rootRef,
    btnRef,
    setItemRef,
    onButtonKeyDown,
    onMenuKeyDown,
  } = useDropdownMenu(totalItems);

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={btnRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={onButtonKeyDown}
        className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-white"
      >
        Services
        <HiChevronDown className="h-4 w-4 opacity-80" />
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Services submenu"
          onKeyDown={onMenuKeyDown}
          className="absolute left-0 z-40 mt-2 w-64 overflow-hidden rounded-xl border border-white/10 bg-org-primary-main/95 text-white shadow-lg ring-1 ring-black/10 backdrop-blur"
        >
          <ul className="py-1">
            {SERVICES.map((item, idx) => (
              <li key={item.href}>
                <Link
                  ref={setItemRef(idx)}
                  href={item.href}
                  className="block px-3 py-2 text-sm text-white/90 hover:bg-white/10 hover:text-white"
                  role="menuitem"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
