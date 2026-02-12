import { cn } from "@/app/_lib/utils/cn";
import type { SelectOption } from "@/app/contact-us/_lib/definitions";
import { useEffect, useMemo, useState } from "react";
import FieldError from "./FieldError";

type SelectProps = {
  id: string;
  label: string;
  options: ReadonlyArray<SelectOption>;
  defaultValue: string;
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
  const [value, setValue] = useState<string>(defaultValue);

  // keep value synced when server action returns new defaultValue
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  // selected option object (full object saved)
  const selectedOption = useMemo(
    () => options.find((o) => o.value === value) ?? null,
    [options, value],
  );

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
        value={value}
        onChange={(e) => setValue(e.target.value)}
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
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {selectedOption && (
        <input type="hidden" name={`${id}Label`} value={selectedOption.label} />
      )}

      <FieldError fieldId={id} errors={error} isRTL={isRTL} />
    </div>
  );
};

export default Select;
