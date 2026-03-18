import { ORG_PROFILE } from "@/app/_lib/org/profile";
import { PublicRoutes } from "@/app/_lib/routes/publicRoutes";
import { cn } from "@/app/_lib/utils/cn";
import Button from "../button/Button";
import { Header } from "../typography/Header";
import { P } from "../typography/paragraph";

import { ctaCall, ctaCallFarsi, getCtaCopy } from "@/app/_lib/content/cta"; // adjust path

import type { CtaKey, Locale } from "@/app/_lib/content/cta";

type Props = {
  ctaKey: CtaKey;
  locale?: Locale;

  // service label can be bilingual so the component can switch easily
  serviceLabel?: string;
  serviceLabelFarsi?: string;

  generalEnquiry?: boolean;
  className?: string;

  // optional override if you want different heading on a specific page
  headingOverride?: string;
};

export default function ServiceCTA({
  ctaKey,
  locale = "en",
  serviceLabel,
  serviceLabelFarsi,
  generalEnquiry,
  className,
  headingOverride,
}: Props) {
  const copy = getCtaCopy(ctaKey, locale);
  const dir = copy.dir;

  const resolvedServiceLabel =
    locale === "fa"
      ? (serviceLabelFarsi ?? serviceLabel ?? "")
      : (serviceLabel ?? "");

  const callout =
    resolvedServiceLabel.trim().length > 0
      ? locale === "fa"
        ? ctaCallFarsi(ORG_PROFILE.orgNameFarsi, resolvedServiceLabel)
        : ctaCall(ORG_PROFILE.orgName, resolvedServiceLabel)
      : "";

  // Build the message passed to your form (include the service label if you want)
  const message = `${copy.message}${resolvedServiceLabel}`;

  const href = {
    pathname: PublicRoutes.freeConsultation(),
    query: {
      headingLabel: headingOverride ?? copy.label,
      serviceLabel: resolvedServiceLabel,
      message,
      ctaKey, // helpful later if you want the form to know which CTA was used
      locale,
    },
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl bg-linear-to-br p-5 sm:p-10 shadow-xl",
        generalEnquiry
          ? "from-org-secondary-dark to-org-primary-dark"
          : "from-gray-50 to-gray-200",
        className,
      )}
      dir={dir}
    >
      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

      {generalEnquiry && (
        <Header as="h2" size="md" className="text-white">
          {(headingOverride ?? copy.label) +
            (locale === "fa" ? " | پرسش عمومی" : " | General enquiry")}
        </Header>
      )}

      {!!callout && (
        <P
          className={cn(
            "text-center text-gray-50",
            !generalEnquiry && "text-sm leading-relaxed text-gray-700",
          )}
        >
          {callout}
        </P>
      )}

      {generalEnquiry && (
        <P className="mt-2 text-center text-slate-300">
          {locale === "fa"
            ? `اگر پرسش عمومی دارید با ${ORG_PROFILE.orgName} تماس بگیرید.`
            : `Contact ${ORG_PROFILE.orgName} if you have a general question.`}
        </P>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Button
          as="link"
          href={href}
          variant={generalEnquiry ? "outline" : "primary"}
          size="sm"
          className="text-center"
        >
          {locale === "fa" ? copy.label : `Get a ${copy.label}`}
        </Button>

        {generalEnquiry && (
          <Button
            as="link"
            href={PublicRoutes.contact()}
            variant="outline"
            size="sm"
          >
            {locale === "fa" ? "پرسش عمومی" : "General Enquiry"}
          </Button>
        )}
      </div>
    </div>
  );
}
