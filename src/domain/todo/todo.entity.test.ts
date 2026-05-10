import { describe, expect, it } from "vitest";
import { createTodo } from "./todo.entity";

describe("todo entity", () => {
  it("creates active todo with trimmed text", () => {
    const todo = createTodo({ id: "todo-1", text: "  Buy milk  " });

    expect(todo).toEqual({ id: "todo-1", text: "Buy milk", completed: false });
  });

  it("rejects empty todo text", () => {
    expect(() => createTodo({ id: "todo-1", text: "   " })).toThrow("Todo text is required");
  });
});
