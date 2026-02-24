import type { LinkProps } from "next/link";

import { PublicRoutes } from "@/app/_lib/routes/publicRoutes";
import Button from "@/app/_ui/button/Button";

type Props = {
  quoteHref: LinkProps["href"];
  label: string;
};

export default function HeroCta({ quoteHref, label }: Props) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <Button as="link" href={quoteHref} size="md">
        {label}
      </Button>

      <Button as="link" href={PublicRoutes.contact()} variant="outline" size="md">
        Contact Us
      </Button>
    </div>
  );
}
