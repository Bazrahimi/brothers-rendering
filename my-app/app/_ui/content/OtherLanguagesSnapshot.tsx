import { OTHER_LANGUAGES as ol } from "@/app/_lib/languages/multiculturalStatement";
import { ORG_PROFILE } from "@/app/_lib/org/profile";
import { SERVICES } from "@/app/_lib/org/category/services";
import Link from "next/link";
import { cn } from "@/app/_lib/utils/cn";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";
import Section from "@/app/_ui/layout/Section";

export default function OtherLanguagesSnapshot({
  className,
}: {
  className?: string;
}) {
  const keys = ORG_PROFILE.otherLangKeys ?? [];
  if (keys.length === 0) return null;

  // keep it light: just a few preview service names in Farsi
  const servicesPreview = Object.values(SERVICES)
    .slice(0, 3)
    .map((s) => s.labelFarsi);

  return (
    <Section className={cn("space-y-4", className)}>
      <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <Header as="h2" className="text-slate-900">
              We speak your language
            </Header>
            <P className="text-slate-600">
              Read our services and contact us in your preferred language.
            </P>
          </div>

          <span className="hidden sm:inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
            Languages
          </span>
        </div>

        {/* Language cards */}
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {keys.map((lang) => {
            const labels = ol[lang]?.label;
            if (!labels) return null;

            // choose display label (you already use HZ/FA logic)
            const displayLabel = "HZ" in labels ? labels.HZ : labels.FA;

            return (
              <Link
                key={lang}
                href={`/languages/${encodeURIComponent(displayLabel)}`}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <P className="font-semibold text-slate-900">{displayLabel}</P>
                  <P className="text-xs text-slate-500">View</P>
                </div>

                <P className="mt-2 text-sm text-slate-600 line-clamp-2">
                  {ol[lang].statement(ORG_PROFILE.orgNameFarsi)}
                </P>
              </Link>
            );
          })}
        </div>

        {/* Optional tiny Farsi preview line (lightweight) */}
        {servicesPreview.length > 0 ? (
          <P className="mt-5 text-sm text-slate-600" dir="rtl">
            نمونه خدمات: {servicesPreview.join(" • ")}
          </P>
        ) : null}
      </div>
    </Section>
  );
}