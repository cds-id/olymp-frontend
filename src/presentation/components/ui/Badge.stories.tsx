import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Badge, type BadgeProps } from "./Badge";

const meta = {
  title: "Primitives/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    tone: { control: "select", options: ["navy", "green", "gold", "neutral"] },
    dot: { control: "boolean" },
  },
  args: {
    tone: "navy",
    dot: true,
    children: "Badge",
  },
} satisfies Meta<BadgeProps>;

export default meta;
type Story = StoryObj<BadgeProps>;

export const Playground: Story = {};

export const Tones: Story = {
  render: () => (
    <div class="flex flex-wrap gap-3">
      <Badge tone="navy" dot>Navy</Badge>
      <Badge tone="green" dot>Green</Badge>
      <Badge tone="gold" dot>Gold</Badge>
      <Badge tone="neutral">Neutral</Badge>
    </div>
  ),
};

export const ResponsiveWrap: Story = {
  render: () => (
    <div class="max-w-[260px] flex flex-wrap gap-2 rounded-2xl border border-border bg-surface p-4 sm:max-w-none">
      <Badge tone="navy" dot>Registration</Badge>
      <Badge tone="green" dot>Active</Badge>
      <Badge tone="gold" dot>Premium</Badge>
      <Badge tone="neutral">Draft</Badge>
    </div>
  ),
};
