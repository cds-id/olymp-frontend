import type { JSX } from "solid-js";
import { Show } from "solid-js";

export interface OverlayProps {
  open?: boolean;
  children: JSX.Element;
  class?: string;
  panelClass?: string;
}

export function Overlay(props: OverlayProps) {
  return (
    <Show when={props.open}>
      <div class={`fixed inset-0 z-50 bg-navy-950/50 p-4 backdrop-blur-sm ${props.class ?? ""}`}>
        <div class={props.panelClass}>{props.children}</div>
      </div>
    </Show>
  );
}
