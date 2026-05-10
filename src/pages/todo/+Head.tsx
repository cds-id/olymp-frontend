import { SeoHead, JsonLd } from "../../presentation/seo";

export function Head() {
  return (
    <>
      <SeoHead canonical="https://example.com/todo" type="website" />
      <JsonLd
        data={{
          type: "WebPage",
          name: "Todo — DDD Example",
          url: "https://example.com/todo",
          description: "Todo CRUD with Domain Driven Design layers.",
        }}
      />
      <JsonLd
        data={{
          type: "BreadcrumbList",
          items: [
            { name: "Home", url: "https://example.com/" },
            { name: "Todo", url: "https://example.com/todo" },
          ],
        }}
      />
    </>
  );
}
