import { publicAssets } from "@/app/_lib/org/publicAssets";
import { IMAGE_DEFAULT_BLUR } from "@/app/_ui/image/ImageShimer";
import Image from "next/image";

type Props = {
  orgName: string;
};
// TODO: could you please insert the inline comment for each talwind classes I want delete some of t
export default function HeroBackground({  orgName }: Props) {
  return (
    <div className="absolute inset-0">
      <Image
        src={publicAssets.icons.apple}
        alt={`${orgName} hero background`}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        placeholder="blur"
        blurDataURL={IMAGE_DEFAULT_BLUR}
      />

      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

      {/* <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(270deg, rgba(11,37,77,0.96) 0%, rgba(11,37,77,0.82) 30%, rgba(11,37,77,0.45) 55%, rgba(11,37,77,0.15) 75%, rgba(11,37,77,0) 100%)",
        }}
      /> */}

      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(90deg, rgba(4,15,31,0.45) 0%, rgba(4,15,31,0.25) 20%, rgba(4,15,31,0.12) 35%, rgba(4,15,31,0) 55%)",
        }}
      />

      <div
        className="absolute inset-x-0 bottom-0 h-44"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to top, rgba(4,15,31,0.92), rgba(4,15,31,0))",
        }}
      />

      {/* <div
        className="absolute inset-0 opacity-[0.10] mix-blend-soft-light"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.9) 0, rgba(255,255,255,0) 40%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.7) 0, rgba(255,255,255,0) 35%)",
        }}
      /> */}
    </div>
  );
}
