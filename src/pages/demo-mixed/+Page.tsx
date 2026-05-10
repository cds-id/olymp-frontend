import { createSignal, onMount, For, Show } from "solid-js";
import { useData } from "vike-solid/useData";
import type { Data } from "./+data";

/**
 * Mixed SSR + CSR Demo
 *
 * - Server data: articles list, server time (from +data.ts, in HTML source)
 * - Client interactivity: counter, live clock, search filter, localStorage
 *
 * Pattern: SSR provides initial content (SEO, fast paint),
 * client enhances with interactivity after hydration.
 */
export default function Page() {
  // ── SSR data (available immediately, visible in HTML source) ──
  const data = useData<Data>();

  // ── CSR-only state (runs after hydration in browser) ──
  const [count, setCount] = createSignal(0);
  const [clientTime, setClientTime] = createSignal("");
  const [search, setSearch] = createSignal("");
  const [hydrated, setHydrated] = createSignal(false);
  const [savedCount, setSavedCount] = createSignal<number | null>(null);

  onMount(() => {
    setHydrated(true);
    setClientTime(new Date().toISOString());

    // Read from localStorage (client-only API)
    const stored = localStorage.getItem("demo-mixed-count");
    if (stored) setSavedCount(parseInt(stored, 10));

    // Live clock
    const timer = setInterval(() => {
      setClientTime(new Date().toISOString());
    }, 1000);

    return () => clearInterval(timer);
  });

  const filteredArticles = () => {
    const q = search().toLowerCase();
    if (!q) return data.articles;
    return data.articles.filter((a) => a.title.toLowerCase().includes(q));
  };

  const handleIncrement = () => {
    const next = count() + 1;
    setCount(next);
    localStorage.setItem("demo-mixed-count", String(next));
  };

  return (
    <section class="space-y-6">
      {/* Header */}
      <div>
        <p class="text-sm font-semibold uppercase tracking-wide text-purple-600">Mixed Demo</p>
        <h1 class="mt-2 text-3xl font-bold">SSR + CSR Combined</h1>
        <p class="mt-3 max-w-2xl text-slate-600">
          Server renders initial HTML with data. Client hydrates and adds interactivity.
          View page source — article list is in raw HTML. Counter and clock run client-side only.
        </p>
      </div>

      {/* ── SSR Section: Server Data (in HTML source) ── */}
      <div class="rounded-xl border border-green-200 bg-green-50 p-6">
        <h2 class="text-lg font-semibold text-green-800">
          🖥️ Server-Rendered (SSR)
          <span class="ml-2 text-xs font-normal text-green-600">— visible in page source</span>
        </h2>
        <dl class="mt-4 grid gap-3 sm:grid-cols-3">
          <div class="rounded-lg bg-white p-4">
            <dt class="text-xs font-medium uppercase text-slate-500">Server Time</dt>
            <dd class="mt-1 font-mono text-sm">{data.serverTime}</dd>
          </div>
          <div class="rounded-lg bg-white p-4">
            <dt class="text-xs font-medium uppercase text-slate-500">Runtime</dt>
            <dd class="mt-1 font-mono text-sm">{data.serverRuntime}</dd>
          </div>
          <div class="rounded-lg bg-white p-4">
            <dt class="text-xs font-medium uppercase text-slate-500">Node</dt>
            <dd class="mt-1 font-mono text-sm">{data.nodeVersion}</dd>
          </div>
        </dl>

        {/* Articles — SSR content, searchable client-side */}
        <h3 class="mt-6 text-sm font-semibold text-green-800">Articles (server data)</h3>
        <ul class="mt-2 space-y-2">
          <For each={filteredArticles()}>
            {(article) => (
              <li class="flex items-center justify-between rounded-lg bg-white px-4 py-3">
                <span class="text-sm font-medium text-slate-800">{article.title}</span>
                <span class="text-xs text-slate-500">{article.views} views</span>
              </li>
            )}
          </For>
          <Show when={filteredArticles().length === 0}>
            <li class="rounded-lg bg-white px-4 py-3 text-sm text-slate-400">No matches</li>
          </Show>
        </ul>
      </div>

      {/* ── CSR Section: Client Interactivity (after hydration) ── */}
      <div class="rounded-xl border border-orange-200 bg-orange-50 p-6">
        <h2 class="text-lg font-semibold text-orange-800">
          ⚡ Client Interactive (CSR)
          <span class="ml-2 text-xs font-normal text-orange-600">— runs after hydration</span>
        </h2>

        <dl class="mt-4 grid gap-3 sm:grid-cols-2">
          <div class="rounded-lg bg-white p-4">
            <dt class="text-xs font-medium uppercase text-slate-500">Hydrated</dt>
            <dd class="mt-1 font-mono text-sm">
              {hydrated() ? (
                <span class="font-bold text-green-600">Yes ✓</span>
              ) : (
                <span class="text-slate-400">Pending…</span>
              )}
            </dd>
          </div>
          <div class="rounded-lg bg-white p-4">
            <dt class="text-xs font-medium uppercase text-slate-500">Live Clock</dt>
            <dd class="mt-1 font-mono text-sm">{clientTime() || "—"}</dd>
          </div>
        </dl>

        {/* Counter with localStorage persistence */}
        <div class="mt-4 flex items-center gap-4">
          <button
            onClick={handleIncrement}
            class="rounded-lg bg-orange-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-700 active:scale-95"
          >
            Count: {count()}
          </button>
          <Show when={savedCount() !== null}>
            <span class="text-xs text-slate-500">
              Previously saved: {savedCount()}
            </span>
          </Show>
        </div>

        {/* Search filter — client filters SSR data */}
        <div class="mt-4">
          <label for="search" class="text-xs font-medium uppercase text-slate-500">
            Filter articles (client-side)
          </label>
          <input
            id="search"
            type="text"
            placeholder="Type to filter…"
            value={search()}
            onInput={(e) => setSearch(e.currentTarget.value)}
            class="mt-1 w-full max-w-sm rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
          />
        </div>
      </div>

      {/* Explanation */}
      <div class="rounded-xl border border-purple-100 bg-purple-50 p-4 text-sm text-purple-800">
        <strong>How it works:</strong>{" "}
        <code>+data.ts</code> fetches articles on server → HTML includes article list (SEO-friendly).
        After hydration, SolidJS activates counter, clock, search filter, and localStorage.
        Best pattern for pages needing both SEO content and rich interactivity.
      </div>
    </section>
  );
}
