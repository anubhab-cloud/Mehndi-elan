import type { MetadataRoute } from "next";

// ─── Sitemap ───────────────────────────────────────────────────────────────
// Generated at build time for Google Search Console
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mehndi-elan.com";
  const currentDate = new Date();

  const staticRoutes = [
    { url: baseUrl, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/about`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/services`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/gallery`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/packages`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/testimonials`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/faq`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/booking`, priority: 1.0, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/privacy`, priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return staticRoutes.map((route) => ({
    url: route.url,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
