import type { MetadataRoute } from "next";
import { newsItems } from "@/lib/content";

const BASE_URL = "https://www.campusblend.jp";

const staticRoutes = [
  "",
  "/services",
  "/simulator",
  "/about/profile",
  "/about/message",
  "/about/philosophy",
  "/about/history",
  "/news",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const newsEntries = newsItems.map((item) => ({
    url: `${BASE_URL}/news/${item.slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...newsEntries];
}
