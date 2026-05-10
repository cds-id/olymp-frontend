import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Logo, LogoMark, type LogoProps } from "./Logo";

const meta = {
  title: "Brand/Logo",
  component: Logo,
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text" },
    tagline: { control: "text" },
    markSize: { control: "number" },
  },
  args: {
    name: "DUMMY LMS",
    tagline: "Learning Platform",
    markSize: 44,
  },
} satisfies Meta<LogoProps>;

export default meta;
type Story = StoryObj<LogoProps>;

export const Playground: Story = {};

export const Variants: Story = {
  render: () => (
    <div class="grid gap-6 rounded-3xl border border-border bg-surface p-6 sm:grid-cols-2">
      <Logo />
      <Logo name="ACME Academy" tagline="Demo Learning" />
      <Logo name="Edu Portal" tagline="Reusable Brand" markSize={36} />
      <Logo name="Long Brand Name Example" tagline="Responsive text" markSize={52} />
    </div>
  ),
};

export const Marks: Story = {
  render: () => (
    <div class="flex flex-wrap items-center gap-5 rounded-3xl border border-border bg-surface p-6">
      <LogoMark size={32} />
      <LogoMark size={44} />
      <LogoMark size={56} />
      <LogoMark size={72} />
    </div>
  ),
};
