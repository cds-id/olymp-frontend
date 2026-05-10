import type { JSX } from "solid-js";
import { Show } from "solid-js";
import { Overlay } from "./Overlay";

export interface DialogProps {
  open?: boolean;
  title?: JSX.Element;
  body?: JSX.Element;
  children?: JSX.Element;
  footer?: JSX.Element;
}

export function Dialog(props: DialogProps) {
  return (
    <Overlay open={props.open} class="flex items-center justify-center" panelClass="w-full max-w-sm rounded-3xl bg-surface shadow-xl sm:max-w-md">
      <Show when={props.title}>
        <header class="border-b border-border px-5 py-4 sm:px-6">
          <h2 class="font-display text-lg font-bold text-navy-900">{props.title}</h2>
        </header>
      </Show>
      <div class="px-5 py-4 text-sm leading-relaxed text-neutral-700 sm:px-6">{props.body ?? props.children}</div>
      <Show when={props.footer}>
        <footer class="flex flex-col-reverse gap-3 border-t border-border px-6 py-4 sm:flex-row sm:justify-end">{props.footer}</footer>
      </Show>
    </Overlay>
  );
}
