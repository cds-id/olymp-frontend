import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { BottomNavbar } from "./BottomNavbar";

const meta = { title: "Primitives/BottomNavbar", component: BottomNavbar, tags: ["autodocs"] } satisfies Meta<typeof BottomNavbar>;
export default meta;
type Story = StoryObj<typeof BottomNavbar>;

export const MobileNavbar: Story = {
  parameters: { viewport: { defaultViewport: "mobile" } },
  render: () => (
    <div class="min-h-[520px] rounded-3xl border border-border bg-surface p-6 pb-24">
      <h2 class="font-display text-2xl font-bold text-navy-900">Mobile viewport story</h2>
      <p class="mt-2 text-neutral-600">Bottom nav is hidden at md breakpoint and up.</p>
      <BottomNavbar
        items={[
          { label: "Home", href: "#", icon: "school", active: true },
          { label: "Stats", href: "#", icon: "chart" },
          { label: "Users", href: "#", icon: "users" },
          { label: "More", href: "#", icon: "menu" },
        ]}
      />
    </div>
  ),
};
