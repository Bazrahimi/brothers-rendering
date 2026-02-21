"use client";
import CarouselSlide from "./CarouselSlide";

// ✅ Swiper styles (required)
import { slugify } from "@/app/_lib/utils/helper";

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

  // ✅ new: choose which language to display
  locale?: Locale;

  // ✅ optional: control direction (auto from locale by default)
  dir?: "ltr" | "rtl";
};

export default function ServiceLeavesCarousel({
  subcategories,
  className,
  heading = "Featured Services", // ✅ English default
  locale = "en",
  dir,
}: Props) {
  const mounted = useMounted();

  if (!mounted) return <CarouselSkeleton />;
  const resolvedDir = dir ?? (locale === "fa" ? "rtl" : "ltr");

  // ✅ Convert object values to array + keep only real leaves
  const leaves = Object.values(subcategories).filter(isLeaf);
  if (leaves.length === 0) return null;

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
          loop={leaves.length > 3}
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
          {leaves.map((leaf) => (
            <SwiperSlide key={leaf.label}>
              <CarouselSlide
                leaf={leaf}
                serviceSlug={slugify(heading)} // ⚠️ still recommend passing real slug
                locale={locale}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
