import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";
import Link from "next/link";
import { FaArrowAltCircleDown } from "react-icons/fa";

import type { FAQItem } from "@/app/_lib/org/orgPages/contactUs";

type Props = {
  items: ReadonlyArray<FAQItem>;
  title?: string;
  subtitle?: string;
  ctaHref?: string; // e.g. "#enquiry-form" or "/contact-us"
  ctaLabel?: string; // e.g. "Send an enquiry"
};

export default function ContactFAQ({
  items,
  title = "Frequently asked questions",
  subtitle = "Quick answers to common enquiries.",
  ctaHref = "#enquiry-form",
  ctaLabel = "Send an enquiry",
}: Props) {
  if (!items.length) return null;

  return (
    <section className="mt-10 rounded-2xl border border-org-primary-main/10 bg-linear-to-br from-org-primary-dark to-org-primary-light shadow-sm backdrop-blur p-6 sm:p-8">
      <div className="space-y-1">
        <Header as="h3"   className="text-gray-50">
          {title}
        </Header>
        <P className="text-gray-50">{subtitle}</P>
      </div>

      <div className="mt-5 space-y-3">
        {items.map((item, idx) => (
          <details
            key={`${idx}-${item.q}`}
            className="group rounded-xl border border-gray-200 bg-white p-4"
          >
            <summary className="cursor-pointer list-none select-none font-medium text-gray-900">
              <span className="mr-2 text-gray-500">Q.</span>
              {item.q}
              {/* <span className="float-right text-gray-400 group-open:rotate-180 transition-transform animate-bounce">
                ▾
              </span> */}
              <FaArrowAltCircleDown className="float-right text-org-primary-main group-open:rotate-180 transition-transform animate-pulse w-5 h-5" />
            </summary>

            <div className="mt-3 pl-1">
              <P className="text-gray-700">{item.a}</P>
            </div>
          </details>
        ))}
      </div>

      {ctaHref ? (
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-gray-50 p-4">
          <P className="text-gray-700">Still need help?</P>
          <Link
            href={ctaHref}
            className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
          >
            {ctaLabel}
          </Link>
        </div>
      ) : null}
    </section>
  );
}
