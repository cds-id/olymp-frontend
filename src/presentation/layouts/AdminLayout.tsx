import type { JSX } from "solid-js";
import { BottomNavbar, SidebarMenu } from "../components/ui";
import { AuthGuard } from "../auth/AuthGuard";
import { useRbac } from "../auth/rbac";

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
  const path = () => (typeof window === "undefined" ? "/admin" : window.location.pathname);
  const rbac = useRbac();
  const markedGroups = () => groups.map((group) => ({
    ...group,
    items: group.items.filter((item) => rbac.can(item.permission)).map((item) => ({ ...item, active: path() === item.href })),
  })).filter((group) => group.items.length > 0);

  return (
    <AuthGuard staffOnly>
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
              {props.actions && <div class="flex flex-wrap gap-2">{props.actions}</div>}
            </div>
          </header>
          <div class="mx-auto max-w-[1400px] px-4 py-5 sm:px-6 lg:px-8">{props.children}</div>
        </main>
      </div>
      <BottomNavbar items={mobileItems.filter((item) => rbac.can(item.permission)).map((item) => ({ ...item, active: path() === item.href }))} />
    </div>
    </AuthGuard>
  );
}
