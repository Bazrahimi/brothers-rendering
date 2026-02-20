"use client";

// ✅ Swiper styles (required)
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";

import type { ServiceLeaf, ServiceSubCategory } from "@/app/_lib/org/definitions";
import { cn } from "@/app/_lib/utils/cn";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";
import ServiceLeafImage from "@/app/services/[slug]/_ui/ServiceLeafImage";

type Locale = "en" | "fa";

type Props = {
  subcategories: ServiceSubCategory;
  className?: string;
  heading?: string;

  // ✅ new: choose which language to display
  locale?: Locale;

  // ✅ optional: control direction (auto from locale by default)
  dir?: "ltr" | "rtl";
};

function isLeaf(v: unknown): v is ServiceLeaf {
  return (
    typeof v === "object" &&
    v !== null &&
    "label" in v &&
    "labelFarsi" in v &&
    "image" in v &&
    "items" in v
  );
}

export default function ServiceLeavesCarousel({
  subcategories,
  className,
  heading = "Featured Services", // ✅ English default
  locale = "en",
  dir,
}: Props) {
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

        <span className="hidden sm:inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
          {locale === "fa" ? "اسلاید" : "Carousel"}
        </span>
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
                <article className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="p-3">
                    <ServiceLeafImage image={leaf.image} alt={title} />
                  </div>

                  <div className="px-4 pb-4">
                    <Header
                      as="h3"
                      size="sm"
                      className={cn(
                        "text-slate-900",
                        locale === "fa" && "text-right",
                      )}
                    >
                      {title}
                    </Header>

                    <P
                      className={cn(
                        "mt-2 text-slate-600 text-sm line-clamp-2",
                        locale === "fa" && "text-right",
                      )}
                    >
                      {leaf.items.slice(0, 2).join(" • ")}
                    </P>
                  </div>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}