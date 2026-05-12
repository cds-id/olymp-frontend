import { describe, expect, it } from "vitest";
import { renderToString } from "solid-js/web";
import { RbacProvider } from "../auth/rbac";
import { AdminShell } from "./AdminLayout";
import type { MyRolesResponse } from "../../infrastructure/olymp/api";

const superadminRoles: MyRolesResponse = {
  roles: ["superadmin"],
  permissions: [],
  is_staff: true,
  is_admin: true,
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
});
