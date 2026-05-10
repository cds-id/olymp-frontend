import type { TodoRepository } from "../../domain/todo/todo.repository";

export async function listTodos(repository: TodoRepository) {
  return repository.list();
}
