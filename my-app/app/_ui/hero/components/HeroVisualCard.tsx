import { LeafImage } from "@/app/_lib/org/definitions";
import { P } from "@/app/_ui/typography/paragraph";
import ServiceLeafImage from "@/app/services/[slug]/_ui/ServiceLeafImage";

type Props = {
  heroImgUrl: LeafImage;
  orgName: string;
  ctaLabel: string;
};

export default function HeroVisualCard({ heroImgUrl, orgName, ctaLabel }: Props) {
  return (
    <div className="lg:col-span-5">
      <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
        <ServiceLeafImage
          image={heroImgUrl}
          alt={`${orgName} hero`}
          aspect="aspect-[16/12]"
        />

        <P className="text-center text-slate-500" size="sm">
          Fast {ctaLabel} • Clear communication
        </P>
      </div>
    </div>
  );
}
