import { For, Show } from "solid-js";
import { Icon } from "../Icon";
import { Logo } from "../brand/Logo";

export interface SidebarMenuItem {
  label: string;
  href: string;
  icon?: string;
  active?: boolean;
  badge?: string;
  disabled?: boolean;
}

export interface SidebarMenuGroup {
  label?: string;
  items: SidebarMenuItem[];
}

export interface SidebarMenuProps {
  brand?: string;
  groups: SidebarMenuGroup[];
  collapsed?: boolean;
  footer?: string;
  class?: string;
}

export function SidebarMenu(props: SidebarMenuProps) {
  return (
    <aside class={`hidden min-h-screen border-r border-border bg-surface p-4 shadow-sm md:flex md:flex-col ${props.collapsed ? "w-20" : "w-72"} ${props.class ?? ""}`}>
      <div class="mb-6 px-1">
        <Show when={!props.collapsed} fallback={<Logo markSize={40} name="" tagline="" />}>
          <Logo name={props.brand ?? "Dashboard"} tagline="Admin Panel" />
        </Show>
      </div>

      <nav class="flex flex-1 flex-col gap-6" aria-label="Dashboard navigation">
        <For each={props.groups}>
          {(group) => (
            <div>
              <Show when={group.label && !props.collapsed}>
                <div class="mb-2 px-3 text-[11px] font-bold uppercase tracking-[0.14em] text-neutral-400">{group.label}</div>
              </Show>
              <div class="grid gap-1">
                <For each={group.items}>
                  {(item) => (
                    <a
                      href={item.disabled ? undefined : item.href}
                      aria-disabled={item.disabled ? "true" : undefined}
                      title={props.collapsed ? item.label : undefined}
                      class={`group flex h-10 items-center gap-3 rounded-xl px-3 text-sm transition ${
                        item.active
                          ? "bg-green-50 font-bold text-green-700"
                          : item.disabled
                            ? "cursor-not-allowed text-neutral-300"
                            : "font-medium text-neutral-600 hover:bg-neutral-50 hover:text-navy-900"
                      } ${props.collapsed ? "justify-center" : ""}`}
                    >
                      <Show when={item.icon}>
                        <Icon name={item.icon!} size={19} stroke={item.active ? 2.4 : 1.8} />
                      </Show>
                      <Show when={!props.collapsed}>
                        <span class="min-w-0 flex-1 truncate">{item.label}</span>
                        <Show when={item.badge}>
                          <span class="rounded-full bg-navy-50 px-2 py-0.5 text-[11px] font-bold text-navy-900">{item.badge}</span>
                        </Show>
                      </Show>
                    </a>
                  )}
                </For>
              </div>
            </div>
          )}
        </For>
      </nav>

      <Show when={props.footer && !props.collapsed}>
        <div class="mt-6 rounded-2xl bg-neutral-50 p-3 text-xs text-neutral-500">{props.footer}</div>
      </Show>
    </aside>
  );
}
