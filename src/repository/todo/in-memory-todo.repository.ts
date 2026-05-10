import type { Todo, TodoRepository } from "../../domain/todo/todo.repository";

const initialTodos: Todo[] = [
  { id: "todo-1", text: "Buy milk", completed: false },
  { id: "todo-2", text: "Buy strawberries", completed: false },
];

export function createInMemoryTodoRepository(seed: Todo[] = initialTodos): TodoRepository {
  const todos = [...seed];

  return {
    async list() {
      return [...todos];
    },
    async add(todo) {
      todos.push(todo);
      return todo;
    },
  };
}
