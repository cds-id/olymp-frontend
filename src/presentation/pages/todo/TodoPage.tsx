import { useQuery } from "@tanstack/solid-query";
import { For, Suspense } from "solid-js";
import { listTodos } from "../../../usecase/todo/list-todos.usecase";
import { createInMemoryTodoRepository } from "../../../repository/todo/in-memory-todo.repository";
import { todoQueryKeys } from "../../../repository/todo/query-keys";

const todoRepository = createInMemoryTodoRepository();

export function TodoPage() {
  const todosQuery = useQuery(() => ({
    queryKey: todoQueryKeys.all,
    queryFn: () => listTodos(todoRepository),
  }));

  return (
    <section class="space-y-6">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wide text-blue-600">Domain Driven Design</p>
        <h1 class="mt-2 text-3xl font-bold">Todo Boilerplate</h1>
        <p class="mt-3 max-w-2xl text-slate-600">
          Presentation reads usecase. Usecase depends on domain repository interface. Repository provides concrete data source.
        </p>
      </div>

      <Suspense fallback={<p class="rounded-lg bg-white p-4 shadow">Loading todos...</p>}>
        <ul class="grid gap-3">
          <For each={todosQuery.data ?? []}>
            {(todo) => (
              <li class="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <span class="font-medium">{todo.text}</span>
              </li>
            )}
          </For>
        </ul>
      </Suspense>
    </section>
  );
}
