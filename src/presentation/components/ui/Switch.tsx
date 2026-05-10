export interface SwitchProps {
  label?: string;
  helperText?: string;
  checked?: boolean;
  disabled?: boolean;
  class?: string;
}

export function Switch(props: SwitchProps) {
  return (
    <label class={`flex items-start justify-between gap-4 rounded-xl border border-border bg-surface p-3.5 transition ${props.disabled ? "opacity-60" : "hover:border-green-500"} ${props.class ?? ""}`}>
      <span>
        {props.label && <span class="block text-sm font-semibold text-navy-900">{props.label}</span>}
        {props.helperText && <span class="mt-1 block text-xs text-neutral-500">{props.helperText}</span>}
      </span>
      <input type="checkbox" role="switch" checked={props.checked} disabled={props.disabled} class="peer sr-only" />
      <span class="relative mt-0.5 h-6 w-11 shrink-0 rounded-full bg-neutral-300 transition peer-checked:bg-green-500 peer-focus-visible:ring-4 peer-focus-visible:ring-green-50 after:absolute after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-white after:shadow-sm after:transition peer-checked:after:translate-x-5" />
    </label>
  );
}
