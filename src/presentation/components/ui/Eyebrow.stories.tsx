import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Eyebrow, type EyebrowProps } from "./Eyebrow";

const meta = {
  title: "Primitives/Eyebrow",
  component: Eyebrow,
  tags: ["autodocs"],
  args: {
    children: "Section label",
  },
} satisfies Meta<EyebrowProps>;

export default meta;
type Story = StoryObj<EyebrowProps>;

export const Playground: Story = {};

export const InHeadingBlock: Story = {
  render: () => (
    <div class="max-w-xl rounded-3xl border border-border bg-surface p-6">
      <Eyebrow>Program</Eyebrow>
      <h2 class="mt-3 font-display text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">
        Responsive heading block using shared primitives.
      </h2>
      <p class="mt-3 text-sm text-neutral-600 sm:text-base">
        Text scales with breakpoints and remains readable on mobile.
      </p>
    </div>
  ),
};
