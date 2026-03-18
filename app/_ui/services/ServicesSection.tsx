import ServiceLeafImage from "@/app/(pages)/services/[slug]/_ui/ServiceLeafImage";
import type { ServicesPage } from "@/app/_lib/org/definitions";
import { PublicRoutes } from "@/app/_lib/routes/publicRoutes";
import { cn } from "@/app/_lib/utils/cn";
import ServiceLeavesCarousel from "@/app/_ui/carousels/ServiceLeavesCarousel";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";
import Button from "../button/Button";

type Props = {
  service: ServicesPage;
  className?: string;
};

export default function ServiceSection({ service, className }: Props) {
  return (
    <section
      className={cn(
        "rounded-3xl border border-slate-200shadow-sm backdrop-blur bg-org-primary-dark",
        className,
      )}
    >
      <Header as="h2" className="text-gray-50 mt-5" align="center">
        {service.label}
      </Header>

      {/* Header area */}
      <div className="grid gap-6 p-1 md:p-3 sm:p-8 lg:grid-cols-12 lg:items-start">
        {/* Bigger image */}
        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            {/* Bigger aspect ratio */}
            <ServiceLeafImage
              image={service.image}
        
              aspect="aspect-[16/10]"
            />
          </div>
        </div>

        {/* Text */}
        <div className="lg:col-span-7 space-y-2 ">
          <P className="text-gray-100">
            {/* description is readonly string[] */}
            {service.description}
          </P>
        </div>
      </div>

      {/* Carousel */}

      <ServiceLeavesCarousel
        subcategories={service.subcategories}
        className="border-0 bg-transparent p-0 shadow-none backdrop-blur-0"
      />

      <Button
        as="link"
        href={PublicRoutes.service(service.slug)}
        fullWidth
     
      >
        View all {service.label}
      </Button>
    </section>
  );
}
