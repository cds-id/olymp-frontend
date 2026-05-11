import { AdminLayout } from "../../../presentation/layouts/AdminLayout";

export default function CertificatesAdminPage() {
  return (
    <AdminLayout title="Sertifikat" subtitle="Kelola template sertifikat, proses generate, dan pencarian sertifikat peserta.">
      <div class="rounded-[24px] border border-border bg-surface p-6 text-sm text-neutral-600 shadow-sm">
        Kerangka halaman sertifikat siap. Langkah berikutnya: pilih event dan stage, lalu panggil endpoint generate sertifikat.
      </div>
    </AdminLayout>
  );
}
