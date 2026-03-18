"use client";

import { KeyboardEvent, RefObject, useEffect, useRef, useState } from "react";

type UseDropdownMenuReturn = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  rootRef: RefObject<HTMLDivElement | null>;
  btnRef: RefObject<HTMLButtonElement | null>;
  setItemRef: (index: number) => (el: HTMLElement | null) => void;
  onButtonKeyDown: (e: KeyboardEvent<HTMLButtonElement>) => void;
  onMenuKeyDown: (e: KeyboardEvent<HTMLElement>) => void;
};

export const useDropdownMenu = (itemCount: number): UseDropdownMenuReturn => {
  const [open, setOpen] = useState(false);

  const rootRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  // Close when clicking outside
  useEffect(() => {
    if (!open) return;

    const onClick = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  // Focus first item when menu opens
  useEffect(() => {
    if (!open) return;

    requestAnimationFrame(() => {
      itemRefs.current[0]?.focus();
    });
  }, [open]);

  const onButtonKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(true);
    }
  };

  const onMenuKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    const idx = itemRefs.current.findIndex(
      (el) => el === document.activeElement,
    );

    const total =
      itemCount && itemCount > 0 ? itemCount : itemRefs.current.length;

    if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
      btnRef.current?.focus();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = (idx + 1 + total) % total;
      itemRefs.current[next]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = (idx - 1 + total) % total;
      itemRefs.current[prev]?.focus();
    } else if (e.key === "Tab") {
      // close naturally when tabbing away
      setOpen(false);
    }
  };

  const setItemRef = (index: number) => (el: HTMLElement | null) => {
    itemRefs.current[index] = el;
  };

  return {
    open,
    setOpen,
    rootRef,
    btnRef,
    setItemRef,
    onButtonKeyDown,
    onMenuKeyDown,
  };
};
