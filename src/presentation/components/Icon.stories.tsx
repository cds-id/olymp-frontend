import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Icon } from "./Icon";

const ICONS = [
  "arrow-right", "check", "graduation", "book", "users", "trophy", "shield", "spark", "chart",
  "calendar", "globe", "school", "leaf", "play", "menu", "feather", "medal",
];

const meta = {
  title: "Primitives/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    name: { control: "select", options: ICONS },
    size: { control: "number" },
    stroke: { control: "number" },
  },
  args: {
    name: "arrow-right",
    size: 24,
    stroke: 1.8,
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof Icon>;

export const Playground: Story = {};

export const Gallery: Story = {
  render: () => (
    <div class="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9">
      {ICONS.map((name) => (
        <div class="flex min-h-24 flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-surface p-3 text-center text-xs text-neutral-600">
          <Icon name={name} class="text-navy-900" size={26} />
          <span class="break-all">{name}</span>
        </div>
      ))}
    </div>
  ),
};
