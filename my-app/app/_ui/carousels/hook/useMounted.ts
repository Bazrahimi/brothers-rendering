"use client";

import { useSyncExternalStore } from "react";

/**
 * Returns true only after the component hydrates on the client.
 * Help avoid SSR/CSR mismatches ( common with Swiper).
 */
export const useMounted = (): boolean => {
  return useSyncExternalStore(
    () => () => {}, // subscribe (no-op)
    () => true, // client snapshot
    () => false, // server snapshot
  );
};
