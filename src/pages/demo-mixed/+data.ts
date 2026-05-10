// Server-only: fetched at SSR time, serialized into HTML
import type { PageContextServer } from "vike/types";

export type Data = Awaited<ReturnType<typeof data>>;

export async function data(_pageContext: PageContextServer) {
  // Simulate server-side data fetch (e.g., from Postgres, Redis, API)
  return {
    serverTime: new Date().toISOString(),
    serverRuntime: "Node.js (server)",
    nodeVersion: process.version,
    articles: [
      { id: 1, title: "Getting Started with SolidJS", views: 1240 },
      { id: 2, title: "Domain Driven Design in Frontend", views: 890 },
      { id: 3, title: "SSR vs CSR — When to Use What", views: 2100 },
    ],
  };
}
