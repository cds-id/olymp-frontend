import type { JSX } from "solid-js";

export interface FieldProps {
  label?: JSX.Element;
  helperText?: JSX.Element;
  error?: JSX.Element;
  required?: boolean;
  children: JSX.Element;
  class?: string;
}

export function Field(props: FieldProps) {
  return (
    <label class={`block ${props.class ?? ""}`}>
      {props.label && (
        <span class="mb-2 block text-sm font-semibold text-navy-900">
          {props.label}
          {props.required && <span class="ml-1 text-red-600">*</span>}
        </span>
      )}
      {props.children}
      {props.helperText && <p class="mt-1.5 text-xs text-neutral-500">{props.helperText}</p>}
      {props.error && <p class="mt-1.5 text-xs font-medium text-red-600">{props.error}</p>}
    </label>
  );
}
