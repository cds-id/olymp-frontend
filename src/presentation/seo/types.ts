export type SeoMeta = {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: "website" | "article";
  locale?: string;
  siteName?: string;
  twitterCard?: "summary" | "summary_large_image";
  noindex?: boolean;
};

export type JsonLdWebSite = {
  type: "WebSite";
  name: string;
  url: string;
  description?: string;
};

export type JsonLdWebPage = {
  type: "WebPage";
  name: string;
  url: string;
  description?: string;
};

export type JsonLdBreadcrumb = {
  type: "BreadcrumbList";
  items: { name: string; url: string }[];
};

export type JsonLdData = JsonLdWebSite | JsonLdWebPage | JsonLdBreadcrumb;
