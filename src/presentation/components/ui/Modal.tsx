import type { JSX } from "solid-js";
import { Icon } from "../Icon";
import { Overlay } from "./Overlay";

export interface ModalProps {
  open?: boolean;
  title?: JSX.Element;
  children: JSX.Element;
  footer?: JSX.Element;
  tone?: "default" | "info" | "success";
}

const toneClasses = {
  default: "bg-navy-50 text-navy-900",
  info: "bg-blue-50 text-blue-700",
  success: "bg-green-50 text-green-700",
};

export function Modal(props: ModalProps) {
  const tone = () => props.tone ?? "default";
  const icon = () => (tone() === "success" ? "check" : tone() === "info" ? "spark" : "school");

  return (
    <Overlay open={props.open} class="flex items-center justify-center" panelClass="w-full max-w-md rounded-3xl bg-surface p-5 shadow-xl sm:p-6">
      <div class={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${toneClasses[tone()]}`}>
        <Icon name={icon()} size={20} />
      </div>
      {props.title && <h2 class="font-display text-xl font-bold text-navy-900">{props.title}</h2>}
      <div class="mt-2.5 text-sm leading-relaxed text-neutral-700">{props.children}</div>
      {props.footer && <div class="mt-6 flex flex-col-reverse gap-3 border-t border-border pt-4 sm:flex-row sm:justify-end">{props.footer}</div>}
    </Overlay>
  );
}

export function InfoModal(props: Omit<ModalProps, "tone">) {
  return <Modal {...props} tone="info" />;
}

export function SuccessModal(props: Omit<ModalProps, "tone">) {
  return <Modal {...props} tone="success" />;
}
