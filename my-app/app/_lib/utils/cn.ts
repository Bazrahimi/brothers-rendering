import type { ClassValue } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(
    // merge Tailwind classes to resolve conflicts
    clsx(inputs), // build class string from conditional inputs
  );
};
