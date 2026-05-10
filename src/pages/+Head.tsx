import { SeoHead, JsonLd } from "../presentation/seo";

const SITE_URL = "https://example.com";
const SITE_NAME = "Solid DDD Boilerplate";

/**
 * Global <head> tags applied to ALL pages.
 * Lighthouse SEO/Performance/Accessibility/Best Practices essentials.
 */
export function Head() {
  return (
    <>
      {/* Viewport — Lighthouse Accessibility requires this */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Charset — Lighthouse Best Practices */}
      <meta charset="utf-8" />

      {/* Language hint — set on <html lang> via Vike, extra meta for crawlers */}
      <meta name="language" content="en" />

      {/* Theme color — Lighthouse PWA / Best Practices */}
      <meta name="theme-color" content="#1e293b" />

      {/* Mobile app capable */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      {/* Preconnect to common origins — Lighthouse Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />

      {/* Default SEO meta (pages override via Vike +title/+description) */}
      <SeoHead
        siteName={SITE_NAME}
        locale="en_US"
        type="website"
        twitterCard="summary_large_image"
      />

      {/* Site-level structured data */}
      <JsonLd
        data={{
          type: "WebSite",
          name: SITE_NAME,
          url: SITE_URL,
          description: "SolidJS + Vike + Tailwind + TanStack Query with DDD architecture",
        }}
      />
    </>
  );
}
