"use client";

import CarouselSkeleton from "./CarouselSkeleton";
import CarouselNav from "./components/CarouselNav";
import CarouselSlide from "./components/CarouselSlide";
import { useCarouselNav } from "./hook/useCarouselNav";
import { useMounted } from "./hook/useMounted";

import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import type { ServiceSubCategory } from "@/app/_lib/org/definitions";
import { cn } from "@/app/_lib/utils/cn";
import { Header } from "@/app/_ui/typography/Header";

type Props = {
  subcategories: ServiceSubCategory;
  className?: string;
  heading?: string;
  slug: string;
};

export default function ServiceLeavesCarousel({
  subcategories,
  className,
  slug,
  heading = "Featured Services",
}: Props) {
  const mounted = useMounted();
  const { prevClass, nextClass, navigation } =
    useCarouselNav("service-carousel");
  if (!mounted) return <CarouselSkeleton />;

  const entries = Object.entries(subcategories);
  if (entries.length === 0) return null;

  const shouldPaginate = entries.length > 1

  return (
    <section
      className={cn(
        "rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur sm:p-7",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3 p-3 md:p-6">
        <Header as="h2" align="center">
          {heading}
        </Header>
      </div>

      {/* ✅ fix: min-h needs px */}
      <div className="relative mt-4 min-h-[360px]">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          loop={entries.length > 3}
          watchOverflow
          navigation={navigation}
          className="service-carousel pb-14"
          pagination={ shouldPaginate ? { clickable: true } : false}
          spaceBetween={14}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 2.1 },
            1024: { slidesPerView: 3.1 },
          }}
        >
          {entries.map(([leafId, leaf]) => (
            <SwiperSlide key={leafId} className="h-auto">
              <div className="h-full">
                <CarouselSlide leaf={leaf} leafId={leafId} serviceSlug={slug} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ nav overlay fully extracted */}
        <CarouselNav prevClass={prevClass} nextClass={nextClass} />
      </div>
    </section>
  );
}
