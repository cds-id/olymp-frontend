import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Button, type ButtonProps } from "./Button";

const meta = {
  title: "Primitives/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "accent", "outline", "ghost"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
    icon: { control: "text" },
    showIcon: { control: "boolean" },
  },
  args: {
    variant: "primary",
    size: "md",
    showIcon: true,
    children: "Button",
  },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Playground: Story = {};

export const Variants: Story = {
  render: () => (
    <div class="flex flex-col sm:flex-row flex-wrap gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div class="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const ResponsiveFullWidth: Story = {
  render: () => (
    <div class="w-full max-w-md">
      <Button class="w-full justify-center" showIcon={false}>Full width on forms</Button>
    </div>
  ),
};
