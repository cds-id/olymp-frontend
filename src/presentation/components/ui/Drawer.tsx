import type { JSX } from "solid-js";
import { Overlay } from "./Overlay";

export interface DrawerProps {
  open?: boolean;
  title?: JSX.Element;
  side?: "left" | "right";
  children: JSX.Element;
  footer?: JSX.Element;
}

export function Drawer(props: DrawerProps) {
  const side = () => props.side ?? "right";
  return (
    <Overlay open={props.open} class={`flex p-0 ${side() === "left" ? "justify-start" : "justify-end"}`} panelClass="h-full w-[min(92vw,400px)] bg-surface p-5 shadow-xl sm:p-6">
      {props.title && <h2 class="font-display text-lg font-bold text-navy-900">{props.title}</h2>}
      <div class="mt-4 text-sm text-neutral-700">{props.children}</div>
      {props.footer && <div class="mt-6 border-t border-border pt-4">{props.footer}</div>}
    </Overlay>
  );
}
