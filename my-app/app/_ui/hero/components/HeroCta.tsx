import type { LinkProps } from "next/link";
import { MdPhone } from "react-icons/md";

import { PublicRoutes } from "@/app/_lib/routes/publicRoutes";
import Button from "@/app/_ui/button/Button";
import { P } from "../../typography/paragraph";

type Props = {
  quoteHref: LinkProps["href"];
  label: string;
  phone: string
};

export default function HeroCta({ quoteHref, label, phone }: Props) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center justify-between p-5">
      <Button as="link" href={quoteHref} size="md">
        {label}
      </Button>
      {phone !== "" && (
        <P className="rounded-md bg-gray-50 px-3 py-2 text-center">
          <a href={`tel:${phone}`} className="inline-flex items-center gap-2">
            <MdPhone className="text-lg" />
            {phone}
          </a>
        </P>
      )}

      <Button as="link" href={PublicRoutes.contact()} variant="outline" size="md">
        Contact Us
      </Button>
    </div>
  );
}
