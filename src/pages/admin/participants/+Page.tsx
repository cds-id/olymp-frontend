import { createResource, createSignal } from "solid-js";
import { AdminLayout } from "../../../presentation/layouts/AdminLayout";
import { Badge, Select } from "../../../presentation/components/ui";
import { ServerDataTable } from "../../../presentation/components/admin/ServerDataTable";
import { olympApi, type ParticipantListItem } from "../../../infrastructure/olymp/api";

function getStatusTone(status?: string | null) { return status === "assigned_to_exam" || status === "verified" ? "green" : status === "registered" ? "gold" : "neutral"; }

export default function ParticipantsAdminPage() {
  const [eventId, setEventId] = createSignal("");
  const [stageId, setStageId] = createSignal("");
  const [page, setPage] = createSignal(1);
  const [events] = createResource(() => ({ page: 1, per_page: 100 }), olympApi.events);
  const [stages] = createResource(eventId, (id) => id ? olympApi.stages(id) : Promise.resolve({ data: [], meta: null }));
  const [participants] = createResource(() => ({ stageId: stageId(), page: page() }), ({ stageId, page }) => stageId ? olympApi.stageParticipants(stageId, { page, per_page: 20 }) : Promise.resolve({ data: [], meta: null }));
  return (
    <AdminLayout title="Peserta" subtitle="Daftar peserta per stage dengan pagination server-side.">
      <div class="mb-4 grid gap-3 rounded-[24px] border border-border bg-surface p-4 shadow-sm md:grid-cols-2">
        <Select label="Event" placeholder="Pilih event" value={eventId()} onChange={(v) => { setEventId(v); setStageId(""); }} options={(events()?.data ?? []).map((event) => ({ label: event.name, value: event.id }))} />
        <Select label="Stage" placeholder="Pilih stage" value={stageId()} onChange={setStageId} options={(stages()?.data ?? []).map((stage) => ({ label: stage.name ?? stage.tier, value: stage.id }))} />
      </div>
      <ServerDataTable<ParticipantListItem> rows={participants()?.data ?? []} meta={participants()?.meta} loading={participants.loading} onPage={setPage} emptyText="Pilih event dan stage untuk memuat peserta" columns={[
        { key: "id", header: "Peserta", render: (row) => <div><div class="font-bold text-navy-900">{String(row.id)}</div><div class="text-xs text-neutral-500">{String(row.school_name ?? "Sekolah belum diisi")}</div></div> },
        { key: "stage_status", header: "Status", render: (row) => <Badge tone={getStatusTone(row.stage_status)} dot>{String(row.stage_status ?? "-")}</Badge> },
        { key: "score", header: "Nilai" },
        { key: "rank", header: "Peringkat" },
      ]} />
    </AdminLayout>
  );
}
