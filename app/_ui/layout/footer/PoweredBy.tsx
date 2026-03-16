import { ORG_PROFILE } from "@/app/_lib/org/profile";
import { KATEB_LOGO } from "@/app/_lib/utils/assets";
import { cn } from "@/app/_lib/utils/cn";
import Image from "next/image";

type Props = {
  className?: string;
};

export default function PoweredBy({ className }: Props) {
  const year = new Date().getFullYear();

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-2 text-xs text-slate-800",
        className,
      )}
    >
      <span>
        © {year} {ORG_PROFILE.orgName}. All rights reserved.
      </span>

      <span className="opacity-40">|</span>

      <a
        href="https://www.katebtech.com.au"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 ring-1 ring-black/10 hover:bg-white transition"
      >
        <Image
          src={KATEB_LOGO}
          alt="Kateb Tech | Kateb Technology"
          width={16}
          height={16}
          unoptimized
        />

        <span className="font-semibold text-gray-500">
          Built by{" "}
          <span style={{ color: "#f59e0b" }} className="font-bold">
            Kateb Tech
          </span>
        </span>
      </a>
    </div>
  );
}
