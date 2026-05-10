import { For } from "solid-js";
import { Icon } from "../Icon";

export interface BottomNavbarItem {
  label: string;
  href: string;
  icon: string;
  active?: boolean;
}

export interface BottomNavbarProps {
  items: BottomNavbarItem[];
  class?: string;
}

export function BottomNavbar(props: BottomNavbarProps) {
  return (
    <nav class={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 shadow-lg backdrop-blur md:hidden ${props.class ?? ""}`} aria-label="Mobile navigation">
      <div class="mx-auto grid max-w-md" style={{ "grid-template-columns": `repeat(${props.items.length}, minmax(0, 1fr))` }}>
        <For each={props.items}>
          {(item) => (
            <a href={item.href} class={`flex flex-col items-center gap-1 rounded-xl px-2 py-1.5 text-[11px] transition-colors ${item.active ? "font-bold text-green-700" : "font-medium text-neutral-500 hover:text-navy-900"}`}>
              <Icon name={item.icon} size={20} stroke={item.active ? 2.5 : 1.8} />
              <span>{item.label}</span>
            </a>
          )}
        </For>
      </div>
    </nav>
  );
}
