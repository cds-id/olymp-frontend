import type { JSX } from "solid-js";
import { Overlay } from "./Overlay";

export interface BottomSheetProps {
  open?: boolean;
  title?: JSX.Element;
  children: JSX.Element;
  footer?: JSX.Element;
  class?: string;
}

export function BottomSheet(props: BottomSheetProps) {
  return (
    <Overlay open={props.open} class="flex items-end justify-center p-0 sm:p-4" panelClass={`w-full max-w-xl rounded-t-3xl bg-surface p-5 shadow-xl sm:rounded-3xl ${props.class ?? ""}`}>
      <div class="mx-auto mb-4 h-1 w-10 rounded-full bg-neutral-300" />
      {props.title && <h2 class="font-display text-lg font-bold text-navy-900">{props.title}</h2>}
      <div class="mt-3 text-sm text-neutral-700">{props.children}</div>
      {props.footer && <div class="mt-6 border-t border-border pt-4">{props.footer}</div>}
    </Overlay>
  );
}
