import { PublicRoutes } from "@/app/_lib/routes/publicRoutes";
import { cn } from "@/app/_lib/utils/cn";

import { ORG_PROFILE } from "@/app/_lib/org/profile";
import Button from "../button/Button";
import { Header } from "../typography/Header";
import { P } from "../typography/paragraph";

type Props = {
  headingLabel: string;
  serviceLabel: string;
  message: string;
  generalEnquiry?: boolean;
  className?: string;
};

export default function ServiceCTA({
  headingLabel,
  serviceLabel,
  className,
  message,
  generalEnquiry,
}: Props) {
  const href = {
    pathname: PublicRoutes.freeConsultation(),
    query: {
      headingLabel,
      serviceLabel,
      message,
    },
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl bg-linear-to-br p-5 sm:p-10 shadow-xl",
        generalEnquiry
          ? "from-org-secondary-dark to-org-primary-dark"
          : " from-org-primary-dark to-org-secondary-dark",
        className,
      )}
    >
      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      {generalEnquiry && (
        <Header as="h2" size="md" className="text-white">
          {headingLabel} {" | General enquiry"}
        </Header>
      )}

      {serviceLabel && (
        <P className={cn(
          "text-center text-slate-300",
          !generalEnquiry && "text-sm leading-relaxed"
        )}>
          Tell {` ${ORG_PROFILE.orgName}`} what you need for {serviceLabel}, and
          we’ll reply with clear next steps.
        </P>
      )}

      {generalEnquiry && (
        <>
          {" "}
          <P className="mt-3 text-center text-slate-100">| OR | </P>
          <P className="mt-2 text-center text-slate-300">
            Contact {ORG_PROFILE.orgName} if you have a general question.
          </P>
        </>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Button
          as="link"
          href={href}
          variant="outline"
          size="sm"
          className="text-center"
          // className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90"
        >
          Get a {ORG_PROFILE.cta}
        </Button>

        {generalEnquiry && (
          <>
            <P className="text-slate-300 text-center font-bold inline-flex justify-center">
              | OR |
            </P>
            <Button
              as="link"
              href={PublicRoutes.contact()}
              variant="outline"
              size="sm"
            >
              General Enquiry
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
