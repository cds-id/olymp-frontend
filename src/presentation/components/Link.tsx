import { createMemo } from "solid-js";
import { usePageContext } from "vike-solid/usePageContext";

export function Link(props: { href: string; children: string }) {
  const pageContext = usePageContext();
  const isActive = createMemo(() =>
    props.href === "/" ? pageContext.urlPathname === props.href : pageContext.urlPathname.startsWith(props.href),
  );
  return (
    <a
      href={props.href}
      class={`block rounded-lg px-3 py-2 transition-colors ${isActive() ? "bg-blue-50 text-blue-700 font-semibold" : "hover:bg-slate-100"}`}
    >
      {props.children}
    </a>
  );
}
