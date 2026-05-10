import { describe, expect, it } from "vitest";
import type { Todo, TodoRepository } from "../../domain/todo/todo.repository";
import { createTodoUseCase } from "./create-todo.usecase";

function captureRepository(saved: Todo[]): TodoRepository {
  return {
    async list() {
      return saved;
    },
    async add(todo) {
      saved.push(todo);
      return todo;
    },
  };
}

describe("createTodoUseCase", () => {
  it("creates todo through repository", async () => {
    const saved: Todo[] = [];
    const todo = await createTodoUseCase(captureRepository(saved), {
      id: "todo-2",
      text: "  Buy strawberries  ",
    });

    expect(todo).toEqual({ id: "todo-2", text: "Buy strawberries", completed: false });
    expect(saved).toEqual([todo]);
  });
});
