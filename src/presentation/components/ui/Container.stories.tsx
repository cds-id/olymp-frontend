import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Container, type ContainerProps } from "./Container";

const meta = {
  title: "Primitives/Container",
  component: Container,
  tags: ["autodocs"],
} satisfies Meta<ContainerProps>;

export default meta;
type Story = StoryObj<ContainerProps>;

export const Default: Story = {
  render: () => (
    <Container>
      <div class="rounded-3xl border border-border bg-surface p-6 text-neutral-700">
        Container caps content at 1240px and keeps responsive horizontal padding.
      </div>
    </Container>
  ),
};

export const ResponsiveGrid: Story = {
  render: () => (
    <Container>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map((item) => (
          <div class="rounded-2xl border border-border bg-surface p-5 shadow-sm">
            <div class="font-display font-bold text-navy-900">Card {item}</div>
            <p class="mt-2 text-sm text-neutral-600">Stacks on mobile, expands by breakpoint.</p>
          </div>
        ))}
      </div>
    </Container>
  ),
};
