import type { MetadataRoute } from "next";
import { BRAND_URL, BRAND_DESCRIPTION, BRAND_TAGLINE_SHORT } from "@/app/lib/brand";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BRAND_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BRAND_URL}/courses`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BRAND_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
