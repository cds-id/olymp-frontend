import type { JSX } from "solid-js";
import { Link } from "../components/Link";

export function AppLayout(props: { children?: JSX.Element }) {
  return (
    <div class="min-h-screen bg-slate-50 text-slate-950">
      <div class="mx-auto flex min-h-screen max-w-6xl">
        <aside class="w-64 shrink-0 border-r border-slate-200 bg-white p-6">
          <a href="/" class="mb-8 block text-xl font-bold">
            Solid DDD
          </a>
          <nav class="flex flex-col gap-1 text-sm font-medium text-slate-700">
            <Link href="/">Home</Link>
            <Link href="/todo">Todo</Link>
            <Link href="/demo-ssr">SSR Demo</Link>
            <Link href="/demo-csr">CSR Demo</Link>
            <Link href="/demo-mixed">Mixed Demo</Link>
          </nav>
        </aside>
        <main class="flex-1 p-8">{props.children}</main>
      </div>
    </div>
  );
}
