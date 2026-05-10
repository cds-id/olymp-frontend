import type { JSX } from "solid-js";
import { Show } from "solid-js";

export interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  label?: string;
  class?: string;
}

const sizes = { sm: "h-4 w-4 border-2", md: "h-6 w-6 border-2", lg: "h-9 w-9 border-[3px]" };

export function Spinner(props: SpinnerProps) {
  const size = () => props.size ?? "md";
  return (
    <span class={`inline-flex items-center gap-2 text-sm text-neutral-600 ${props.class ?? ""}`}>
      <span class={`inline-block animate-spin rounded-full border-current border-r-transparent ${sizes[size()]}`} />
      {props.label && <span>{props.label}</span>}
    </span>
  );
}

export function CornerSpinner(props: SpinnerProps) {
  return <Spinner {...props} size={props.size ?? "sm"} class={`absolute right-3 top-3 ${props.class ?? ""}`} />;
}

export interface FloatingSpinnerStatusProps extends SpinnerProps {
  show?: boolean;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}

const floatingPositionClasses: Record<NonNullable<FloatingSpinnerStatusProps["position"]>, string> = {
  "top-right": "right-3 top-3",
  "top-left": "left-3 top-3",
  "bottom-right": "bottom-3 right-3",
  "bottom-left": "bottom-3 left-3",
};

export function FloatingSpinnerStatus(props: FloatingSpinnerStatusProps) {
  const show = () => props.show ?? true;
  const position = () => props.position ?? "top-right";

  return (
    <Show when={show()}>
      <div class={`absolute z-20 inline-flex h-8 items-center gap-2 rounded-full border border-border bg-surface/95 px-3 text-xs font-semibold text-neutral-700 shadow-md backdrop-blur ${floatingPositionClasses[position()]} ${props.class ?? ""}`}>
        <span class="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-r-transparent" />
        <span>{props.label ?? "Loading"}</span>
      </div>
    </Show>
  );
}

export interface SpinnerOverlayProps {
  show?: boolean;
  children: JSX.Element;
  label?: string;
  class?: string;
}

export function SpinnerOverlay(props: SpinnerOverlayProps) {
  return (
    <div class={`relative ${props.class ?? ""}`}>
      {props.children}
      <Show when={props.show}>
        <div class="absolute inset-0 z-10 flex items-center justify-center rounded-[inherit] bg-white/70 backdrop-blur-sm">
          <Spinner label={props.label ?? "Loading"} />
        </div>
      </Show>
    </div>
  );
}
