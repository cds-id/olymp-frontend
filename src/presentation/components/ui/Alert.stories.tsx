import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Alert, Toaster, type AlertProps } from "./Alert";

const meta = {
  title: "Primitives/Alert",
  component: Alert,
  tags: ["autodocs"],
  args: { tone: "info", title: "Information", message: "This is an in-page alert." },
  argTypes: { tone: { control: "select", options: ["info", "success", "warning", "error"] } },
} satisfies Meta<AlertProps>;
export default meta;
type Story = StoryObj<AlertProps>;

export const Playground: Story = {};
export const InPageAlerts: Story = {
  render: () => (
    <div class="grid gap-3">
      <Alert tone="info" title="Info" message="Helpful contextual information." />
      <Alert tone="success" title="Success" message="Changes saved." />
      <Alert tone="warning" title="Warning" message="Check data before continuing." />
      <Alert tone="error" title="Error" message="Something went wrong." />
    </div>
  ),
};
export const Toasts: Story = {
  render: () => <Toaster items={[{ tone: "success", title: "Saved", message: "Data updated." }, { tone: "info", title: "Syncing", message: "Please wait." }]} />,
};
