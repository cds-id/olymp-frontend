import { For, Show, createSignal } from "solid-js";
import { DataTable, Button, Input, Select, type DataTableColumn, type SelectOption } from "../ui";
import type { ApiEnvelope } from "../../../infrastructure/olymp/api";

export interface ServerDataTableProps<T extends Record<string, unknown>> {
  columns: DataTableColumn<T>[];
  rows: T[];
  meta?: ApiEnvelope<T[]>["meta"];
  loading?: boolean;
  emptyText?: string;
  search?: string;
  status?: string;
  statusOptions?: SelectOption[];
  onSearch?: (value: string) => void;
  onStatus?: (value: string) => void;
  onPage?: (page: number) => void;
  rightSlot?: unknown;
}

export function ServerDataTable<T extends Record<string, unknown>>(props: ServerDataTableProps<T>) {
  const [draft, setDraft] = createSignal(props.search ?? "");
  const page = () => props.meta?.page ?? 1;
  const perPage = () => props.meta?.per_page ?? 20;
  const total = () => props.meta?.total ?? props.rows.length;
  const totalPages = () => props.meta?.total_pages ?? Math.max(1, Math.ceil(total() / perPage()));

  return (
    <section class="rounded-[24px] border border-border bg-surface p-3 shadow-sm sm:p-4">
      <div class="mb-4 grid gap-3 md:grid-cols-[minmax(0,1fr)_180px_auto] md:items-end">
        <label class="block">
          <span class="mb-2 block text-sm font-semibold text-navy-900">Pencarian</span>
          <div class="flex gap-2">
            <Input type="search" value={draft()} placeholder="Cari data..." class="min-w-0" onInput={setDraft} />
            <Button variant="secondary" showIcon={false} onClick={() => props.onSearch?.(draft())}>Terapkan</Button>
          </div>
        </label>
        <Show when={props.statusOptions?.length}>
          <Select label="Status" value={props.status ?? ""} placeholder="Semua" options={props.statusOptions!} onChange={(value) => props.onStatus?.(value)} />
        </Show>
        <div class="text-sm text-neutral-500 md:text-right">Total {total()}</div>
      </div>

      <Show when={!props.loading} fallback={<div class="rounded-2xl bg-neutral-50 p-8 text-center text-sm text-neutral-500">Memuat data dari server...</div>}>
        <DataTable columns={props.columns} rows={props.rows} emptyText={props.emptyText ?? "No data"} />
      </Show>

      <div class="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p class="text-sm text-neutral-500">Halaman {page()} dari {totalPages()} · {perPage()} per halaman</p>
        <div class="flex gap-2">
          <Button variant="outline" showIcon={false} onClick={() => props.onPage?.(Math.max(1, page() - 1))} class={page() <= 1 ? "pointer-events-none opacity-50" : ""}>Sebelumnya</Button>
          <Button variant="outline" showIcon={false} onClick={() => props.onPage?.(Math.min(totalPages(), page() + 1))} class={page() >= totalPages() ? "pointer-events-none opacity-50" : ""}>Berikutnya</Button>
        </div>
      </div>
    </section>
  );
}
