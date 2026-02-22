"use client";

import { useId } from "react";

/**
 * Provides unique class selectors for Swiper navigation.
 * Swiper needs CSS selectors or elements for prevEl/nextEl.
 */
export function useCarouselNav(prefix = "service-carousel") {
  const id = useId().replace(/:/g, "");
  const prevClass = `${prefix}-prev-${id}`;
  const nextClass = `${prefix}-next-${id}`;

  return {
    prevClass,
    nextClass,
    navigation: {
      prevEl: `.${prevClass}`,
      nextEl: `.${nextClass}`,
    } as const,
  };
}
