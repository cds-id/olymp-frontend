import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { SidebarMenu, type SidebarMenuProps } from "./SidebarMenu";

const groups: SidebarMenuProps["groups"] = [
  {
    label: "Main",
    items: [
      { label: "Overview", href: "#", icon: "chart", active: true },
      { label: "Students", href: "#", icon: "users", badge: "128" },
      { label: "Programs", href: "#", icon: "book" },
    ],
  },
  {
    label: "Manage",
    items: [
      { label: "Schools", href: "#", icon: "school" },
      { label: "Calendar", href: "#", icon: "calendar" },
      { label: "Reports", href: "#", icon: "trophy", disabled: true },
    ],
  },
];

const meta = {
  title: "Dashboard/SidebarMenu",
  component: SidebarMenu,
  tags: ["autodocs"],
  args: { brand: "Dashboard", groups, footer: "v1.0 • Dummy LMS" },
} satisfies Meta<SidebarMenuProps>;
export default meta;
type Story = StoryObj<SidebarMenuProps>;

export const Expanded: Story = {
  render: (args) => (
    <div class="min-h-[720px] overflow-hidden rounded-3xl border border-border bg-bg">
      <SidebarMenu {...args} />
    </div>
  ),
};

export const Collapsed: Story = {
  args: { collapsed: true },
  render: (args) => (
    <div class="min-h-[720px] overflow-hidden rounded-3xl border border-border bg-bg">
      <SidebarMenu {...args} />
    </div>
  ),
};

export const WithContentShell: Story = {
  render: () => (
    <div class="flex min-h-[720px] overflow-hidden rounded-3xl border border-border bg-bg">
      <SidebarMenu brand="Dashboard" groups={groups} footer="v1.0 • Dummy LMS" />
      <main class="flex-1 p-6">
        <h1 class="font-display text-3xl font-bold text-navy-900">Dashboard content</h1>
        <p class="mt-2 text-neutral-600">Sidebar is desktop-only. Pair with BottomNavbar for mobile.</p>
      </main>
    </div>
  ),
};
