import { For } from "solid-js";
import { Icon } from "../Icon";

export type AlertTone = "info" | "success" | "warning" | "error";

export interface AlertProps {
  tone?: AlertTone;
  title: string;
  message?: string;
  class?: string;
}

const toneClasses: Record<AlertTone, string> = {
  info: "border-blue-200 bg-blue-50 text-blue-800",
  success: "border-green-200 bg-green-50 text-green-800",
  warning: "border-gold-100 bg-gold-50 text-gold-700",
  error: "border-red-200 bg-red-50 text-red-700",
};

const iconMap: Record<AlertTone, string> = {
  info: "spark",
  success: "check",
  warning: "shield",
  error: "menu",
};

export function Alert(props: AlertProps) {
  const tone = () => props.tone ?? "info";
  return (
    <div class={`flex gap-3 rounded-xl border p-3.5 ${toneClasses[tone()]} ${props.class ?? ""}`} role="alert">
      <Icon name={iconMap[tone()]} size={18} />
      <div>
        <div class="text-sm font-semibold">{props.title}</div>
        {props.message && <div class="mt-0.5 text-sm opacity-80">{props.message}</div>}
      </div>
    </div>
  );
}

export interface ToastItem extends AlertProps { id?: string }
export function Toaster(props: { items: ToastItem[] }) {
  return (
    <div class="fixed right-4 top-4 z-[60] flex w-[min(92vw,360px)] flex-col gap-3">
      <For each={props.items}>{(item) => <Alert {...item} class="shadow-lg" />}</For>
    </div>
  );
}
