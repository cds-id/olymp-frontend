import { describe, expect, it } from "vitest";
import { renderToString } from "solid-js/web";
import { RbacProvider } from "../../../presentation/auth/rbac";
import type { MyRolesResponse, UserProfile } from "../../../infrastructure/olymp/api";
import { ProfileView } from "./ProfileView";

const roles: MyRolesResponse = {
  roles: ["superadmin", "peserta"],
  permissions: ["event.view", "rbac.role.view"],
  is_staff: true,
  is_admin: true,
};

const profile: UserProfile = {
  id: "user-1",
  email: "superadmin@local.test",
  username: "superadmin",
  name: "Super Admin",
  phone: null,
};

describe("admin profile page", () => {
  it("renders profile details and role chips", () => {
    const html = renderToString(() => (
      <RbacProvider initialRoles={roles}>
        <ProfileView initialProfile={profile} />
      </RbacProvider>
    ));

    expect(html).toContain("Profil");
    expect(html).toContain("Super Admin");
    expect(html).toContain("superadmin@local.test");
    expect(html).toContain("superadmin");
    expect(html).toContain("peserta");
  });
});
