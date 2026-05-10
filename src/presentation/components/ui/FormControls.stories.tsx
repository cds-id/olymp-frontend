import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Checkbox } from "./Checkbox";
import { RadioButton } from "./RadioButton";

const meta = { title: "Primitives/Form Controls", tags: ["autodocs"] } satisfies Meta;
export default meta;
type Story = StoryObj;

export const RadioButtons: Story = {
  render: () => (
    <div class="grid gap-3 sm:grid-cols-2">
      <RadioButton name="plan" value="basic" label="Basic" helperText="Starter plan" checked />
      <RadioButton name="plan" value="pro" label="Pro" helperText="Advanced plan" />
    </div>
  ),
};

export const Checkboxes: Story = {
  render: () => (
    <div class="grid gap-3 sm:grid-cols-2">
      <Checkbox label="Accept terms" helperText="Required to continue" />
      <Checkbox label="Subscribe updates" helperText="Optional notifications" checked />
    </div>
  ),
};
