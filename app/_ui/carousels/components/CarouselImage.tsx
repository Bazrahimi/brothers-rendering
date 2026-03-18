"use client";
import ServiceLeafImage from "@/app/(pages)/services/[slug]/_ui/ServiceLeafImage";
import type { ServiceLeaf } from "@/app/_lib/org/definitions";
type CarouselImageProps = {
  image: ServiceLeaf["image"];

};

const CarouselImage = ({ image }: CarouselImageProps) => {
  return <ServiceLeafImage image={image} aspect="aspect-[4/3]" />;
};

export default CarouselImage;
