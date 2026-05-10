import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { CornerSpinner, FloatingSpinnerStatus, Spinner, SpinnerOverlay } from "./Spinner";
import { Skeleton } from "./Skeleton";

const meta = { title: "Primitives/Loading", tags: ["autodocs"] } satisfies Meta;
export default meta;
type Story = StoryObj;

export const Spinners: Story = {
  render: () => (
    <div class="flex flex-wrap items-center gap-5">
      <Spinner size="sm" label="Small" />
      <Spinner size="md" label="Medium" />
      <Spinner size="lg" label="Large" />
    </div>
  ),
};

export const Corner: Story = {
  render: () => (
    <div class="relative rounded-3xl border border-border bg-surface p-8">
      <CornerSpinner label="" />
      <h3 class="font-display font-bold text-navy-900">Card with corner spinner</h3>
      <p class="mt-2 text-sm text-neutral-600">Loading indicator stays in top-right corner.</p>
    </div>
  ),
};

export const OverlayedComponent: Story = {
  render: () => (
    <SpinnerOverlay show class="rounded-3xl">
      <div class="rounded-3xl border border-border bg-surface p-8">
        <h3 class="font-display font-bold text-navy-900">Overlay target</h3>
        <p class="mt-2 text-sm text-neutral-600">Spinner overlays this component.</p>
      </div>
    </SpinnerOverlay>
  ),
};

export const FloatingChipStatus: Story = {
  render: () => (
    <div class="relative min-h-48 rounded-3xl border border-border bg-surface p-8">
      <FloatingSpinnerStatus label="Syncing" />
      <FloatingSpinnerStatus label="Saving" position="bottom-right" />
      <h3 class="font-display font-bold text-navy-900">Component with floating status chips</h3>
      <p class="mt-2 text-sm text-neutral-600">Use for local async status on card corners.</p>
    </div>
  ),
};

export const Skeletons: Story = {
  render: () => (
    <div class="grid gap-5 sm:grid-cols-2">
      <Skeleton lines={4} />
      <Skeleton avatar lines={3} />
    </div>
  ),
};
