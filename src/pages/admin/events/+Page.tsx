import { createResource, createSignal } from "solid-js";
import { AdminLayout } from "../../../presentation/layouts/AdminLayout";
import { Badge } from "../../../presentation/components/ui";
import { ServerDataTable } from "../../../presentation/components/admin/ServerDataTable";
import { olympApi, type Event } from "../../../infrastructure/olymp/api";

function getStatusTone(status?: string) { return status === "active" ? "green" : status === "draft" ? "gold" : "neutral"; }

export default function EventsAdminPage() {
  const [page, setPage] = createSignal(1);
  const [search, setSearch] = createSignal("");
  const [events] = createResource(() => ({ page: page(), q: search(), per_page: 20 }), olympApi.events);
  return (
    <AdminLayout title="Event" subtitle="Daftar event dari backend. Aksi detail/CRUD menunggu finalisasi skenario.">
      <ServerDataTable<Event & Record<string, unknown>> rows={(events()?.data ?? []) as (Event & Record<string, unknown>)[]} meta={events()?.meta} loading={events.loading} search={search()} onSearch={(v) => { setSearch(v); setPage(1); }} onPage={setPage} columns={[
        { key: "name", header: "Event", render: (row) => <div><div class="font-bold text-navy-900">{row.name}</div><div class="text-xs text-neutral-500">{row.academic_year}</div></div> },
        { key: "status", header: "Status", render: (row) => <Badge tone={getStatusTone(row.status)} dot>{row.status}</Badge> },
        { key: "slug", header: "Slug" },
        { key: "created_at", header: "Dibuat", render: (row) => <span>{row.created_at ? new Date(row.created_at).toLocaleDateString("id-ID") : "-"}</span> },
      ]} />
    </AdminLayout>
  );
}
