import { cn } from "@/app/_lib/utils/cn";
import FieldError from "./FieldError";
import { useState, useEffect } from "react";

type OptionType = {
  label: string;
  value: string | number;
};

type SelectOptions =
  | ReadonlyArray<OptionType | string | number>
  | Record<string, { label: string; description?: string }>;

type SelectProps = {
  id: string;
  label: string;
  options: SelectOptions;
  defaultValue?: string | number;
  required?: boolean;
  placeholder?: string;
  error?: string[];
  className?: string;
  isRTL?: boolean;
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
}: SelectProps) => {
  const [selected, setSelected] = useState<string | number>(defaultValue ?? "");

useEffect(() => {
  setSelected(defaultValue); // sync when server state updates
}, [defaultValue]);

  const hasError = !!error?.length;

  console.log("defaultValue", defaultValue);



  const normalizedOptions: OptionType[] = Array.isArray(options)
    ? options.map((opt) =>
        typeof opt === "string" || typeof opt === "number"
          ? { label: String(opt), value: opt }
          : opt,
      )
    : Object.entries(options).map(([value, meta]) => ({
        value,
        label: meta.label,
        description: meta.description,
      }));

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
        value={selected}
        onChange={() => {}}
        className={cn(
          "mt-1 block w-full rounded-md border border-gray-200",
          "py-2 pr-10 text-sm sm:text-base outline-1",
          "focus:border-org-primary-main focus:ring-2 focus:ring-blue-100",
          hasError && "border-red-300 focus:border-red-400 focus:ring-red-100",
          isRTL && "text-right direction-rtl",
          className,
        )}
      >
        <option value="">{placeholder}</option>
        {normalizedOptions.map((opt) => (
          <option key={String(opt.value)} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      <FieldError fieldId={id} errors={error} isRTL={isRTL} />
    </div>
  );
};

export default Select;
