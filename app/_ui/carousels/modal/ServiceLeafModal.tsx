"use client";

import type { ServiceLeaf } from "@/app/_lib/org/definitions";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import Button from "../../button/Button";
import ServiceLeafModalContent from "./ServiceLeafModalContent";

type Props = {
  open: boolean;
  onClose: () => void;
  leaf: ServiceLeaf;
  leafId: string;
};

export default function ServiceLeafModal({
  open,
  onClose,
  leaf,
  leafId,
}: Props) {
  const canRenderInPortal = typeof document !== "undefined";

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!canRenderInPortal || !open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] overflow-y-auto bg-slate-900/60 p-4">
      <div className="flex min-h-full items-start justify-center py-6 sm:items-center">
        <div
          className="absolute inset-0"
          onClick={onClose}
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-4xl rounded-2xl bg-white shadow-xl">
          <Button onClick={onClose} aria-label="Close modal" variant="danger" size="sm" fullWidth>
            Close
          </Button>

          <div className="p-4 sm:p-6">
            <ServiceLeafModalContent leaf={leaf} leafId={leafId} />
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
