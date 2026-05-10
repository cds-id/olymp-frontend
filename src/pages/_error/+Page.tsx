import { Show } from "solid-js";
import { usePageContext } from "vike-solid/usePageContext";

export default function Page() {
  const { is404 } = usePageContext();
  return (
    <div class="flex flex-col items-center justify-center py-20">
      <Show
        when={is404}
        fallback={
          <>
            <h1 class="text-4xl font-bold text-red-600">500</h1>
            <p class="mt-4 text-lg text-slate-600">Something went wrong.</p>
          </>
        }
      >
        <h1 class="text-4xl font-bold text-slate-800">404</h1>
        <p class="mt-4 text-lg text-slate-600">Page not found.</p>
      </Show>
      <a href="/" class="mt-8 text-sm font-medium text-blue-600 hover:underline">
        ← Back home
      </a>
    </div>
  );
}
