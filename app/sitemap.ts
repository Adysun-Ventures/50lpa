import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${site.domain}`;
  return [
    { url: base, priority: 1 },
    { url: `${base}/services`, priority: 0.8 },
    { url: `${base}/contact`, priority: 0.6 },
  ];
}
