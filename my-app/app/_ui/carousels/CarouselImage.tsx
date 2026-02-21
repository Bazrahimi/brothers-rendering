"use client"
import type { ServiceLeaf } from "@/app/_lib/org/definitions";
import ServiceLeafImage from "@/app/services/[slug]/_ui/ServiceLeafImage";
type CarouselImageProps = {
  image: ServiceLeaf["image"];
  alt: string;
};

const CarouselImage = ({ image, alt }: CarouselImageProps) => {
  return (
    <div className="p-3">
      <ServiceLeafImage image={image} alt={alt} aspect="aspect-[4/3]" />
    </div>
  );
};

export default CarouselImage;
