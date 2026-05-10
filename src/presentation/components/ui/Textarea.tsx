export interface TextareaProps {
  value?: string;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
  invalid?: boolean;
  class?: string;
}

export function Textarea(props: TextareaProps) {
  return (
    <textarea
      rows={props.rows ?? 4}
      placeholder={props.placeholder}
      disabled={props.disabled}
      aria-invalid={props.invalid ? "true" : undefined}
      class={`w-full resize-y rounded-xl border bg-surface px-3.5 py-3 text-sm text-neutral-800 outline-none transition placeholder:text-neutral-400 disabled:cursor-not-allowed disabled:opacity-60 ${
        props.invalid ? "border-red-300 focus:border-red-500 focus:ring-red-50" : "border-border focus:border-green-500 focus:ring-green-50"
      } focus:ring-4 ${props.class ?? ""}`}
    >
      {props.value ?? ""}
    </textarea>
  );
}
