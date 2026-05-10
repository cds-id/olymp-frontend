export interface CheckboxProps {
  label: string;
  checked?: boolean;
  disabled?: boolean;
  helperText?: string;
}

export function Checkbox(props: CheckboxProps) {
  return (
    <label class={`flex gap-3 rounded-xl border border-border bg-surface p-3.5 transition ${props.disabled ? "opacity-60" : "hover:border-green-500"}`}>
      <input type="checkbox" checked={props.checked} disabled={props.disabled} class="mt-1 h-4 w-4 rounded border-border accent-green-600" />
      <span>
        <span class="block text-sm font-semibold text-navy-900">{props.label}</span>
        {props.helperText && <span class="mt-1 block text-xs text-neutral-500">{props.helperText}</span>}
      </span>
    </label>
  );
}
