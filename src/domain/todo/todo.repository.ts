import type { Todo } from "./todo.entity";

export type { Todo };

export interface TodoRepository {
  list(): Promise<Todo[]>;
  add(todo: Todo): Promise<Todo>;
}
