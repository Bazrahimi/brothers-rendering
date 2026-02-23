import { cn } from "@/app/_lib/utils/cn";
import { FaCheck } from "react-icons/fa6";
import { P } from "../typography/paragraph";

type Props = {
  items: readonly string[];

  className?: string; // wrapper ul classes
  itemClassName?: string; // li classes
  iconClassName?: string; // icon classes
  textClassName?: string; // ✅ NEW: P classes

  showIcon?: boolean; // ✅ NEW: allow turning icon off

  layout?: "stack" | "grid"; // ✅ NEW: choose list layout
  columns?: 1 | 2 | 3 | 4; // ✅ NEW: grid columns on sm+
};

const List = ({
  items,
  className,
  itemClassName,
  iconClassName,
  textClassName,
  showIcon = true,
  layout = "stack",
  columns = 2,
}: Props) => {
  if (!items.length) return null;

  const ulLayout =
    layout === "grid"
      ? cn(
          "grid gap-2",
          columns === 1 && "sm:grid-cols-1",
          columns === 2 && "sm:grid-cols-2",
          columns === 3 && "sm:grid-cols-3",
          columns === 4 && "sm:grid-cols-4",
        )
      : "space-y-2";

  return (
    <ul
      className={cn(
        // ✅ default wrapper (can be overridden)
        "rounded-3xl bg-gray-200/50 px-3 border border-gray-100 py-10",
        ulLayout,
        className,
      )}
    >
      {items.map((item, i) => (
        <li
          key={item ?? i}
          className={cn(
            // ✅ default layout for row; still works inside grid
            "flex items-center gap-2",
            itemClassName,
          )}
        >
          {showIcon && (
            <FaCheck
              className={cn("h-5 w-5 shrink-0 text-green-500", iconClassName)}
              aria-hidden
            />
          )}

          <P
            className={cn(
              "text-gray-600 rounded-xl bg-gray-100 px-3 border border-gray-50",
              textClassName,
            )}
          >
            {item}
          </P>
        </li>
      ))}
    </ul>
  );
};

export default List;
