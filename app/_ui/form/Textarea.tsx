"use client";

import { cn } from "@/app/_lib/utils/cn";
import FieldError from "./FieldError";

type Props = {
  id: string;
  name?: string;
  label: string;
  placeholder?: string;
  defaultValue?: string;
  error?: string[];
  className?: string;
  required?: boolean;
  rows?: number;
};

const Textarea = ({
  id,
  name,
  label,
  placeholder,
  defaultValue,
  error,
  className,
  required,
  rows = 5,
}: Props) => {
  const hasError = (error?.length ?? 0) > 0;

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
        {required ? <span className="text-red-600"> *</span> : null}
      </label>

      <textarea
        id={id}
        name={name ?? id}
        rows={rows}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={required}
        aria-invalid={hasError || undefined}
        aria-describedby={hasError ? `${id}-error` : undefined}
        className={cn(
          "mt-1 block w-full rounded-md border border-gray-300 bg-white p-2 text-gray-900 shadow-sm",
          "focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600",
          "min-h-[120px]",
          hasError && "border-red-300 focus:border-red-400 focus:ring-red-100",
          className,
        )}
      />

      <FieldError fieldId={id} errors={error} />
    </div>
  );
};

export default Textarea;
