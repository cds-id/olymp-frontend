import { SeoHead, JsonLd } from "../../presentation/seo";

export function Head() {
  return (
    <>
      <SeoHead canonical="https://example.com/demo-ssr" type="website" />
      <JsonLd
        data={{
          type: "WebPage",
          name: "SSR Demo",
          url: "https://example.com/demo-ssr",
          description: "Server-side rendering demo with Vike and SolidJS.",
        }}
      />
      <JsonLd
        data={{
          type: "BreadcrumbList",
          items: [
            { name: "Home", url: "https://example.com/" },
            { name: "SSR Demo", url: "https://example.com/demo-ssr" },
          ],
        }}
      />
    </>
  );
}
