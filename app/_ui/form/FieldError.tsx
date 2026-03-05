"use client";

import { cn } from "@/app/_lib/utils/cn";
import { P } from "@/app/_ui/typography/paragraph";

type FieldErrorProps = {
  /** The field id, used to build `${id}-error` so aria-describedby can target it */
  fieldId: string;
  /** Array of error messages */
  errors?: string[];
  /** Optional: control text alignment when supporting RTL languages */
  isRTL?: boolean;
  /** Optional extra classes */
  className?: string;
  /** Optional: set aria-live behavior */
  live?: "polite" | "assertive" | "off";
};

export default function FieldError({
  fieldId,
  errors,
  isRTL,
  className,
  live = "polite",
}: FieldErrorProps) {
  const hasError = (errors?.length ?? 0) > 0;
  if (!hasError) return null;

  return (
    <div
      id={`${fieldId}-error`}
      aria-live={live}
      aria-atomic="true"
      role={live === "off" ? undefined : "status"}
    >
      {errors!.map((msg, i) => (
        <P
          key={`${fieldId}-error-${i}`}
          size="sm"
          className={cn(
            "mt-2 text-red-500",
            isRTL ? "text-left" : "text-right",
            className,
          )}
        >
          {msg}
        </P>
      ))}
    </div>
  );
}
