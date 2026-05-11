import { AdminLayout } from "../../../presentation/layouts/AdminLayout";

export default function MonitoringAdminPage() {
  return (
    <AdminLayout title="Monitoring" subtitle="Pantau progres ujian, log kecurangan, stream SSE, dan audit aktivitas.">
      <div class="rounded-[24px] border border-border bg-surface p-6 text-sm text-neutral-600 shadow-sm">
        Kerangka halaman monitoring siap. Langkah berikutnya: pilih ujian untuk memuat progres dan stream event langsung.
      </div>
    </AdminLayout>
  );
}
