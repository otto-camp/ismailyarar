import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/*/_next/*", "https://analytics.yarar.dev/*"],
      },
    ],
    sitemap: "https://yarar.dev/sitemap.xml",
  };
}
