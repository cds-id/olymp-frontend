export default function Page() {
  return (
    <section class="space-y-6">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wide text-blue-600">Boilerplate</p>
        <h1 class="mt-2 text-3xl font-bold">Solid DDD</h1>
        <p class="mt-3 max-w-2xl text-slate-600">
          SolidJS + Vike + Tailwind CSS + TanStack Query with Domain Driven Design architecture.
        </p>
      </div>

      <div class="grid gap-4 sm:grid-cols-2">
        <Card title="Domain" desc="Entities, value objects, repository interfaces." />
        <Card title="Use Cases" desc="Application logic orchestrating domain objects." />
        <Card title="Repository" desc="Concrete data access implementations." />
        <Card title="Presentation" desc="Components, layouts, pages — UI layer." />
      </div>

      <div class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="text-lg font-semibold">Quick start</h2>
        <pre class="mt-3 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-100">
          <code>{`bun install\nbun run dev`}</code>
        </pre>
      </div>
    </section>
  );
}

function Card(props: { title: string; desc: string }) {
  return (
    <div class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 class="font-semibold text-slate-900">{props.title}</h3>
      <p class="mt-1 text-sm text-slate-600">{props.desc}</p>
    </div>
  );
}
