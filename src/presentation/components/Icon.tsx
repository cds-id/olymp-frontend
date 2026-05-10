import { Match, Switch } from "solid-js";

interface IconProps {
  name: string;
  size?: number;
  stroke?: number;
  class?: string;
}

export function Icon(props: IconProps) {
  const size = () => props.size ?? 22;
  const sw = () => props.stroke ?? 1.8;

  const svgProps = () => ({
    width: size(),
    height: size(),
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": sw(),
    "stroke-linecap": "round" as const,
    "stroke-linejoin": "round" as const,
    class: props.class,
  });

  return (
    <Switch>
      <Match when={props.name === "arrow-right"}>
        <svg {...svgProps()}>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="13 6 19 12 13 18" />
        </svg>
      </Match>
      <Match when={props.name === "check"}>
        <svg {...svgProps()}>
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </Match>
      <Match when={props.name === "graduation"}>
        <svg {...svgProps()}>
          <path d="M22 10L12 4 2 10l10 6 10-6z" />
          <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
        </svg>
      </Match>
      <Match when={props.name === "book"}>
        <svg {...svgProps()}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z" />
          <path d="M4 19.5V21h16" />
        </svg>
      </Match>
      <Match when={props.name === "users"}>
        <svg {...svgProps()}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      </Match>
      <Match when={props.name === "trophy"}>
        <svg {...svgProps()}>
          <path d="M8 21h8" />
          <path d="M12 17v4" />
          <path d="M7 4h10v5a5 5 0 0 1-10 0V4z" />
          <path d="M17 5h3v3a3 3 0 0 1-3 3" />
          <path d="M7 5H4v3a3 3 0 0 0 3 3" />
        </svg>
      </Match>
      <Match when={props.name === "shield"}>
        <svg {...svgProps()}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      </Match>
      <Match when={props.name === "spark"}>
        <svg {...svgProps()}>
          <path d="M12 2l1.8 5.4L19 9l-5.2 1.6L12 16l-1.8-5.4L5 9l5.2-1.6z" />
          <path d="M19 14l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9z" />
        </svg>
      </Match>
      <Match when={props.name === "chart"}>
        <svg {...svgProps()}>
          <path d="M3 3v18h18" />
          <path d="M7 14l4-4 3 3 5-6" />
        </svg>
      </Match>
      <Match when={props.name === "calendar"}>
        <svg {...svgProps()}>
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="16" y1="2" x2="16" y2="6" />
        </svg>
      </Match>
      <Match when={props.name === "globe"}>
        <svg {...svgProps()}>
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      </Match>
      <Match when={props.name === "school"}>
        <svg {...svgProps()}>
          <path d="M3 21V8l9-5 9 5v13" />
          <path d="M9 21V12h6v9" />
          <path d="M3 21h18" />
        </svg>
      </Match>
      <Match when={props.name === "leaf"}>
        <svg {...svgProps()}>
          <path d="M11 20A7 7 0 0 1 4 13a18 18 0 0 1 14-9 12 12 0 0 1-7 16z" />
          <path d="M3 21l9-9" />
        </svg>
      </Match>
      <Match when={props.name === "play"}>
        <svg {...svgProps()}>
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      </Match>
      <Match when={props.name === "menu"}>
        <svg {...svgProps()}>
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </Match>
      <Match when={props.name === "feather"}>
        <svg {...svgProps()}>
          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
          <line x1="16" y1="8" x2="2" y2="22" />
          <line x1="17" y1="15" x2="9" y2="15" />
        </svg>
      </Match>
      <Match when={props.name === "medal"}>
        <svg {...svgProps()}>
          <circle cx="12" cy="14" r="6" />
          <path d="M8.21 13.89L7 22l5-3 5 3-1.21-8.12" />
          <polyline points="7 2 12 8 17 2" />
        </svg>
      </Match>
    </Switch>
  );
}
