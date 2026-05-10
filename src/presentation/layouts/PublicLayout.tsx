import type { JSX } from "solid-js";
import { StyledToaster } from "../components/ui";

export function PublicLayout(props: { children?: JSX.Element }) {
  return (
    <div class="min-h-screen bg-bg text-text-body font-sans antialiased">
      {props.children}
      <StyledToaster />
    </div>
  );
}
