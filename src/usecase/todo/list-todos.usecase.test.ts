import { describe, expect, it } from "vitest";
import { createTodo } from "../../domain/todo/todo.entity";
import type { TodoRepository } from "../../domain/todo/todo.repository";
import { listTodos } from "./list-todos.usecase";

function repositoryWithTodos(): TodoRepository {
  return {
    async list() {
      return [createTodo({ id: "todo-1", text: "Buy milk" })];
    },
    async add(todo) {
      return todo;
    },
  };
}

describe("listTodos", () => {
  it("returns todos from repository", async () => {
    const todos = await listTodos(repositoryWithTodos());

    expect(todos).toEqual([{ id: "todo-1", text: "Buy milk", completed: false }]);
  });
});
