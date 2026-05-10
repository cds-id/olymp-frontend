import { For } from "solid-js";

export interface SkeletonProps {
  lines?: number;
  avatar?: boolean;
  class?: string;
}

export function Skeleton(props: SkeletonProps) {
  const lines = () => props.lines ?? 3;
  return (
    <div class={`animate-pulse ${props.class ?? ""}`}>
      <div class="flex gap-4">
        {props.avatar && <div class="h-10 w-10 shrink-0 rounded-full bg-neutral-200" />}
        <div class="w-full space-y-2.5">
          <For each={Array.from({ length: lines() })}>
            {(_, i) => <div class="h-2.5 rounded-full bg-neutral-200" style={{ width: `${100 - i() * 14}%` }} />}
          </For>
        </div>
      </div>
    </div>
  );
}
