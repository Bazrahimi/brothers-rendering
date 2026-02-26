import { ORG_MANIFEST } from "@/app/_lib/org/manifest";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return ORG_MANIFEST;
}
