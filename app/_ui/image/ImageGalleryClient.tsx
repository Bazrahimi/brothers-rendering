"use client";

import {
  cldFullscreenImage,
  cldGalleryImage,
  cldThumbImage,
} from "@/app/_lib/cloudinary/cloudinary";
import Image from "next/image";
import { useEffect, useState } from "react";

import { type Swiper as SwiperType } from "swiper";
import { Keyboard, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


import type { ImageGalleryProps } from "./ImageGallery";
import { IMAGE_DEFAULT_BLUR } from "./ImageShimer";

const ImageGalleryClient = ({
  images,
  priorityFirstImage = false,
}: ImageGalleryProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const hasMultiple = images.length > 1;

  useEffect(() => {
    if (!isFullscreen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsFullscreen(false);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % images.length);
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [images.length, isFullscreen]);

  const goToImage = (index: number) => {
    setActiveIndex(index);
    mainSwiper?.slideTo(index);
  };

  const goNext = () => {
    const next = (activeIndex + 1) % images.length;
    goToImage(next);
  };

  const goPrev = () => {
    const prev = (activeIndex - 1 + images.length) % images.length;
    goToImage(prev);
  };

  return (
    <>
      <div className="min-w-0 space-y-3">
        <div className="overflow-hidden rounded-2xl">
          <Swiper
            onSwiper={setMainSwiper}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            modules={[Navigation, Keyboard, Thumbs]}
            navigation={hasMultiple}
            keyboard
            spaceBetween={12}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            className="rounded-2xl"
          >
            {images.map((img, index) => {
              const src = cldGalleryImage(img.url);

              return (
                <SwiperSlide key={`${img.url}-${index}`}>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveIndex(index);
                      setIsFullscreen(true);
                    }}
                    className="block w-full text-left"
                    aria-label={`Open ${img.alt} in fullscreen`}
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-50">
                      <Image
                        src={src}
                        alt={img.alt}
                        fill
                        className="object-cover object-center"
                        priority={priorityFirstImage && index === 0}
                        sizes="(min-width: 1024px) 66vw, 100vw"
                        placeholder={index === 0 ? "blur" : "empty"}
                        blurDataURL={
                          index === 0 ? IMAGE_DEFAULT_BLUR : undefined
                        }
                      />
                    </div>
                  </button>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {hasMultiple ? (
          <Swiper
            onSwiper={setThumbsSwiper}
            modules={[Thumbs]}
            watchSlidesProgress
            spaceBetween={12}
            slidesPerView={Math.min(images.length, 3)}
            breakpoints={{
              640: { slidesPerView: Math.min(images.length, 4) },
              1024: { slidesPerView: Math.min(images.length, 5) },
            }}
            className="rounded-2xl"
          >
            {images.map((img, index) => {
              const src = cldThumbImage(img.url);
              const isActive = activeIndex === index;

              return (
                <SwiperSlide key={`${img.url}-thumb-${index}`}>
                  <button
                    type="button"
                    onClick={() => goToImage(index)}
                    aria-label={`Show image ${index + 1}`}
                    className={`block w-full overflow-hidden rounded-xl transition ${
                      isActive
                        ? "ring-2 ring-org-primary-main"
                        : "ring-1 ring-slate-200"
                    }`}
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-50">
                    <Image
                        src={src}
                        alt={`${img.alt} thumbnail`}
                        fill
                        className="object-cover object-center"
                        sizes="(min-width: 1024px) 20vw, 30vw"
                      />
                    </div>
                  </button>
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : null}
      </div>

      {isFullscreen ? (
        <div className="fixed inset-0 z-[100] bg-black/90">
          <button
            type="button"
            onClick={() => setIsFullscreen(false)}
            className="absolute right-4 top-4 z-[110] rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur"
            aria-label="Close fullscreen gallery"
          >
            Close
          </button>

          {hasMultiple ? (
            <>
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-4 top-1/2 z-[110] -translate-y-1/2 rounded-full bg-white/10 px-4 py-3 text-white backdrop-blur"
                aria-label="Previous image"
              >
                ←
              </button>

              <button
                type="button"
                onClick={goNext}
                className="absolute right-4 top-1/2 z-[110] -translate-y-1/2 rounded-full bg-white/10 px-4 py-3 text-white backdrop-blur"
                aria-label="Next image"
              >
                →
              </button>
            </>
          ) : null}

          <div className="flex h-full w-full items-center justify-center p-4 sm:p-8">
            <div className="relative h-full w-full max-w-7xl">
              <Image
                src={cldFullscreenImage(images[activeIndex].url)}
                alt={images[activeIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ImageGalleryClient;
