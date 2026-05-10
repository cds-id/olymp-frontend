import type { JSX } from "solid-js";

export interface EyebrowProps {
  children: JSX.Element;
  class?: string;
}

export function Eyebrow(props: EyebrowProps) {
  return (
    <span class={`inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-green-700 uppercase ${props.class ?? ""}`}>
      <span class="w-6 h-0.5 bg-green-500 rounded-full" />
      {props.children}
    </span>
  );
}
