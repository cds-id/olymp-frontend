import { Toaster, toast } from "solid-sonner";
import type { ToasterProps } from "solid-sonner";

export { toast };
export type { ToasterProps };

export function StyledToaster(props: ToasterProps) {
  return (
    <Toaster
      position={props.position ?? "top-right"}
      visibleToasts={props.visibleToasts ?? 4}
      expand={props.expand ?? true}
      gap={props.gap ?? 10}
      offset={props.offset ?? 16}
      mobileOffset={props.mobileOffset ?? { top: 12, right: 12, bottom: 12, left: 12 }}
      toastOptions={{
        ...props.toastOptions,
        unstyled: true,
        classNames: {
          toast:
            "group pointer-events-auto flex w-full items-start gap-3 rounded-xl border border-border bg-surface p-3.5 text-text-body shadow-lg ring-1 ring-navy-900/5 backdrop-blur",
          title: "text-sm font-semibold text-navy-900",
          description: "mt-0.5 text-sm text-neutral-600",
          actionButton:
            "inline-flex h-8 items-center justify-center rounded-lg bg-navy-900 px-3 text-xs font-semibold text-white transition hover:bg-navy-800",
          cancelButton:
            "inline-flex h-8 items-center justify-center rounded-lg border border-border bg-surface px-3 text-xs font-semibold text-neutral-700 transition hover:bg-neutral-50",
          closeButton:
            "absolute right-2 top-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-border bg-surface text-neutral-500 shadow-sm transition hover:text-navy-900",
          ...(props.toastOptions?.classNames ?? {}),
        },
      }}
      {...props}
    />
  );
}
