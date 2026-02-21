"use client";
import CarouselImage from "./CarouselImage";
import CarouselSlideContent from "./CarouselSlideContent";

// ✅ Swiper styles (required)
import { slugify } from "@/app/_lib/utils/helper";

import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import type { ServiceSubCategory } from "@/app/_lib/org/definitions";
import { PublicRoutes } from "@/app/_lib/routes/publicRoutes";
import { cn } from "@/app/_lib/utils/cn";
import { Header } from "@/app/_ui/typography/Header";
import Link from "next/link";
import CarouselSkeleton from "./CarouselSkeleton";
import { useMounted } from "./hook/useMounted";
import { isLeaf } from "@/app/_lib/org/definitions";

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
          modules={[Navigation, Pagination, A11y]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={14}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 2.1 },
            1024: { slidesPerView: 3.1 },
          }}
        >
          {leaves.map((leaf, i) => {
            const title = locale === "fa" ? leaf.labelFarsi : leaf.label;

            return (
              <SwiperSlide key={`${leaf.label}-${i}`}>
                <Link href={PublicRoutes.service(slugify(heading))}>
                  <article className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                    <CarouselImage image={leaf.image} alt={title} />
                    <CarouselSlideContent
                      title={title}
                      items={[...leaf.items]}
                      locale={locale}
                    />
                  </article>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
