import Link from "next/link";

import { CTA } from "@/app/_lib/content/cta";
import { ORG_PROFILE } from "@/app/_lib/org/profile";
import { PublicRoutes } from "@/app/_lib/routes/publicRoutes";

import { cn } from "@/app/_lib/utils/cn";
import Button from "@/app/_ui/button/Button";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";
import ServiceLeafImage from "@/app/services/[slug]/_ui/ServiceLeafImage";

type Props = {
  className?: string;
};

export default function HomeHero({ className }: Props) {
  const activeCta = CTA[ORG_PROFILE.cta];

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
      aria-label={`${ORG_PROFILE.orgName} hero`}
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
            {ORG_PROFILE.orgName}
          </Header>

          <P className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {ORG_PROFILE.description}
          </P>

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
            <TrustPill label="ABN" value={ORG_PROFILE.abn} />
            <TrustPill label="Phone" value={ORG_PROFILE.phone} />
            <TrustPill label="Location" value="Cranbourne North, VIC" />
          </div>

          {/* Optional language note */}
          {ORG_PROFILE.otherLangKeys?.length ? (
            <P className="text-sm text-slate-600">
              Multilingual support available:{" "}
              <span className="font-semibold text-slate-800">
                {ORG_PROFILE.otherLangKeys.join(" • ")}
              </span>
            </P>
          ) : null}
        </div>

        {/* RIGHT: Image */}
        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
            <ServiceLeafImage
              image={ORG_PROFILE.heroImgUrl}
              alt={`${ORG_PROFILE.orgName} hero`}
              aspect="aspect-[16/12]"
            />

            {/* Small caption row */}
            <div className="mt-3 flex items-center justify-between gap-3 px-2 pb-1">
              <P className="text-sm text-slate-700 font-semibold">
                Quality workmanship
              </P>
              <P className="text-xs text-slate-500">
                Fast quotes • Clear communication
              </P>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom micro-nav (optional) */}
      <div className="border-t border-slate-200 bg-white/60 px-6 py-3 sm:px-8">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-600">
          <HeroLink href="#services" label="View Services" />
          <HeroLink href={PublicRoutes.contact()} label="Book a Consultation" />
          <HeroLink href={ORG_PROFILE.website} label="Website" external />
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
