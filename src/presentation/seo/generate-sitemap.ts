/**
 * Generate XML sitemap string.
 * Use in a Vike API route or build script.
 *
 * @example
 * // In an API route or prerender hook:
 * const xml = generateSitemap("https://example.com", [
 *   { path: "/", changefreq: "daily", priority: 1.0 },
 *   { path: "/todo", changefreq: "weekly", priority: 0.8 },
 *   { path: "/demo-ssr", changefreq: "monthly", priority: 0.5 },
 * ]);
 */

export type SitemapEntry = {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
};

export function generateSitemap(baseUrl: string, entries: SitemapEntry[]): string {
  const urls = entries
    .map(
      (e) =>
        `  <url>
    <loc>${baseUrl}${e.path}</loc>${e.lastmod ? `\n    <lastmod>${e.lastmod}</lastmod>` : ""}${e.changefreq ? `\n    <changefreq>${e.changefreq}</changefreq>` : ""}${e.priority !== undefined ? `\n    <priority>${e.priority.toFixed(1)}</priority>` : ""}
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

/** Default pages for this boilerplate */
export const defaultSitemapEntries: SitemapEntry[] = [
  { path: "/", changefreq: "daily", priority: 1.0 },
  { path: "/todo", changefreq: "weekly", priority: 0.8 },
  { path: "/demo-ssr", changefreq: "monthly", priority: 0.5 },
  { path: "/demo-mixed", changefreq: "monthly", priority: 0.5 },
];
