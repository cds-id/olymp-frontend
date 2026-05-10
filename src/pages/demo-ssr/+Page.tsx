import { useData } from "vike-solid/useData";
import type { Data } from "./+data";

export default function Page() {
  const data = useData<Data>();

  return (
    <section class="space-y-6">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wide text-green-600">SSR Demo</p>
        <h1 class="mt-2 text-3xl font-bold">Server-Side Rendered</h1>
        <p class="mt-3 max-w-2xl text-slate-600">
          This page is rendered on the server. Data is fetched in{" "}
          <code class="rounded bg-slate-100 px-1.5 py-0.5 text-sm font-mono text-slate-800">+data.ts</code>{" "}
          before HTML is sent to client. View page source to see content in HTML.
        </p>
      </div>

      <div class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="text-lg font-semibold">Server Data</h2>
        <dl class="mt-4 grid gap-3 sm:grid-cols-2">
          <div class="rounded-lg bg-slate-50 p-4">
            <dt class="text-xs font-medium uppercase text-slate-500">Rendered At</dt>
            <dd class="mt-1 font-mono text-sm">{data.renderedAt}</dd>
          </div>
          <div class="rounded-lg bg-slate-50 p-4">
            <dt class="text-xs font-medium uppercase text-slate-500">Runtime</dt>
            <dd class="mt-1 font-mono text-sm">{data.runtime}</dd>
          </div>
          <div class="rounded-lg bg-slate-50 p-4">
            <dt class="text-xs font-medium uppercase text-slate-500">Node Version</dt>
            <dd class="mt-1 font-mono text-sm">{data.nodeVersion}</dd>
          </div>
          <div class="rounded-lg bg-slate-50 p-4">
            <dt class="text-xs font-medium uppercase text-slate-500">SSR</dt>
            <dd class="mt-1 font-mono text-sm text-green-600 font-bold">Enabled ✓</dd>
          </div>
        </dl>
      </div>

      <div class="rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-800">
        <strong>How it works:</strong> <code>+data.ts</code> runs on server only. Data serialized and sent with HTML.
        Page is interactive on client after hydration. Check page source — content visible in raw HTML.
      </div>
    </section>
  );
}
