import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Select, type SelectProps } from "./Select";

const options = [
  { label: "Dummy School A", value: "a" },
  { label: "Dummy School B", value: "b" },
  { label: "Dummy School C", value: "c" },
];

const meta = {
  title: "Primitives/Select",
  component: Select,
  tags: ["autodocs"],
  args: { label: "School", placeholder: "Choose school", options },
} satisfies Meta<SelectProps>;
export default meta;
type Story = StoryObj<SelectProps>;

export const Default: Story = {};
export const WithSearch: Story = { args: { searchable: true, helperText: "Search input shown above select." } };
export const Error: Story = { args: { error: "School required" } };
export const ResponsiveForm: Story = {
  render: () => (
    <div class="grid gap-4 rounded-3xl border border-border bg-surface p-5 sm:grid-cols-2">
      <Select label="School" options={options} placeholder="Choose" />
      <Select label="Program" searchable options={[{ label: "Science", value: "science" }, { label: "Math", value: "math" }]} placeholder="Choose" />
    </div>
  ),
};
