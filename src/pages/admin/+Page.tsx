import { For } from "solid-js";
import { AdminLayout } from "../../presentation/layouts/AdminLayout";

function Kartu(props: { label: string; href: string; desc: string }) {
  return <a href={props.href} class="rounded-[24px] border border-border bg-surface p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"><div class="font-display text-xl font-extrabold text-navy-900">{props.label}</div><p class="mt-2 text-sm text-neutral-600">{props.desc}</p></a>;
}

export default function AdminDashboardPage() {
  const items = [
    ["Event", "/admin/events", "Kelola event dan stage."],
    ["Peserta", "/admin/participants", "Verifikasi dan persetujuan peserta."],
    ["Ujian", "/admin/exams", "Pantau jadwal dan paket soal."],
    ["Peringkat", "/admin/ranking", "Hitung dan publikasi ranking."],
  ];
  return <AdminLayout title="Ringkasan" subtitle="Panel operasi admin Olymp."><div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4"><For each={items}>{(i) => <Kartu label={i[0]} href={i[1]} desc={i[2]} />}</For></div></AdminLayout>;
}
