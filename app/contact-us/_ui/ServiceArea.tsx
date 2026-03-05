import { ORG_PROFILE } from "@/app/_lib/org/profile";
import { SERVICE_AREA } from "@/app/_lib/org/serviceArea";
import { cn } from "@/app/_lib/utils/cn";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";
import { scopeLabel } from "@/app/_lib/org/serviceArea";


export default function ServiceArea() {
  const area = SERVICE_AREA;

  return (
    <section
      className={cn(
        "rounded-2xl border border-white/70 bg-white/80 shadow-sm backdrop-blur p-6 sm:p-8",
      )}
      aria-labelledby="service-area"
    >
      <div className="space-y-2">
        <Header as="h3" size="sm">
          Areas we service
        </Header>

        <div className="flex justify-center">
          <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700">
            {scopeLabel(area.scope)}
          </span>
        </div>

        <P className="text-center text-gray-600" size="sm">
          <span className="font-medium text-gray-800">
            {area.primaryRegion}
          </span>
          {area.note ? ` — ${area.note}` : null}
        </P>
      </div>

      {/* Suburbs */}
      {area.featuredSuburbs?.length ? (
        <div className="mt-5">
          <P size="sm" className="text-gray-700 font-medium mb-2">
            Popular suburbs we work in
          </P>

          <ul className="flex flex-wrap gap-2">
            {area.featuredSuburbs.map((s) => (
              <li
                key={s}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800"
              >
                {s}
              </li>
            ))}
          </ul>

          {/* SEO-friendly sentence */}
          <P className="mt-4 text-xs text-gray-500">
            {`${ORG_PROFILE.orgName} has served many happy local clients in `}
            {area.featuredSuburbs.slice(0, 6).join(", ")}
            {area.featuredSuburbs.length > 6
              ? " and surrounding areas"
              : ""} in {area.state}, {area.country}.
          </P>
        </div>
      ) : null}
    </section>
  );
}
