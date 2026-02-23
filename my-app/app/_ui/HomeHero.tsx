import Link from "next/link";

import { CTA } from "@/app/_lib/content/cta";
import { ORG_PROFILE as op } from "@/app/_lib/org/profile";
import { PublicRoutes } from "@/app/_lib/routes/publicRoutes";

import { cn } from "@/app/_lib/utils/cn";
import Button from "@/app/_ui/button/Button";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";
import ServiceLeafImage from "@/app/services/[slug]/_ui/ServiceLeafImage";
import { getServiceCategoryLinks } from "@/app/_lib/routes/publicRoutes";

type Props = {
  className?: string;
};

export default function HomeHero({ className }: Props) {
  const activeCta = CTA[op.cta];

  const quoteHref = {
    pathname: PublicRoutes.freeConsultation(), // or your freeQuote route if you have one
    query: {
      headingLabel: activeCta.label,
      serviceLabel: "General enquiry",
      message: activeCta.message,
    },
  };

  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-3xl border border-slate-200 bg-white/70 shadow-sm backdrop-blur",
        className,
      )}
      aria-label={`${op.orgName} hero`}
    >
      {/* soft background glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-slate-900/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-slate-900/5 blur-3xl" />

      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-12 lg:items-center">
        {/* LEFT: Copy */}
        <div className="lg:col-span-7 space-y-5">
          {/* Optional small badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Serving Melbourne South-East
          </div>

          <Header as="h1" className="text-slate-900">
            {op.orgName}
          </Header>
          {(op.otherLangKeys?.includes("HZ") ||
            op.otherLangKeys?.includes("FA")) && (
            <Header as="h1" className="text-slate-700">
              {op.orgNameFarsi}
            </Header>
          )}

          <P className="text-slate-600">{op.description}</P>

          {/* CTA row */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button as="link" href={quoteHref} size="md">
              {activeCta.label}
            </Button>

            <Button
              as="link"
              href={PublicRoutes.contact()}
              variant="outline"
              size="md"
            >
              Contact Us
            </Button>
          </div>

          {/* Trust row */}
          <div className="grid gap-3 sm:grid-cols-3">
            <TrustPill label="ABN" value={op.abn} />
            <TrustPill label="Phone" value={op.phone} />
          </div>

          {/* Optional language note */}
          {op.otherLangKeys?.length ? (
            <P className="text-sm text-slate-600">
              Multilingual support available:{" "}
              <span className="font-semibold text-slate-800">
                {op.otherLangKeys.join(" • ")}
              </span>
            </P>
          ) : null}
        </div>

        {/* RIGHT: Image */}
        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
            <ServiceLeafImage
              image={op.heroImgUrl}
              alt={`${op.orgName} hero`}
              aspect="aspect-[16/12]"
            />

            {/* Small caption row */}

            <P className=" text-slate-500 text-center" size="sm">
              Fast {CTA[op.cta].label} • Clear communication
            </P>
          </div>
        </div>
      </div>

      {/* Bottom micro-nav (optional) */}
   
      <div className="border-t border-slate-200 bg-white/60 px-6 py-3 sm:px-8">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-600">
             {/* TODO: Can replace the below with this getServiceCategoryLinks  */}
          <HeroLink href="#services" label="View Services" />
          <HeroLink href={PublicRoutes.contact()} label="Book a Consultation" />
          <HeroLink href={op.website} label="Website" external />
        </div>
      </div>
    </section>
  );
}

function TrustPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
      <P className="text-xs font-semibold text-slate-500">{label}</P>
      <P className="mt-1 text-sm font-semibold text-slate-900 line-clamp-1">
        {value}
      </P>
    </div>
  );
}

function HeroLink({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="font-semibold text-slate-700 hover:text-slate-900"
      >
        {label}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="font-semibold text-slate-700 hover:text-slate-900"
    >
      {label}
    </Link>
  );
}
