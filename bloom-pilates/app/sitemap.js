import { siteUrl, nav } from "@/lib/site";

export default function sitemap() {
  const now = new Date();
  return nav.map((item) => ({
    url: `${siteUrl}${item.href === "/" ? "" : item.href}`,
    lastModified: now,
    changeFrequency: item.href === "/rozvrh" ? "weekly" : "monthly",
    priority: item.href === "/" ? 1 : 0.7,
  }));
}
