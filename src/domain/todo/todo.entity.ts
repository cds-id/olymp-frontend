export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export type CreateTodoInput = {
  id: string;
  text: string;
};

export function createTodo(input: CreateTodoInput): Todo {
  const text = input.text.trim();

  if (!text) {
    throw new Error("Todo text is required");
  }

  return {
    id: input.id,
    text,
    completed: false,
  };
}
