import { createResource } from "solid-js";
import { AdminLayout } from "../../../presentation/layouts/AdminLayout";
import { Badge } from "../../../presentation/components/ui";
import { ServerDataTable } from "../../../presentation/components/admin/ServerDataTable";
import { olympApi, type Permission, type Role, type UserRoleAssignment } from "../../../infrastructure/olymp/api";

export default function RbacAdminPage() {
  const [roles] = createResource(olympApi.rolesList);
  const [permissions] = createResource(olympApi.permissions);
  const [assignments] = createResource(() => ({ page: 1, per_page: 20 }), olympApi.assignments);
  return (
    <AdminLayout title="Akses" subtitle="RBAC shell: peran, izin, dan penugasan dari backend.">
      <div class="grid gap-4 xl:grid-cols-2">
        <ServerDataTable<Role> rows={roles()?.data ?? []} loading={roles.loading} columns={[
          { key: "name", header: "Peran" },
          { key: "description", header: "Deskripsi" },
          { key: "is_system", header: "Sistem", render: (row) => <Badge tone={row.is_system ? "green" : "neutral"}>{row.is_system ? "Ya" : "Tidak"}</Badge> },
        ]} />
        <ServerDataTable<Permission> rows={permissions()?.data ?? []} loading={permissions.loading} columns={[
          { key: "code", header: "Izin" },
          { key: "resource", header: "Resource" },
          { key: "action", header: "Action" },
        ]} />
      </div>
      <div class="mt-4"><ServerDataTable<UserRoleAssignment> rows={assignments()?.data ?? []} meta={assignments()?.meta} loading={assignments.loading} columns={[
        { key: "user_id", header: "User" },
        { key: "role_id", header: "Role" },
        { key: "event_id", header: "Event" },
        { key: "is_active", header: "Status", render: (row) => <Badge tone={row.is_active ? "green" : "neutral"}>{row.is_active ? "Aktif" : "Nonaktif"}</Badge> },
      ]} /></div>
    </AdminLayout>
  );
}
