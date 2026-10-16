import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "browser",
    background_color: "#191C1B",
    theme_color: "#191C1B",
    icons: [
      {
        src: site.brand.appIcon,
        sizes: "any",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
