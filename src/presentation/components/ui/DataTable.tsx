import type { JSX } from "solid-js";
import { For, Show } from "solid-js";

export interface DataTableColumn<T extends Record<string, unknown>> {
  key: keyof T | string;
  header: JSX.Element;
  render?: (row: T) => JSX.Element;
  class?: string;
}

export interface DataTableProps<T extends Record<string, unknown>> {
  columns: DataTableColumn<T>[];
  rows: T[];
  emptyText?: string;
  caption?: string;
  class?: string;
}

export function DataTable<T extends Record<string, unknown>>(props: DataTableProps<T>) {
  return (
    <div class={`w-full overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm ${props.class ?? ""}`}>
      <table class="min-w-full text-left text-sm">
        {props.caption && <caption class="sr-only">{props.caption}</caption>}
        <thead class="bg-neutral-50 text-xs font-bold uppercase tracking-[0.08em] text-neutral-600">
          <tr>
            <For each={props.columns}>{(col) => <th class={`px-4 py-3 ${col.class ?? ""}`}>{col.header}</th>}</For>
          </tr>
        </thead>
        <tbody class="divide-y divide-border">
          <Show when={props.rows.length > 0} fallback={<tr><td class="px-4 py-8 text-center text-neutral-500" colSpan={props.columns.length}>{props.emptyText ?? "No data"}</td></tr>}>
            <For each={props.rows}>
              {(row) => (
                <tr class="transition-colors hover:bg-neutral-50/80">
                  <For each={props.columns}>
                    {(col) => <td class={`px-4 py-3 text-neutral-700 ${col.class ?? ""}`}>{col.render ? col.render(row) : String(row[col.key] ?? "")}</td>}
                  </For>
                </tr>
              )}
            </For>
          </Show>
        </tbody>
      </table>
    </div>
  );
}
