import type { JSX } from "solid-js";
export { Badge } from "../../components/ui/Badge";
export { Button as Btn } from "../../components/ui/Button";
export { Container } from "../../components/ui/Container";
export { Eyebrow } from "../../components/ui/Eyebrow";
export { Logo, LogoMark } from "../../components/brand/Logo";

/* ─── Decorative feather swoosh ─── */
export function FeatherSwoosh(props: { class?: string }) {
  return (
    <svg class={props.class} viewBox="0 0 600 600" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="fg-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f4c145" stop-opacity="0.55" />
          <stop offset="100%" stop-color="#c99725" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="fg-green" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#aeddb7" stop-opacity="0.6" />
          <stop offset="100%" stop-color="#398B4C" stop-opacity="0" />
        </linearGradient>
      </defs>
      <path d="M30 540 Q 280 460 540 110" stroke="url(#fg-gold)" stroke-width="3" fill="none" />
      <path d="M60 560 Q 320 480 560 140" stroke="url(#fg-green)" stroke-width="2" fill="none" />
      <path d="M90 580 Q 360 500 580 170" stroke="url(#fg-gold)" stroke-width="1.6" fill="none" />
      {Array.from({ length: 14 }).map((_, i) => {
        const t = i / 13;
        const x1 = 60 + t * 460;
        const y1 = 560 - t * 420;
        const len = 30 + Math.sin(t * Math.PI) * 30;
        return (
          <line
            x1={x1}
            y1={y1}
            x2={x1 - len * 0.6}
            y2={y1 - len}
            stroke={i % 3 === 0 ? "#c99725" : "#398B4C"}
            stroke-width="1.2"
            opacity="0.35"
            stroke-linecap="round"
          />
        );
      })}
    </svg>
  );
}

export type { JSX };
