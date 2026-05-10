export type FieldSize = "sm" | "md" | "lg";

export interface InputProps {
  type?: "text" | "email" | "password" | "number" | "tel" | "url" | "search";
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  invalid?: boolean;
  size?: FieldSize;
  class?: string;
}

const inputSizeClasses: Record<FieldSize, string> = {
  sm: "h-9 rounded-lg px-3 text-[13px]",
  md: "h-11 rounded-xl px-3.5 text-sm",
  lg: "h-[52px] rounded-[14px] px-4 text-[15px]",
};

export function Input(props: InputProps) {
  const size = () => props.size ?? "md";
  return (
    <input
      type={props.type ?? "text"}
      value={props.value ?? ""}
      placeholder={props.placeholder}
      disabled={props.disabled}
      aria-invalid={props.invalid ? "true" : undefined}
      class={`w-full border bg-surface text-neutral-800 outline-none transition placeholder:text-neutral-400 disabled:cursor-not-allowed disabled:opacity-60 ${inputSizeClasses[size()]} ${
        props.invalid ? "border-red-300 focus:border-red-500 focus:ring-red-50" : "border-border focus:border-green-500 focus:ring-green-50"
      } focus:ring-4 ${props.class ?? ""}`}
    />
  );
}
