"use client";

import { cn } from "@/app/_lib/utils/cn";
import { useEffect, useState } from "react";
import FieldError from "./FieldError";

export type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = {
  id: string;
  label: string;
  options: ReadonlyArray<SelectOption>;

  // allow object default (what you want) OR just a value
  defaultValue: SelectOption;

  required?: boolean;
  placeholder?: string;
  error?: string[];
  className?: string;
  isRTL?: boolean;

  // optional: if parent wants the full object when it changes
  onSelectOption?: (opt: SelectOption | null) => void;
};

const Select = ({
  id,
  label,
  options,
  defaultValue,
  required = false,
  placeholder = "Select",
  error,
  className,
  isRTL = false,
  onSelectOption,
}: SelectProps) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue.value);
  const [selectedLabel, setSelectedLabel] = useState(defaultValue.label);

  useEffect(() => {
    setSelectedLabel(defaultValue.value);
    setSelectedLabel(defaultValue.label);
  }, [defaultValue]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextValue = e.target.value;
    const next = options.find((o) => o.value === nextValue);
    setSelectedValue(next?.value ?? "");
    setSelectedLabel(next?.label ?? "");
  };

  const hasError = !!error?.length;

  return (
    <div className="mb-5">
      <label
        htmlFor={id}
        className={cn(
          "block text-sm font-medium text-gray-700",
          isRTL && "text-right",
        )}
      >
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </label>

      <select
        id={id}
        name={id}
        value={selectedValue}
        onChange={handleChange}
        className={cn(
          "mt-1 block w-full rounded-md border border-gray-200",
          "py-2 pr-10 text-sm sm:text-base outline-1",
          "focus:border-org-primary-main focus:ring-2 focus:ring-blue-100",
          hasError && "border-red-300 focus:border-red-400 focus:ring-red-100",
          isRTL && "text-right direction-rtl",
          className,
        )}
        aria-invalid={hasError || undefined}
        aria-describedby={hasError ? `${id}-error` : undefined}
        required={required}
      >
        <option value="">{placeholder}</option>

        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {/* Hidden label for form submission */}
      <input type="hidden" name={`${id}Label`} value={selectedLabel} />

      <FieldError fieldId={id} errors={error} />
    </div>
  );
};

export default Select;
