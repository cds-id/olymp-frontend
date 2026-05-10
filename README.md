# Solid DDD Boilerplate

Production-ready **SolidJS** boilerplate with **Domain Driven Design**, **Vike** SSR/CSR, **Tailwind CSS**, and **TanStack Query**.

[![CI](https://github.com/your-org/boilerplate-solidjs/actions/workflows/ci.yml/badge.svg)](https://github.com/your-org/boilerplate-solidjs/actions)

---

## Stack

| Layer        | Technology                                    |
| ------------ | --------------------------------------------- |
| UI Framework | [SolidJS](https://www.solidjs.com/) 1.9       |
| SSR / Router | [Vike](https://vike.dev/) 0.4                 |
| Styling      | [Tailwind CSS](https://tailwindcss.com/) 4    |
| Data Fetching| [TanStack Solid Query](https://tanstack.com/query) + `vike-solid-query` |
| Testing      | [Vitest](https://vitest.dev/)                 |
| CI           | GitHub Actions + [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) |
| Runtime      | [Bun](https://bun.sh/)                        |

---

## Quick Start

```bash
# Install
bun install

# Dev server (http://localhost:3000)
bun run dev

# Production build + preview
bun run build && bun run preview

# Tests
bun run test

# Type check
bun run typecheck
```

---

## Architecture — Domain Driven Design

```
src/
├── domain/                    # Core business logic (no dependencies)
│   └── todo/
│       ├── todo.entity.ts         # Entity + factory function
│       └── todo.repository.ts     # Repository interface (port)
│
├── usecase/                   # Application logic (depends on domain only)
│   └── todo/
│       ├── create-todo.usecase.ts
│       └── list-todos.usecase.ts
│
├── repository/                # Concrete data access (implements domain ports)
│   └── todo/
│       ├── in-memory-todo.repository.ts
│       └── query-keys.ts
│
├── presentation/              # UI layer
│   ├── components/                # Shared components
│   │   └── Link.tsx
│   ├── layouts/                   # App layouts
│   │   └── AppLayout.tsx
│   ├── pages/                     # Page-level components
│   │   └── todo/
│   │       └── TodoPage.tsx
│   ├── seo/                       # SEO helpers
│   │   ├── SeoHead.tsx
│   │   ├── JsonLd.tsx
│   │   ├── generate-sitemap.ts
│   │   ├── types.ts
│   │   └── index.ts
│   └── styles/
│       └── global.css
│
└── pages/                     # Vike routing (thin wrappers)
    ├── +config.ts                 # Global config (SSR, Query, Tailwind)
    ├── +Layout.tsx
    ├── +Head.tsx                   # Global SEO head tags
    ├── index/+Page.tsx            # /
    ├── todo/+Page.tsx             # /todo
    ├── demo-ssr/+Page.tsx         # /demo-ssr  (SSR demo)
    ├── demo-csr/+Page.tsx         # /demo-csr  (CSR demo)
    ├── demo-mixed/+Page.tsx       # /demo-mixed (SSR+CSR combined)
    └── _error/+Page.tsx           # Error page
```

### Dependency Rule

```
presentation → usecase → domain ← repository
                  ↑                    │
                  └────────────────────┘
                   (implements interface)
```

- **Domain** has zero imports from other layers
- **Use cases** depend on domain interfaces only
- **Repository** implements domain interfaces
- **Presentation** composes use cases with concrete repositories

---

## SSR vs CSR

| Feature | SSR (default) | CSR (`ssr: false`) | Mixed SSR+CSR |
| ------- | ------------- | ------------------ | ------------- |
| HTML    | Pre-rendered on server | Empty shell | Pre-rendered + hydrated |
| SEO     | Full content in source | `noindex` recommended | Full content in source |
| Data    | `+data.ts` (server-only) | `useQuery` / signals (browser) | `+data.ts` + client signals |
| Use for | Public pages, SEO content | Dashboards, auth-gated | Blog, e-commerce, interactive pages |

### Make a page CSR-only

```ts
// src/pages/my-page/+config.ts
export default { ssr: false };
```

### SSR page with server data

```ts
// src/pages/my-page/+data.ts
export async function data() {
  return { items: await fetchFromDB() };
}
```

### Mixed SSR+CSR page

Server provides initial data (SEO), client adds interactivity after hydration:

```tsx
// +data.ts — runs on server
export async function data() {
  return { articles: await fetchArticles() };
}

// +Page.tsx — SSR content + client interactivity
import { createSignal, onMount } from "solid-js";
import { useData } from "vike-solid/useData";

export default function Page() {
  const data = useData();           // SSR data (in HTML)
  const [count, setCount] = createSignal(0); // CSR state (after hydration)

  onMount(() => { /* client-only: localStorage, timers, etc. */ });

  return (
    <>
      {/* SSR: articles visible in page source */}
      <For each={data.articles}>{(a) => <div>{a.title}</div>}</For>
      {/* CSR: interactive after hydration */}
      <button onClick={() => setCount(c => c + 1)}>Count: {count()}</button>
    </>
  );
}
```

---

## SEO

### Per-page SEO

Each page has `+config.ts` (title, description) and `+Head.tsx` (canonical, JSON-LD, breadcrumbs):

```ts
// src/pages/my-page/+config.ts
export default {
  title: "My Page — Site Name",
  description: "Description for search engines.",
};
```

```tsx
// src/pages/my-page/+Head.tsx
import { SeoHead, JsonLd } from "../../presentation/seo";

export function Head() {
  return (
    <>
      <SeoHead canonical="https://example.com/my-page" />
      <JsonLd data={{ type: "WebPage", name: "My Page", url: "https://example.com/my-page" }} />
    </>
  );
}
```

### Available SEO components

| Component | Purpose |
| --------- | ------- |
| `<SeoHead>` | canonical, robots, og:type, og:locale, twitter:card |
| `<JsonLd>` | Structured data (WebSite, WebPage, BreadcrumbList) |
| `generateSitemap()` | XML sitemap string generator |

Vike auto-generates `<title>`, `og:title`, `meta description`, `og:description` from `+config.ts`.

### Lighthouse target: 98%+

Global `+Head.tsx` includes viewport, charset, theme-color, preconnect, structured data.

---

## Data Fetching with TanStack Query

`vike-solid-query` handles SSR hydration automatically. Use `useQuery` in components:

```tsx
import { useQuery } from "@tanstack/solid-query";

function MyComponent() {
  const query = useQuery(() => ({
    queryKey: ["items"],
    queryFn: () => fetch("/api/items").then((r) => r.json()),
  }));

  return <Suspense fallback="Loading...">{/* use query.data */}</Suspense>;
}
```

---

<!-- LIGHTHOUSE_REPORT_START -->
## Lighthouse — Landing Page

Latest automated Lighthouse CI result for `/`.

| Category | Score |
| --- | ---: |
| ⚪ Performance | pending |
| ⚪ Accessibility | pending |
| ⚪ Best Practices | pending |
| ⚪ SEO | pending |

- URL: `/`
- Updated: `pending first main push`
- Commit: `pending`
- Workflow: pending
<!-- LIGHTHOUSE_REPORT_END -->

---

## CI — GitHub Actions

Pipeline runs on push/PR to `main`:

| Job | Stage | What |
| --- | ----- | ---- |
| `install` | Install | `bun install --frozen-lockfile` + cache |
| `test` | Test | `bun run test` |
| `typecheck` | Test | `tsc --noEmit` |
| `build` | Build | `bun run build` |
| `lighthouse` | Lighthouse | LHCI autorun against preview server |

### Lighthouse thresholds (`lighthouserc.cjs`)

```
Performance      ≥ 90%
Accessibility    ≥ 90%
Best Practices   ≥ 90%
SEO              ≥ 90%
```

Reports uploaded as artifacts (30-day retention).

### Run Lighthouse locally

```bash
bun run build
npm install -g @lhci/cli
lhci autorun
```

---

## Adding a New DDD Feature

1. **Domain** — Create entity + repository interface in `src/domain/<feature>/`
2. **Use Case** — Create use case in `src/usecase/<feature>/` (depends on domain only)
3. **Repository** — Implement repository in `src/repository/<feature>/`
4. **Presentation** — Create page component in `src/presentation/pages/<feature>/`
5. **Route** — Add Vike page in `src/pages/<feature>/+Page.tsx`
6. **SEO** — Add `+config.ts` and `+Head.tsx` with title, description, JSON-LD
7. **Test** — Write tests for entity + use case

---

## Scripts

| Command | Description |
| ------- | ----------- |
| `bun run dev` | Dev server with HMR |
| `bun run build` | Production build (client + SSR) |
| `bun run preview` | Build + preview production |
| `bun run test` | Run Vitest |
| `bun run typecheck` | TypeScript type check |

---

## License

MIT
