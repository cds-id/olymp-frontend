import type { SeoMeta } from "./types";

/**
 * Renders additional SEO <head> tags beyond Vike's built-in title/description.
 * Use inside +Head.tsx or with <Head> from vike-solid.
 *
 * Vike auto-handles: <title>, og:title, meta description, og:description, og:image
 * This component adds: canonical, robots, twitter, og:type, og:locale, og:site_name
 */
export function SeoHead(props: Partial<SeoMeta>) {
  return (
    <>
      {props.canonical && <link rel="canonical" href={props.canonical} />}

      {/* Robots */}
      {props.noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Open Graph extras (title/desc/image handled by Vike) */}
      <meta property="og:type" content={props.type ?? "website"} />
      {props.locale && <meta property="og:locale" content={props.locale} />}
      {props.siteName && <meta property="og:site_name" content={props.siteName} />}
      {props.canonical && <meta property="og:url" content={props.canonical} />}

      {/* Twitter */}
      <meta name="twitter:card" content={props.twitterCard ?? "summary_large_image"} />
    </>
  );
}
