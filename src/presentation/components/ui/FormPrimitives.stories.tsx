import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Button } from "./Button";
import { Checkbox } from "./Checkbox";
import { Field } from "./Field";
import { FileInput } from "./FileInput";
import { FormGroup } from "./FormGroup";
import { Input } from "./Input";
import { Select } from "./Select";
import { Switch } from "./Switch";
import { Textarea } from "./Textarea";

const meta = { title: "Primitives/Form", tags: ["autodocs"] } satisfies Meta;
export default meta;
type Story = StoryObj;

export const Inputs: Story = {
  render: () => (
    <div class="grid gap-4 sm:grid-cols-3">
      <Field label="Small input"><Input size="sm" placeholder="Small" /></Field>
      <Field label="Medium input" required helperText="Default size."><Input placeholder="Medium" /></Field>
      <Field label="Large input"><Input size="lg" placeholder="Large" /></Field>
      <Field label="Small select"><Select size="sm" options={[{ label: "Small", value: "sm" }]} placeholder="Choose" /></Field>
      <Field label="Medium select"><Select options={[{ label: "Medium", value: "md" }]} placeholder="Choose" /></Field>
      <Field label="Large select"><Select size="lg" options={[{ label: "Large", value: "lg" }]} placeholder="Choose" /></Field>
      <Field label="Email" error="Invalid email"><Input type="email" invalid placeholder="admin@example.com" /></Field>
      <Field label="Description" class="sm:col-span-3"><Textarea placeholder="Write short description" /></Field>
    </div>
  ),
};

export const TogglesAndUpload: Story = {
  render: () => (
    <div class="grid gap-4 sm:grid-cols-2">
      <Switch label="Active account" helperText="Allow user to access dashboard" checked />
      <Checkbox label="Send invitation email" helperText="User receives setup link" checked />
      <FileInput label="Upload document" helperText="PDF, PNG, JPG up to 5MB" class="sm:col-span-2" />
    </div>
  ),
};

export const ResponsiveFormGroup: Story = {
  render: () => (
    <FormGroup title="School profile" description="Responsive layout: one column on mobile, two on tablet and up.">
      <div class="grid gap-4 sm:grid-cols-2">
        <Field label="School name"><Input placeholder="Dummy School" /></Field>
        <Field label="Type"><Select options={[{ label: "Public", value: "public" }, { label: "Private", value: "private" }]} placeholder="Choose" /></Field>
        <Field label="Address" class="sm:col-span-2"><Textarea placeholder="Full address" /></Field>
      </div>
      <div class="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
        <Button variant="outline" showIcon={false}>Cancel</Button>
        <Button showIcon={false}>Save</Button>
      </div>
    </FormGroup>
  ),
};
