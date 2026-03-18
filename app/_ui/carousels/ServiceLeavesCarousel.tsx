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

type Props = {
  subcategories: ServiceSubCategory;
  className?: string;


};

export default function ServiceLeavesCarousel({
  subcategories,
  className,

}: Props) {
  const mounted = useMounted();
  const { prevClass, nextClass, navigation } =
    useCarouselNav("service-carousel");
  if (!mounted) return <CarouselSkeleton />;

  const entries = Object.entries(subcategories);
  if (entries.length === 0) return null;

  const shouldPaginate = entries.length > 1;

  return (
    <section
      className={cn(
        "rounded-2xl border border-slate-200 bg-white/70  shadow-sm backdrop-blur p-0",
        className,
      )}
    >
      {/* ✅ fix: min-h needs px */}
      <div className="relative  min-h-[360px]">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          loop={entries.length > 3}
          watchOverflow
          navigation={navigation}
          className="service-carousel pb-14"
  
          pagination={shouldPaginate ? { clickable: true } : false}
          spaceBetween={12}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 2.1 },
            1024: { slidesPerView: 3.1 },
          }}
        >
          {entries.map(([leafId, leaf]) => (
            <SwiperSlide key={leafId} className="h-auto">
              <div className="h-full">
                <CarouselSlide leaf={leaf} leafId={leafId}  />
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
