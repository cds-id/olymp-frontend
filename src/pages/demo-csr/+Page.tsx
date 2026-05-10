import { createSignal, onMount } from "solid-js";

export default function Page() {
  const [mounted, setMounted] = createSignal(false);
  const [clientTime, setClientTime] = createSignal("");
  const [userAgent, setUserAgent] = createSignal("");

  onMount(() => {
    setMounted(true);
    setClientTime(new Date().toISOString());
    setUserAgent(navigator.userAgent.slice(0, 80));
  });

  return (
    <section class="space-y-6">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wide text-orange-600">CSR Demo</p>
        <h1 class="mt-2 text-3xl font-bold">Client-Side Only</h1>
        <p class="mt-3 max-w-2xl text-slate-600">
          This page has{" "}
          <code class="rounded bg-slate-100 px-1.5 py-0.5 text-sm font-mono text-slate-800">ssr: false</code>.
          No HTML rendered on server — everything runs in browser. View page source to confirm empty body.
        </p>
      </div>

      <div class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="text-lg font-semibold">Client Data</h2>
        <dl class="mt-4 grid gap-3 sm:grid-cols-2">
          <div class="rounded-lg bg-slate-50 p-4">
            <dt class="text-xs font-medium uppercase text-slate-500">Mounted</dt>
            <dd class="mt-1 font-mono text-sm">
              {mounted() ? (
                <span class="text-green-600 font-bold">Yes ✓</span>
              ) : (
                <span class="text-slate-400">No</span>
              )}
            </dd>
          </div>
          <div class="rounded-lg bg-slate-50 p-4">
            <dt class="text-xs font-medium uppercase text-slate-500">Client Time</dt>
            <dd class="mt-1 font-mono text-sm">{clientTime() || "—"}</dd>
          </div>
          <div class="rounded-lg bg-slate-50 p-4 sm:col-span-2">
            <dt class="text-xs font-medium uppercase text-slate-500">User Agent</dt>
            <dd class="mt-1 font-mono text-xs break-all">{userAgent() || "—"}</dd>
          </div>
          <div class="rounded-lg bg-slate-50 p-4">
            <dt class="text-xs font-medium uppercase text-slate-500">SSR</dt>
            <dd class="mt-1 font-mono text-sm text-orange-600 font-bold">Disabled ✗</dd>
          </div>
        </dl>
      </div>

      <div class="rounded-xl border border-orange-100 bg-orange-50 p-4 text-sm text-orange-800">
        <strong>How it works:</strong> Server sends minimal HTML shell. SolidJS mounts in browser, runs{" "}
        <code>onMount</code>. No <code>+data.ts</code> needed — fetch data client-side with{" "}
        <code>useQuery</code> or signals. Good for dashboards, authenticated pages.
      </div>
    </section>
  );
}
