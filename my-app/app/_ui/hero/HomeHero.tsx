import HeroCta from "./components/HeroCta";
import { HeroHeadAndDesc } from "./components/HeroHeadAndDesc";
import HeroMicroNav from "./components/HeroMicroNav";
import { HeroServiceBadge } from "./components/HeroServiceBadge";
import MultilingualSupport from "./components/MultilingualSupport";
import TrustPill from "./components/TrustPill";

import { CTA } from "@/app/_lib/content/cta";
import { ORG_PROFILE as op } from "@/app/_lib/org/profile";
import {
  getServiceCategoryLinks,
  PublicRoutes,
} from "@/app/_lib/routes/publicRoutes";
import { cn } from "@/app/_lib/utils/cn";
import HeroVisualCard from "./components/HeroVisualCard";

type Props = {
  className?: string;
};

const HERO_SERVICE_CATEGORY_LINKS = getServiceCategoryLinks();

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
          <HeroServiceBadge />
          <HeroHeadAndDesc
            orgName={op.orgName}
            orgNameFarsi={op.orgNameFarsi}
            otherLangKeys={op.otherLangKeys}
            description={op.description}
          />

          <HeroCta quoteHref={quoteHref} label={activeCta.label} />

          {/* Trust row */}
          <div className="grid gap-3 sm:grid-cols-3">
            <TrustPill label="ABN" value={op.abn} />
            <TrustPill label="Phone" value={op.phone} />
          </div>

          <MultilingualSupport otherLangKeys={op.otherLangKeys} />
        </div>

        <HeroVisualCard
          heroImgUrl={op.heroImgUrl}
          orgName={op.orgName}
          ctaLabel={activeCta.label}
        />
      </div>

      {/* Bottom micro-nav (optional) */}
      <HeroMicroNav items={HERO_SERVICE_CATEGORY_LINKS} />
    </section>
  );
}
