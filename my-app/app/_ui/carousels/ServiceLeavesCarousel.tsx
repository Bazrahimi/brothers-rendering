"use client";
import CarouselSlide from "./CarouselSlide";

import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import type { ServiceSubCategory } from "@/app/_lib/org/definitions";
import { isLeaf } from "@/app/_lib/org/definitions";
import { cn } from "@/app/_lib/utils/cn";
import { Header } from "@/app/_ui/typography/Header";
import CarouselSkeleton from "./CarouselSkeleton";
import { useMounted } from "./hook/useMounted";

export type Locale = "en" | "fa";

type Props = {
  subcategories: ServiceSubCategory;
  className?: string;
  heading?: string;
  slug: string;
  locale?: Locale;
  dir?: "ltr" | "rtl";
};

export default function ServiceLeavesCarousel({
  subcategories,
  className,
  slug,
  heading = "Featured Services",
  locale = "en",
  dir,
}: Props) {
  const mounted = useMounted();
  if (!mounted) return <CarouselSkeleton />;

  const resolvedDir = dir ?? (locale === "fa" ? "rtl" : "ltr");

  // ✅ keep keys for anchors + stable React keys
  const entries = Object.entries(subcategories).filter(([, v]) => isLeaf(v));
  if (entries.length === 0) return null;

  return (
    <section
      dir={resolvedDir}
      className={cn(
        "rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur sm:p-7",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <Header as="h2" className="text-slate-900">
          {heading}
        </Header>
      </div>

      <div className="mt-4">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          loop={entries.length > 3}
          watchOverflow
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={14}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 2.1 },
            1024: { slidesPerView: 3.1 },
          }}
        >
          {entries.map(([leafId, leaf]) => (
            <SwiperSlide key={leafId}>
              <CarouselSlide leaf={leaf} leafId={leafId} serviceSlug={slug} locale={locale} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}