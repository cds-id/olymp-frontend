import { createSignal } from "solid-js";
import { AuthLayout } from "../../presentation/layouts/AuthLayout";
import { Button } from "../../presentation/components/ui";
import { olympApi } from "../../infrastructure/olymp/api";
import { goAdmin, saveSession } from "../../presentation/auth/session";

export default function Page() {
  const [username, setUsername] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [error, setError] = createSignal("");
  const [loading, setLoading] = createSignal(false);

  async function submit(event: Event) {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await olympApi.login(username(), password());
      if (!res.data) throw new Error("Respons login kosong");
      saveSession(res.data);
      goAdmin();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Gagal masuk");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthLayout title="Masuk" subtitle="Gunakan username dan password untuk melanjutkan.">
      <form class="space-y-5" onSubmit={submit}>
        {error() && <div class="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{error()}</div>}
        <label class="block">
          <span class="mb-2 block text-sm font-semibold text-navy-900">Username</span>
          <input type="text" value={username()} onInput={(e) => setUsername(e.currentTarget.value)} placeholder="admin" class="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-50" />
        </label>
        <label class="block">
          <span class="mb-2 block text-sm font-semibold text-navy-900">Password</span>
          <input type="password" value={password()} onInput={(e) => setPassword(e.currentTarget.value)} placeholder="••••••••" class="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-50" />
        </label>
        <div class="flex items-center justify-between text-sm">
          <label class="flex items-center gap-2 text-neutral-600"><input type="checkbox" class="rounded border-border" /> Ingat saya</label>
          <a href="#" class="font-semibold text-green-700 hover:text-green-900">Lupa password?</a>
        </div>
        <Button type="submit" class="w-full justify-center" showIcon={false}>{loading() ? "Memproses..." : "Masuk"}</Button>
      </form>
    </AuthLayout>
  );
}
