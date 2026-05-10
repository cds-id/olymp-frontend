import "../presentation/styles/global.css";

import type { JSX } from "solid-js";
import { AppLayout } from "../presentation/layouts/AppLayout";

export default function Layout(props: { children?: JSX.Element }) {
  return <AppLayout>{props.children}</AppLayout>;
}
