import type { JSX } from "solid-js";
import { Icon } from "../Icon";

export type ButtonVariant = "primary" | "secondary" | "accent" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: string;
  showIcon?: boolean;
  children: JSX.Element;
  class?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-navy-900 text-white shadow-[0_6px_18px_rgba(32,27,90,0.25)] hover:bg-[#171442]",
  secondary: "bg-green-500 text-white shadow-[0_6px_18px_rgba(57,139,76,0.25)] hover:bg-green-600",
  accent: "bg-gold-500 text-white hover:bg-gold-700",
  outline: "bg-transparent border-navy-900 text-navy-900 hover:bg-navy-50",
  ghost: "bg-transparent text-green-700 px-1.5! hover:text-green-900",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-[13px] rounded-lg",
  md: "h-11 px-5 text-sm rounded-xl",
  lg: "h-[52px] px-6 text-[15px] rounded-[14px]",
};

export function Button(props: ButtonProps) {
  const variant = () => props.variant ?? "primary";
  const size = () => props.size ?? "md";
  const icon = () => props.icon ?? "arrow-right";
  const showIcon = () => props.showIcon ?? true;

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      class={`group inline-flex items-center gap-2.5 font-semibold border border-transparent transition-all duration-200 whitespace-nowrap cursor-pointer active:translate-y-px ${sizeClasses[size()]} ${variantClasses[variant()]} ${props.class ?? ""}`}
    >
      {props.children}
      {showIcon() && (
        <span class="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
          <Icon name={icon()} size={16} stroke={2.2} />
        </span>
      )}
    </button>
  );
}
