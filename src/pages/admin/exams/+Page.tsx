import { createResource, createSignal } from "solid-js";
import { AdminLayout } from "../../../presentation/layouts/AdminLayout";
import { Select } from "../../../presentation/components/ui";
import { ServerDataTable } from "../../../presentation/components/admin/ServerDataTable";
import { olympApi, type Exam } from "../../../infrastructure/olymp/api";

export default function ExamsAdminPage() {
  const [eventId, setEventId] = createSignal("");
  const [stageId, setStageId] = createSignal("");
  const [events] = createResource(() => ({ page: 1, per_page: 100 }), olympApi.events);
  const [stages] = createResource(eventId, (id) => id ? olympApi.stages(id) : Promise.resolve({ data: [], meta: null }));
  const [exams] = createResource(stageId, (id) => id ? olympApi.exams(id) : Promise.resolve({ data: [], meta: null }));
  return (
    <AdminLayout title="Ujian" subtitle="Daftar ujian per stage. Aksi detail/CRUD menunggu finalisasi skenario.">
      <div class="mb-4 grid gap-3 rounded-[24px] border border-border bg-surface p-4 shadow-sm md:grid-cols-2">
        <Select label="Event" placeholder="Pilih event" value={eventId()} onChange={(v) => { setEventId(v); setStageId(""); }} options={(events()?.data ?? []).map((event) => ({ label: event.name, value: event.id }))} />
        <Select label="Stage" placeholder="Pilih stage" value={stageId()} onChange={setStageId} options={(stages()?.data ?? []).map((stage) => ({ label: stage.name ?? stage.tier, value: stage.id }))} />
      </div>
      <ServerDataTable<Exam & Record<string, unknown>> rows={(exams()?.data ?? []) as (Exam & Record<string, unknown>)[]} loading={exams.loading} emptyText="Pilih stage untuk memuat ujian" columns={[
        { key: "title", header: "Ujian", render: (row) => <div><div class="font-bold text-navy-900">{row.title}</div><div class="text-xs text-neutral-500">{String(row.description ?? "-")}</div></div> },
        { key: "duration_minutes", header: "Durasi" },
        { key: "opens_at", header: "Dibuka", render: (row) => <span>{row.opens_at ? new Date(row.opens_at).toLocaleString("id-ID") : "-"}</span> },
        { key: "closes_at", header: "Ditutup", render: (row) => <span>{row.closes_at ? new Date(row.closes_at).toLocaleString("id-ID") : "-"}</span> },
      ]} />
    </AdminLayout>
  );
}
