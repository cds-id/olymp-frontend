import type { JSX } from "solid-js";
import { createResource, For, Show } from "solid-js";
import { Badge, BottomNavbar, SidebarMenu } from "../components/ui";
import { AuthGuard } from "../auth/AuthGuard";
import { useRbac } from "../auth/rbac";
import { clearSession, getSessionUser, getToken } from "../auth/session";
import { olympApi, type UserProfile } from "../../infrastructure/olymp/api";

const groups = [
  { label: "Operasi", items: [
    { label: "Ringkasan", href: "/admin", icon: "chart", permission: "event.view" },
    { label: "Event", href: "/admin/events", icon: "book", permission: "event.view" },
    { label: "Peserta", href: "/admin/participants", icon: "users", permission: "participant.view" },
    { label: "Ujian", href: "/admin/exams", icon: "graduation", permission: "exam.view" },
  ] },
  { label: "Keputusan", items: [
    { label: "Peringkat", href: "/admin/ranking", icon: "trophy", permission: "ranking.view" },
    { label: "Sertifikat", href: "/admin/certificates", icon: "spark", permission: "certificate.view" },
  ] },
  { label: "Kontrol", items: [
    { label: "Monitoring", href: "/admin/monitoring", icon: "chart", permission: "monitoring.view" },
    { label: "Akses", href: "/admin/rbac", icon: "shield", permission: "rbac.role.view" },
  ] },
];

const mobileItems = [
  { label: "Event", href: "/admin/events", icon: "book", permission: "event.view" },
  { label: "Peserta", href: "/admin/participants", icon: "users", permission: "participant.view" },
  { label: "Ujian", href: "/admin/exams", icon: "graduation", permission: "exam.view" },
  { label: "Rank", href: "/admin/ranking", icon: "trophy", permission: "ranking.view" },
];

export function AdminLayout(props: { title: string; subtitle?: string; actions?: JSX.Element; children: JSX.Element }) {
  return (
    <AuthGuard staffOnly>
      <AdminShell {...props} />
    </AuthGuard>
  );
}

export function AdminShell(props: { title: string; subtitle?: string; actions?: JSX.Element; children: JSX.Element; initialProfile?: UserProfile }) {
  const path = () => (typeof window === "undefined" ? "/admin" : window.location.pathname);
  const rbac = useRbac();
  const markedGroups = () => groups.map((group) => ({
    ...group,
    items: group.items.filter((item) => rbac.can(item.permission)).map((item) => ({ ...item, active: path() === item.href })),
  })).filter((group) => group.items.length > 0);

  return (
    <div class="min-h-screen bg-bg text-neutral-900">
      <div class="flex min-h-screen">
        <SidebarMenu brand="Olymp" groups={markedGroups()} footer="Dashboard produksi. Semua pagination dari server." />
        <main class="min-w-0 flex-1 pb-24 md:pb-0">
          <header class="sticky top-0 z-20 border-b border-border bg-bg/90 backdrop-blur">
            <div class="mx-auto flex max-w-[1400px] flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
              <div>
                <p class="text-xs font-bold uppercase tracking-[0.16em] text-green-700">Panel Admin</p>
                <h1 class="mt-1 font-display text-2xl font-extrabold text-navy-900 sm:text-3xl">{props.title}</h1>
                {props.subtitle && <p class="mt-1 max-w-2xl text-sm text-neutral-600">{props.subtitle}</p>}
              </div>
              <div class="flex flex-wrap items-center gap-3">
                {props.actions && <div class="flex flex-wrap gap-2">{props.actions}</div>}
                <AdminAccountPanel initialProfile={props.initialProfile} />
              </div>
            </div>
          </header>
          <div class="mx-auto max-w-[1400px] px-4 py-5 sm:px-6 lg:px-8">{props.children}</div>
        </main>
      </div>
      <BottomNavbar items={mobileItems.filter((item) => rbac.can(item.permission)).map((item) => ({ ...item, active: path() === item.href }))} />
    </div>
  );
}

function AdminAccountPanel(props: { initialProfile?: UserProfile }) {
  const rbac = useRbac();
  const [profile] = createResource(
    () => (props.initialProfile ? false : true),
    async () => (await olympApi.me().catch(() => ({ data: getSessionUser() as UserProfile | null }))).data,
  );
  const currentProfile = () => props.initialProfile ?? profile() ?? getSessionUser();
  const displayName = () => currentProfile()?.name || currentProfile()?.username || currentProfile()?.email || "Admin";
  const roleChips = () => rbac.roles()?.roles ?? [];

  async function logout() {
    const token = getToken();
    if (token) await olympApi.logout(token).catch(() => undefined);
    clearSession();
    if (typeof window !== "undefined") window.location.href = "/login";
  }

  return (
    <details class="group relative">
      <summary
        aria-label="Akun pengguna"
        class="flex cursor-pointer list-none items-center gap-2 rounded-2xl border border-border bg-surface px-2.5 py-2 shadow-sm transition hover:-translate-y-px hover:shadow-md [&::-webkit-details-marker]:hidden"
      >
        <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 font-display text-sm font-extrabold text-white shadow-sm">
          {displayName().slice(0, 1).toUpperCase()}
        </div>
        <div class="hidden min-w-0 text-left sm:block">
          <div class="max-w-[150px] truncate text-sm font-bold text-navy-900">{displayName()}</div>
          <div class="text-[11px] font-semibold uppercase tracking-[0.12em] text-green-700">Akun pengguna</div>
        </div>
        <span class="hidden text-neutral-400 transition group-open:rotate-180 sm:inline">⌄</span>
      </summary>

      <div class="absolute right-0 top-[calc(100%+0.5rem)] z-50 w-72 rounded-3xl border border-border bg-surface p-4 shadow-xl">
        <div class="flex items-center gap-3">
          <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 font-display text-lg font-extrabold text-white">
            {displayName().slice(0, 1).toUpperCase()}
          </div>
          <div class="min-w-0">
            <div class="truncate font-display text-base font-extrabold text-navy-900">{displayName()}</div>
            <div class="truncate text-xs text-neutral-500">{currentProfile()?.email}</div>
          </div>
        </div>

        <div class="mt-4">
          <div class="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-neutral-400">Role akses</div>
          <div class="flex flex-wrap gap-1.5">
            <Show when={rbac.roles()?.is_admin}>
              <Badge tone="green">Admin</Badge>
            </Show>
            <For each={roleChips()}>
              {(role) => <Badge tone={role === "superadmin" ? "navy" : "neutral"}>{role}</Badge>}
            </For>
          </div>
        </div>

        <div class="mt-4 grid gap-1 border-t border-border pt-3">
          <a href="/admin/profile" class="rounded-xl px-3 py-2 text-sm font-semibold text-green-700 transition hover:bg-green-50 hover:text-green-900">
            Profil
          </a>
          <button type="button" onClick={logout} class="rounded-xl px-3 py-2 text-left text-sm font-semibold text-neutral-600 transition hover:bg-neutral-50 hover:text-navy-900">
            Keluar
          </button>
        </div>
      </div>
    </details>
  );
}
