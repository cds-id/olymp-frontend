import { AdminLayout } from "../../../presentation/layouts/AdminLayout";
import { ProfileView } from "./ProfileView";

export default function ProfilePage() {
  return (
    <AdminLayout title="Profil" subtitle="Informasi akun dan akses admin yang sedang aktif.">
      <ProfileView />
    </AdminLayout>
  );
}
