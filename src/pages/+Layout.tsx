import "../presentation/styles/global.css";

import type { JSX } from "solid-js";
import { PublicLayout } from "../presentation/layouts/PublicLayout";

export default function Layout(props: { children?: JSX.Element }) {
  return <PublicLayout>{props.children}</PublicLayout>;
}
