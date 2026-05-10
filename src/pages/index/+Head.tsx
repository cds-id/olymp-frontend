import { SeoHead, JsonLd } from "../../presentation/seo";

export function Head() {
  return (
    <>
      <SeoHead canonical="https://example.com/" type="website" />
      <JsonLd
        data={{
          type: "WebPage",
          name: "Solid DDD Boilerplate",
          url: "https://example.com/",
          description:
            "Production-ready SolidJS boilerplate with DDD, Vike SSR, Tailwind CSS, and TanStack Query.",
        }}
      />
      <JsonLd
        data={{
          type: "BreadcrumbList",
          items: [{ name: "Home", url: "https://example.com/" }],
        }}
      />
    </>
  );
}
