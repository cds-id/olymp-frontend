import type { JSX } from "solid-js";

export interface FormGroupProps {
  title?: JSX.Element;
  description?: JSX.Element;
  children: JSX.Element;
  class?: string;
}

export function FormGroup(props: FormGroupProps) {
  return (
    <section class={`rounded-3xl border border-border bg-surface p-5 shadow-sm sm:p-6 ${props.class ?? ""}`}>
      {(props.title || props.description) && (
        <header class="mb-5 border-b border-border pb-4">
          {props.title && <h2 class="font-display text-lg font-bold text-navy-900">{props.title}</h2>}
          {props.description && <p class="mt-1 text-sm text-neutral-600">{props.description}</p>}
        </header>
      )}
      <div class="grid gap-4">{props.children}</div>
    </section>
  );
}
