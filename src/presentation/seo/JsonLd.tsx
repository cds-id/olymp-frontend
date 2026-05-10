import type { JsonLdData } from "./types";

/**
 * Renders JSON-LD structured data script tag.
 * Place inside +Head.tsx or <Head> component.
 */
export function JsonLd(props: { data: JsonLdData }) {
  const script = () => {
    const d = props.data;

    if (d.type === "WebSite") {
      return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: d.name,
        url: d.url,
        ...(d.description && { description: d.description }),
      });
    }

    if (d.type === "WebPage") {
      return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: d.name,
        url: d.url,
        ...(d.description && { description: d.description }),
      });
    }

    if (d.type === "BreadcrumbList") {
      return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: d.items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: item.url,
        })),
      });
    }

    return "";
  };

  return <script type="application/ld+json" innerHTML={script()} />;
}
