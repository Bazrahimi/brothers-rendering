// app/(home)/_ui/HomeHero.tsx
import { IMAGE_DEFAULT_BLUR } from "@/app/_ui/image/ImageShimer";
import Image from "next/image";
import HeroCta from "./components/HeroCta";
import { HeroHeadAndDesc } from "./components/HeroHeadAndDesc";
import HeroMicroNav from "./components/HeroMicroNav";
import { HeroServiceBadge } from "./components/HeroServiceBadge";
import MultilingualSupport from "./components/MultilingualSupport";
import { ORG_PROFILE as op } from "@/app/_lib/org/profile";

import { CTA, CtaKey } from "@/app/_lib/content/cta";
// import { ORG_PROFILE as op } from "@/app/_lib/org/profile";
import {
  getServiceCategoryLinks,
  PublicRoutes,
} from "@/app/_lib/routes/publicRoutes";
import { cn } from "@/app/_lib/utils/cn";
import HeroLogoVisualCard from "./components/HeroLogoVisualCard";


type Props = {


  className?: string;
};

// ✅ Safe on server (pure function call)
const HERO_SERVICE_CATEGORY_LINKS = getServiceCategoryLinks();

export default function HomeHero({ className}: Props) {
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
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={op.heroImgUrl}
          alt={`${op.orgName} hero background`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          placeholder="blur"
          blurDataURL={IMAGE_DEFAULT_BLUR}
        />

        {/* Global dark overlay */}
        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

        {/* Right-side brand gradient */}
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(270deg, rgba(11,37,77,0.96) 0%, rgba(11,37,77,0.82) 30%, rgba(11,37,77,0.45) 55%, rgba(11,37,77,0.15) 75%, rgba(11,37,77,0) 100%)",
          }}
        />

        {/* Left-side soft gradient */}
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(90deg, rgba(4,15,31,0.45) 0%, rgba(4,15,31,0.25) 20%, rgba(4,15,31,0.12) 35%, rgba(4,15,31,0) 55%)",
          }}
        />

        {/* Bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-44"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to top, rgba(4,15,31,0.92), rgba(4,15,31,0))",
          }}
        />

        {/* Optional: subtle highlight texture */}
        <div
          className="absolute inset-0 opacity-[0.10] mix-blend-soft-light"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.9) 0, rgba(255,255,255,0) 40%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.7) 0, rgba(255,255,255,0) 35%)",
          }}
        />
      </div>

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
                description={op.description}
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
        <div className="border-t border-white/10 bg-black/20 backdrop-blur">
          <HeroMicroNav items={HERO_SERVICE_CATEGORY_LINKS} />

          <HeroCta quoteHref={quoteHref} label={activeCta.label} />
        </div>
      </div>
    </section>
  );
}
