import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Button } from "./Button";
import { StyledToaster, toast } from "./Sonner";

const meta = {
  title: "Primitives/Sonner Toast",
  component: StyledToaster,
  tags: ["autodocs"],
} satisfies Meta<typeof StyledToaster>;

export default meta;
type Story = StoryObj<typeof StyledToaster>;

export const StyledToasts: Story = {
  render: () => (
    <div class="rounded-3xl border border-border bg-surface p-6">
      <StyledToaster />
      <h3 class="font-display text-xl font-bold text-navy-900">Sonner integration</h3>
      <p class="mt-2 text-sm text-neutral-600">Toast uses Dummy LMS surface, border, shadow, radius, and button styles.</p>
      <div class="mt-5 flex flex-wrap gap-3">
        <Button showIcon={false} onClick={() => toast("Default toast", { description: "Styled with project tokens." })}>
          Default
        </Button>
        <Button variant="secondary" showIcon={false} onClick={() => toast.success("Saved", { description: "Data updated." })}>
          Success
        </Button>
        <Button variant="accent" showIcon={false} onClick={() => toast.info("Heads up", { description: "Useful info." })}>
          Info
        </Button>
        <Button variant="outline" showIcon={false} onClick={() => toast.error("Failed", { description: "Please try again." })}>
          Error
        </Button>
      </div>
    </div>
  ),
};
