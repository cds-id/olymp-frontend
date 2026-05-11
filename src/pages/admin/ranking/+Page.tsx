import { createResource, createSignal } from "solid-js";
import { AdminLayout } from "../../../presentation/layouts/AdminLayout";
import { Badge, Select } from "../../../presentation/components/ui";
import { ServerDataTable } from "../../../presentation/components/admin/ServerDataTable";
import { olympApi, type RankingEntry } from "../../../infrastructure/olymp/api";

function Stat(props: { label: string; value: string }) { return <div class="rounded-[20px] border border-border bg-surface p-4 shadow-sm"><div class="text-xs font-bold uppercase tracking-[0.12em] text-neutral-400">{props.label}</div><div class="mt-2 font-display text-2xl font-extrabold text-navy-900">{props.value}</div></div>; }

export default function RankingAdminPage() {
  const [eventId, setEventId] = createSignal("");
  const [stageId, setStageId] = createSignal("");
  const [events] = createResource(() => ({ page: 1, per_page: 100 }), olympApi.events);
  const [stages] = createResource(eventId, (id) => id ? olympApi.stages(id) : Promise.resolve({ data: [], meta: null }));
  const [ranking] = createResource(stageId, (id) => id ? olympApi.ranking(id) : Promise.resolve({ data: null, meta: null }));
  const data = () => ranking()?.data;
  return (
    <AdminLayout title="Peringkat" subtitle="Tampilan hasil ranking per stage. Aksi approval/promosi menunggu finalisasi skenario.">
      <div class="mb-4 grid gap-3 rounded-[24px] border border-border bg-surface p-4 shadow-sm md:grid-cols-2">
        <Select label="Event" placeholder="Pilih event" value={eventId()} onChange={(v) => { setEventId(v); setStageId(""); }} options={(events()?.data ?? []).map((event) => ({ label: event.name, value: event.id }))} />
        <Select label="Stage" placeholder="Pilih stage" value={stageId()} onChange={setStageId} options={(stages()?.data ?? []).map((stage) => ({ label: stage.name ?? stage.tier, value: stage.id }))} />
      </div>
      <div class="mb-4 grid gap-3 sm:grid-cols-3"><Stat label="Status" value={data()?.status ?? "-"} /><Stat label="Peserta" value={String(data()?.total_participants ?? 0)} /><Stat label="Lolos" value={String(data()?.total_qualified ?? 0)} /></div>
      <ServerDataTable<RankingEntry> rows={data()?.entries ?? []} loading={ranking.loading} emptyText="Belum ada peringkat" columns={[
        { key: "rank", header: "Peringkat" },
        { key: "score", header: "Nilai" },
        { key: "completion_time_secs", header: "Waktu" },
        { key: "cheating_log_count", header: "Flag" },
        { key: "qualification_status", header: "Kelulusan", render: (row) => <Badge tone={String(row.qualification_status).includes("qualified") ? "green" : "neutral"}>{String(row.qualification_status)}</Badge> },
      ]} />
    </AdminLayout>
  );
}
