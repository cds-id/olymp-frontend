import { For, Show } from "solid-js";
import type { FieldSize } from "./Input";

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps {
  label?: string;
  placeholder?: string;
  options: SelectOption[];
  value?: string;
  searchable?: boolean;
  disabled?: boolean;
  size?: FieldSize;
  helperText?: string;
  error?: string;
  class?: string;
}

const selectSizeClasses: Record<FieldSize, { shell: string; control: string; search: string }> = {
  sm: { shell: "rounded-lg", control: "h-9 rounded-lg px-3 text-[13px]", search: "h-9 rounded-lg px-3 text-[13px]" },
  md: { shell: "rounded-xl", control: "h-11 rounded-xl px-3.5 text-sm", search: "h-10 rounded-lg px-3 text-sm" },
  lg: { shell: "rounded-[14px]", control: "h-[52px] rounded-[14px] px-4 text-[15px]", search: "h-11 rounded-xl px-3.5 text-sm" },
};

export function Select(props: SelectProps) {
  const size = () => props.size ?? "md";
  const classes = () => selectSizeClasses[size()];

  return (
    <label class={`block ${props.class ?? ""}`}>
      {props.label && <span class="mb-2 block text-sm font-semibold text-navy-900">{props.label}</span>}
      <div class={`${classes().shell} border border-border bg-surface shadow-sm focus-within:border-green-500 focus-within:ring-4 focus-within:ring-green-50 ${props.searchable ? "p-1.5" : ""}`}>
        <Show when={props.searchable}>
          <input
            type="search"
            placeholder="Cari..."
            class={`mb-1.5 w-full border border-border bg-neutral-50 outline-none placeholder:text-neutral-400 ${classes().search}`}
            disabled={props.disabled}
          />
        </Show>
        <select
          value={props.value ?? ""}
          disabled={props.disabled}
          class={`w-full appearance-none border-0 bg-transparent text-neutral-800 outline-none disabled:opacity-60 ${classes().control}`}
        >
          {props.placeholder && <option value="">{props.placeholder}</option>}
          <For each={props.options}>
            {(option) => <option value={option.value} disabled={option.disabled}>{option.label}</option>}
          </For>
        </select>
      </div>
      {props.error ? <p class="mt-1.5 text-xs font-medium text-red-600">{props.error}</p> : props.helperText && <p class="mt-1.5 text-xs text-neutral-500">{props.helperText}</p>}
    </label>
  );
}
