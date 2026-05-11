import type { JSX } from "solid-js";
import { Show, createResource } from "solid-js";
import { olympApi } from "../../infrastructure/olymp/api";
import { getToken, goLogin } from "./session";
import { RbacProvider } from "./rbac";

export function AuthGuard(props: { staffOnly?: boolean; children: JSX.Element }) {
  const [roles] = createResource(async () => {
    if (!getToken()) {
      goLogin();
      return null;
    }
    const res = await olympApi.roles().catch(() => {
      goLogin();
      return null;
    });
    if (props.staffOnly && res?.data && !res.data.is_staff) {
      window.location.href = "/peserta";
      return null;
    }
    return res?.data ?? null;
  });

  return (
    <Show when={!roles.loading} fallback={<div class="min-h-screen bg-bg p-6 text-sm text-neutral-600">Memeriksa sesi...</div>}>
      <Show when={roles()} fallback={<div class="min-h-screen bg-bg p-6 text-sm text-neutral-600">Mengalihkan...</div>}>
        <RbacProvider>{props.children}</RbacProvider>
      </Show>
    </Show>
  );
}
