import type { PageContextServer } from "vike/types";
import { listTodos } from "../../usecase/todo/list-todos.usecase";
import { createInMemoryTodoRepository } from "../../repository/todo/in-memory-todo.repository";

export type Data = Awaited<ReturnType<typeof data>>;

export async function data(_pageContext: PageContextServer) {
  const repository = createInMemoryTodoRepository();
  return { todos: await listTodos(repository) };
}
