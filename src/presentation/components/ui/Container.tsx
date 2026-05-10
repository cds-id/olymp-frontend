import type { JSX } from "solid-js";

export interface ContainerProps {
  children: JSX.Element;
  class?: string;
}

export function Container(props: ContainerProps) {
  return <div class={`w-full max-w-[1240px] mx-auto px-7 ${props.class ?? ""}`}>{props.children}</div>;
}
