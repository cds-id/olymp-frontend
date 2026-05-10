import { SeoHead, JsonLd } from "../../presentation/seo";

export function Head() {
  return (
    <>
      <SeoHead canonical="https://example.com/demo-mixed" type="website" />
      <JsonLd
        data={{
          type: "WebPage",
          name: "Mixed SSR+CSR Demo",
          url: "https://example.com/demo-mixed",
          description: "Combined SSR and CSR rendering demo with SolidJS and Vike.",
        }}
      />
      <JsonLd
        data={{
          type: "BreadcrumbList",
          items: [
            { name: "Home", url: "https://example.com/" },
            { name: "Mixed Demo", url: "https://example.com/demo-mixed" },
          ],
        }}
      />
    </>
  );
}
