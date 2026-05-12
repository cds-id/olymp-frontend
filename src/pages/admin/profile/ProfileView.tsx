import { createResource, For, Show } from "solid-js";
import { Badge } from "../../../presentation/components/ui";
import { useRbac } from "../../../presentation/auth/rbac";
import { getSessionUser } from "../../../presentation/auth/session";
import { olympApi, type UserProfile } from "../../../infrastructure/olymp/api";

export function ProfileView(props: { initialProfile?: UserProfile }) {
  const rbac = useRbac();
  const [profile] = createResource(
    () => (props.initialProfile ? false : true),
    async () => (await olympApi.me().catch(() => ({ data: getSessionUser() as UserProfile | null }))).data,
  );
  const currentProfile = () => props.initialProfile ?? profile() ?? getSessionUser();
  const roles = () => rbac.roles()?.roles ?? [];
  const permissions = () => rbac.roles()?.permissions ?? [];

  return (
    <div class="grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
      <section class="rounded-[28px] border border-border bg-surface p-6 shadow-sm">
        <div class="mb-5">
          <p class="text-xs font-bold uppercase tracking-[0.16em] text-green-700">Profil akun</p>
        </div>
        <div class="flex flex-col gap-5 sm:flex-row sm:items-center">
          <div class="flex h-20 w-20 items-center justify-center rounded-3xl bg-navy-900 font-display text-3xl font-extrabold text-white shadow-md">
            {(currentProfile()?.name || currentProfile()?.username || currentProfile()?.email || "A").slice(0, 1).toUpperCase()}
          </div>
          <div class="min-w-0">
            <p class="text-xs font-bold uppercase tracking-[0.16em] text-green-700">Akun aktif</p>
            <h2 class="mt-1 truncate font-display text-2xl font-extrabold text-navy-900">
              {currentProfile()?.name || currentProfile()?.username || "Admin"}
            </h2>
            <p class="mt-1 text-sm text-neutral-600">{currentProfile()?.email ?? "Memuat profil..."}</p>
          </div>
        </div>

        <div class="mt-6 grid gap-3 sm:grid-cols-2">
          <ProfileField label="Username" value={currentProfile()?.username ?? "-"} />
          <ProfileField label="Email" value={currentProfile()?.email ?? "-"} />
          <ProfileField label="Nama" value={currentProfile()?.name ?? "-"} />
          <ProfileField label="Telepon" value={currentProfile()?.phone ?? "-"} />
        </div>
      </section>

      <aside class="rounded-[28px] border border-border bg-surface p-6 shadow-sm">
        <div class="flex items-center justify-between gap-3">
          <div>
            <p class="text-xs font-bold uppercase tracking-[0.16em] text-green-700">Akses</p>
            <h3 class="mt-1 font-display text-xl font-extrabold text-navy-900">Role chips</h3>
          </div>
          <Show when={rbac.roles()?.is_admin}>
            <Badge tone="green">Admin</Badge>
          </Show>
        </div>

        <div class="mt-5 flex flex-wrap gap-2">
          <For each={roles()} fallback={<Badge tone="neutral">Tidak ada role</Badge>}>
            {(role) => <Badge tone={role === "superadmin" ? "navy" : "neutral"}>{role}</Badge>}
          </For>
        </div>

        <div class="mt-6 rounded-2xl bg-neutral-50 p-4">
          <div class="text-xs font-bold uppercase tracking-[0.14em] text-neutral-400">Izin aktif</div>
          <div class="mt-2 font-display text-2xl font-extrabold text-navy-900">{permissions().length}</div>
          <p class="mt-1 text-sm text-neutral-600">Permission dari backend RBAC untuk sesi ini.</p>
        </div>
      </aside>
    </div>
  );
}

function ProfileField(props: { label: string; value: string }) {
  return (
    <div class="rounded-2xl border border-border bg-surface-soft px-4 py-3">
      <div class="text-xs font-bold uppercase tracking-[0.12em] text-neutral-400">{props.label}</div>
      <div class="mt-1 break-words text-sm font-semibold text-navy-900">{props.value}</div>
    </div>
  );
}
