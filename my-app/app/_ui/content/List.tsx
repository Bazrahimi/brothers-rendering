import { cn } from "@/app/_lib/utils/cn";
import { FaCheck } from "react-icons/fa6";
import { P } from "../typography/paragraph";

type Props = {
  items: readonly string[];
  variant?: "disc" | "check";
  className?: string;
  itemClassName?: string;
  iconClassName?: string;
};

const List = ({
  items,
  variant = "disc",
  className,
  itemClassName,
  iconClassName,
}: Props) => {
  if (!items.length) return null;

  const isCheck = variant === "check";

  return (
    <ul
      className={cn(
        isCheck ? "space-y-2" : "list-disc list-inside space-y-2",
        className,
      )}
    >
      {items.map((item, i) => (
        <li
          key={item ?? i}
          className={cn(
            isCheck && "flex items-center gap-2",
            itemClassName,
          )}
        >
          {isCheck && (
            <FaCheck
              className={cn(
                "h-5 w-5 shrink-0 text-green-500 animate-pulse",
                iconClassName,
              )}
              aria-hidden
            />
          )}
          <P>{item}</P>
        </li>
      ))}
    </ul>
  );
};

export default List;
