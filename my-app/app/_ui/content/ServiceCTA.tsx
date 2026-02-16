"use client";

import { PublicRoutes } from "@/app/_lib/routes/publicRoutes";
import { cn } from "@/app/_lib/utils/cn";
import Link from "next/link";
import { useMemo } from "react";
import { Header } from "../typography/Header";
import { P } from "../typography/paragraph";

type Props = {
  serviceCategory: string;
  leafLabel?: string;
  className?: string;
};

const buildPrefillMessage = (serviceCategory: string, leafLabel?: string) => {
  if (leafLabel) {
    return `Hi, I’d like a free quote for: ${serviceCategory} → ${leafLabel}. Please contact me.`;
  }
  return `Hi, I’d like a free quote for: ${serviceCategory}. Please contact me.`;
};

export default function ServiceCTA({
  serviceCategory,
  leafLabel,
  className,
}: Props) {
  const message = useMemo(
    () => buildPrefillMessage(serviceCategory, leafLabel),
    [serviceCategory, leafLabel],
  );

  const href = {
    pathname: PublicRoutes.freeConsultation(),
    query: {

      message,
    },
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 sm:p-10 shadow-xl",
        className,
      )}
    >
      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

      <Header as="h2" size="md" align="center" className="text-white">
        Free Quote / Free Consultation
      </Header>

      <P className="mt-3 text-center text-slate-300">
        Tell us what you need and we’ll get back to you with advice and a quote.
      </P>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Link
          href={href}
          className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90"
        >
          Get a free quote
        </Link>

        <Link
          href={PublicRoutes.contact()}
          className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
        >
          Ask a question
        </Link>
      </div>
    </div>
  );
}
