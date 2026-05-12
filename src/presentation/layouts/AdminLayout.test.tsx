import { describe, expect, it } from "vitest";
import { renderToString } from "solid-js/web";
import { RbacProvider } from "../auth/rbac";
import { AdminShell } from "./AdminLayout";
import type { MyRolesResponse, UserProfile } from "../../infrastructure/olymp/api";

const superadminRoles: MyRolesResponse = {
  roles: ["superadmin"],
  permissions: [],
  is_staff: true,
  is_admin: true,
};

const superadminProfile: UserProfile = {
  id: "user-1",
  email: "superadmin@local.test",
  username: "superadmin",
  name: "Super Admin",
};

describe("admin layout", () => {
  it("renders sidebar items when RBAC data allows admin access", () => {
    const html = renderToString(() => (
      <RbacProvider initialRoles={superadminRoles}>
        <AdminShell title="Ringkasan" subtitle="Panel operasi admin Olymp.">
          <div>Dashboard content</div>
        </AdminShell>
      </RbacProvider>
    ));

    expect(html).toContain("Ringkasan");
    expect(html).toContain("Event");
    expect(html).toContain("Peserta");
    expect(html).toContain("Akses");
  });

  it("renders account controls inside a corner avatar dropdown", () => {
    const html = renderToString(() => (
      <RbacProvider initialRoles={superadminRoles}>
        <AdminShell title="Ringkasan" initialProfile={superadminProfile}>
          <div>Dashboard content</div>
        </AdminShell>
      </RbacProvider>
    ));

    expect(html).toContain("<details");
    expect(html).toContain("<summary");
    expect(html).toContain("Akun pengguna");
    expect(html).toContain("Super Admin");
    expect(html).toContain("superadmin");
    expect(html).toContain("Admin");
    expect(html).toContain("Role akses");
    expect(html).toContain("href=\"/admin/profile\"");
    expect(html).toContain("Profil");
    expect(html).toContain("Keluar");
  });
});
