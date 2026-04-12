import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site-config";

const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/projects", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/work", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/resume", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
