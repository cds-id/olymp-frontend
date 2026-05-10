import { Icon } from "../Icon";

export interface FileInputProps {
  label?: string;
  helperText?: string;
  accept?: string;
  disabled?: boolean;
  class?: string;
}

export function FileInput(props: FileInputProps) {
  return (
    <label class={`block ${props.class ?? ""}`}>
      {props.label && <span class="mb-2 block text-sm font-semibold text-navy-900">{props.label}</span>}
      <div class={`flex min-h-28 cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-neutral-50 px-4 py-6 text-center transition ${props.disabled ? "opacity-60" : "hover:border-green-500 hover:bg-green-50/40"}`}>
        <Icon name="feather" size={24} class="text-green-700" />
        <span class="mt-2 text-sm font-semibold text-navy-900">Choose file</span>
        <span class="mt-1 text-xs text-neutral-500">Drag and drop or browse</span>
        <input type="file" accept={props.accept} disabled={props.disabled} class="sr-only" />
      </div>
      {props.helperText && <p class="mt-1.5 text-xs text-neutral-500">{props.helperText}</p>}
    </label>
  );
}
