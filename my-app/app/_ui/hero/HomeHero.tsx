// app/(home)/_ui/HomeHero.tsx
import { ORG_PROFILE as op } from "@/app/_lib/org/profile";
import HeroCta from "./components/HeroCta";
import { HeroHeadAndDesc } from "./components/HeroHeadAndDesc";
import HeroMicroNav from "./components/HeroMicroNav";
import { HeroServiceBadge } from "./components/HeroServiceBadge";
import MultilingualSupport from "./components/MultilingualSupport";

import { CTA } from "@/app/_lib/content/cta";
// import { ORG_PROFILE as op } from "@/app/_lib/org/profile";
import {
  getServiceCategoryLinks,
  PublicRoutes,
} from "@/app/_lib/routes/publicRoutes";
import { cn } from "@/app/_lib/utils/cn";
import HeroLogoVisualCard from "./components/HeroLogoVisualCard";
import HeroBackground from "./components/HeroBackground";

type Props = {
  className?: string;
};

// ✅ Safe on server (pure function call)
const HERO_SERVICE_CATEGORY_LINKS = getServiceCategoryLinks();

export default function HomeHero({ className }: Props) {
  const activeCta = CTA[op.cta];

  const quoteHref = {
    pathname: PublicRoutes.freeConsultation(),
    query: {
      headingLabel: activeCta.label,
      serviceLabel: "General enquiry",
      message: activeCta.message,
    },
  };

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden rounded-3xl border border-slate-200 shadow-xl",
        className,
      )}
      aria-label={`${op.orgName} hero`}
    >
      <HeroBackground heroImgUrl={op.heroImgUrl} orgName={op.orgName} />

      {/* Content */}
      <div className="relative z-10">
        <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-12 lg:items-center">
          {/* LEFT */}
          <div className="lg:col-span-7 space-y-6">
            <HeroServiceBadge />

            {/* Glass copy card */}
            <div className="space-y-5 rounded-3xl border border-white/10 bg-gray-50 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-md sm:p-7">
              <HeroHeadAndDesc
                orgName={op.orgName}
                orgNameFarsi={op.orgNameFarsi}
                otherLangKeys={op.otherLangKeys}
                // description={op.description}
              />

              <MultilingualSupport otherLangKeys={op.otherLangKeys} />
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5">
            <HeroLogoVisualCard
              heroImgUrl={op.logoUrl}
              orgName={op.orgName}
              ctaLabel={activeCta.label}
            />
          </div>
        </div>

        {/* Bottom micro-nav */}
        <div className="border-t border-white/10">
          <HeroMicroNav items={HERO_SERVICE_CATEGORY_LINKS} />

          <HeroCta quoteHref={quoteHref} label={activeCta.label} />
        </div>
      </div>
    </section>
  );
}
