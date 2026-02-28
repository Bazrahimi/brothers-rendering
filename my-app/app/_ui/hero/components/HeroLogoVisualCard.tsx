import { LeafImage } from "@/app/_lib/org/definitions";
import { P } from "@/app/_ui/typography/paragraph";
import ServiceLeafImage from "@/app/services/[slug]/_ui/ServiceLeafImage";

type Props = {
  heroImgUrl: LeafImage;
  orgName: string;
  ctaLabel: string;
};

export default function HeroLogoVisualCard({ heroImgUrl, orgName, ctaLabel }: Props) {
  return (
    <div className="lg:col-span-5">
   
      <div className="rounded-3xl border border-white/60 bg-white/20 p-3 shadow-sm backdrop-blur-3xl">
        <ServiceLeafImage
          image={heroImgUrl}
          alt={`${orgName} Logo`}
          aspect="aspect-[16/12]"
        />

        <P className="text-center text-gray-50">
          Fast {ctaLabel} • Clear communication
        </P>
      </div>
    </div>
  );
}
