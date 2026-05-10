import { createTodo } from "../../domain/todo/todo.entity";
import type { TodoRepository } from "../../domain/todo/todo.repository";

type CreateTodoUseCaseInput = {
  id: string;
  text: string;
};

export async function createTodoUseCase(repository: TodoRepository, input: CreateTodoUseCaseInput) {
  const todo = createTodo(input);
  return repository.add(todo);
}
