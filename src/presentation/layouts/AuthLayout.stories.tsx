import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Button } from "../components/ui";
import { AuthLayout, type AuthLayoutProps } from "./AuthLayout";

const meta = {
  title: "Layouts/AuthLayout",
  component: AuthLayout,
  tags: ["autodocs"],
  args: {
    title: "Masuk",
    subtitle: "Gunakan akun Anda untuk melanjutkan.",
  },
} satisfies Meta<AuthLayoutProps>;

export default meta;
type Story = StoryObj<AuthLayoutProps>;

export const Login: Story = {
  render: (args) => (
    <AuthLayout title={args.title} subtitle={args.subtitle}>
      <form class="space-y-5">
        <label class="block">
          <span class="mb-2 block text-sm font-semibold text-navy-900">Email</span>
          <input class="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-green-500 focus:ring-4 focus:ring-green-50" placeholder="admin@example.com" />
        </label>
        <label class="block">
          <span class="mb-2 block text-sm font-semibold text-navy-900">Password</span>
          <input type="password" class="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-green-500 focus:ring-4 focus:ring-green-50" placeholder="••••••••" />
        </label>
        <Button class="w-full justify-center" showIcon={false}>Masuk</Button>
      </form>
    </AuthLayout>
  ),
};
