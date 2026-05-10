import { AuthLayout } from "../../presentation/layouts/AuthLayout";
import { Button } from "../../presentation/components/ui";

export default function Page() {
  return (
    <AuthLayout title="Masuk" subtitle="Gunakan akun sekolah Anda untuk melanjutkan.">
      <form class="space-y-5">
        <label class="block">
          <span class="block text-sm font-semibold text-navy-900 mb-2">Email</span>
          <input
            type="email"
            placeholder="admin@sekolah.sch.id"
            class="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-50"
          />
        </label>
        <label class="block">
          <span class="block text-sm font-semibold text-navy-900 mb-2">Password</span>
          <input
            type="password"
            placeholder="••••••••"
            class="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-50"
          />
        </label>
        <div class="flex items-center justify-between text-sm">
          <label class="flex items-center gap-2 text-neutral-600">
            <input type="checkbox" class="rounded border-border" />
            Ingat saya
          </label>
          <a href="#" class="font-semibold text-green-700 hover:text-green-900">Lupa password?</a>
        </div>
        <Button type="submit" class="w-full justify-center" showIcon={false}>Masuk</Button>
      </form>
    </AuthLayout>
  );
}
