import type { JSX } from "solid-js";

export type BadgeTone = "navy" | "green" | "gold" | "neutral";

export interface BadgeProps {
  tone?: BadgeTone;
  dot?: boolean;
  children: JSX.Element;
  class?: string;
}

const toneClasses: Record<BadgeTone, string> = {
  navy: "bg-navy-50 text-navy-900",
  green: "bg-green-50 text-green-700",
  gold: "bg-gold-50 text-gold-700",
  neutral: "bg-neutral-100 text-neutral-700",
};

export function Badge(props: BadgeProps) {
  const tone = () => props.tone ?? "navy";

  return (
    <span class={`inline-flex h-6 items-center gap-1.5 px-2.5 text-xs font-semibold rounded-full tracking-wide ${toneClasses[tone()]} ${props.class ?? ""}`}>
      {props.dot && <span class="w-1.5 h-1.5 rounded-full bg-current" />}
      {props.children}
    </span>
  );
}
