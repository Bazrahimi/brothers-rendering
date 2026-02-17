"use client";

import { uiFond } from "@/app/_lib/org/font";
import { cn } from "@/app/_lib/utils/cn";
import type { LinkProps } from "next/link";
import Link from "next/link";
import { forwardRef } from "react";

export type InputOption = string | { value: string; label?: string };

export type ButtonVariant = "primary" | "secondary" | "danger" | "outline";
export type ButtonSize = "xs" | "sm" | "md" | "lg";
interface BaseButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
}

type ButtonAsButton = BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    as?: "button";
  };
type ButtonAsLink = BaseButtonProps &
  Omit<LinkProps, "href"> & {
    as: "link";
    href: LinkProps["href"];
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-org-secondary-main text-org-primary-main hover:bg-org-secondary-light focus:ring-yellow-300",
  secondary:
    "bg-org-primary-main text-white hover:bg-org-primary-light focus:ring-blue-300",
  danger: "bg-red-600 text-white hover:bg-red-500 focus:ring-red-300",
  outline:
    "border border-org-primary-main bg-white text-org-primary-main hover:bg-gray-50 focus:ring-gray-200",
};

const sizes: Record<ButtonSize, string> = {
  xs: "px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm",
  sm: "px-4 py-2 text-sm sm:px-5 sm:py-2.5 sm:text-base",
  md: "px-6 py-3 text-base sm:px-7 sm:py-3.5 sm:text-lg",
  lg: "px-8 py-4 text-lg sm:px-10 sm:py-5 sm:text-xl",
};

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(props, ref) {
  const {
    as = "button",
    children,
    icon,
    variant = "primary",
    size = "md",
    fullWidth,
    className,
    ...rest
  } = props as ButtonProps;

  const layout = fullWidth ? "flex w-full justify-center" : "inline-flex justify-center";

  const classes = cn(
    uiFond.className,
    layout,
    "items-center gap-2 rounded-lg font-semibold shadow-md",
    "transition-transform duration-200 focus:outline-none focus:ring-4 hover:scale-105",
    "cursor-pointer",
    variants[variant],
    sizes[size],
    className,
  );

  if (as === "link") {
    const { href, ...anchorRest } = rest as ButtonAsLink;
    return (
      <Link
        href={href}
        className={classes}
        ref={ref as React.Ref<HTMLAnchorElement>}
        {...anchorRest}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      ref={ref as React.Ref<HTMLButtonElement>}
      {...(rest as ButtonAsButton)}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </button>
  );
});

export default Button;
