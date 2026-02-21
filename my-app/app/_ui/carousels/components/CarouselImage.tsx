"use client";
import type { ServiceLeaf } from "@/app/_lib/org/definitions";
import ServiceLeafImage from "@/app/services/[slug]/_ui/ServiceLeafImage";
type CarouselImageProps = {
  image: ServiceLeaf["image"];
  alt: string;
};

const CarouselImage = ({ image, alt }: CarouselImageProps) => {
  return <ServiceLeafImage image={image} alt={alt} aspect="aspect-[4/3]" />;
};

export default CarouselImage;
