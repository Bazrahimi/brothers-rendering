import type { Service } from "@/app/_lib/org/definitions";
import { PublicRoutes } from "@/app/_lib/routes/publicRoutes";
import { cn } from "@/app/_lib/utils/cn";
import ServiceLeavesCarousel from "@/app/_ui/carousels/ServiceLeavesCarousel";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";
import ServiceLeafImage from "@/app/services/[slug]/_ui/ServiceLeafImage";
import Button from "../button/Button";
import ServiceCTA from "../content/ServiceCTA";
import { ORG_PROFILE } from "@/app/_lib/org/profile";

type Props = {
  service: Service;
  className?: string;
};

export default function ServiceSection({ service, className }: Props) {
  return (
    <section
      className={cn(
        "rounded-3xl border border-slate-200 bg-white/70 shadow-sm backdrop-blur",
        className,
      )}
    >
      {/* Header area */}
      <div className="grid gap-6 p-1 md:p-3 sm:p-8 lg:grid-cols-12 lg:items-center">
        {/* Bigger image */}
        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            {/* Bigger aspect ratio */}
            <ServiceLeafImage
              image={service.image}
              alt={service.label}
              aspect="aspect-[16/10]"
            />
          </div>
        </div>

        {/* Text */}
        <div className="lg:col-span-7 space-y-3">
          <Header as="h2" className="text-slate-900" align="center">
            {service.label}
          </Header>

          <P className="text-slate-600">
            {/* description is readonly string[] */}
            {service.description?.[0] ?? ""}
          </P>

          {/* Optional: small “view all” link */}
          {/* <Link href={PublicRoutes.service(service.slug)} className="text-sm font-semibold">
              View all {service.label}
            </Link> */}
          <Button as="link" href={PublicRoutes.service(service.slug)} fullWidth variant="secondary">
            View all {service.label}
          </Button>
          <ServiceCTA 
          ctaKey={ORG_PROFILE.cta}
          serviceLabel={service.label}
          
          />
        </div>
      </div>

      {/* Carousel */}
      <div className="p-3 md:p-6 pb-6 sm:px-8 sm:pb-8">
        <ServiceLeavesCarousel
          slug={service.slug}
          subcategories={service.subcategories}
          heading={`What We Offer in ${service.label}`}
          className="border-0 bg-transparent p-0 shadow-none backdrop-blur-0"
        />
      </div>
    </section>
  );
}
