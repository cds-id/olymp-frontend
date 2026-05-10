import type { JSX } from "solid-js";
import { Logo } from "../components/brand/Logo";

export interface AuthLayoutProps {
  title: string;
  subtitle?: string;
  children?: JSX.Element;
}

export function AuthLayout(props: AuthLayoutProps) {
  return (
    <div class="min-h-screen bg-bg text-text-body font-sans antialiased grid lg:grid-cols-[1.05fr_0.95fr]">
      <section class="hidden lg:flex relative overflow-hidden bg-navy-900 text-white p-12 flex-col justify-between">
        <div class="absolute inset-0 bg-[radial-gradient(640px_360px_at_90%_12%,rgba(201,151,37,0.26),transparent_62%),radial-gradient(520px_320px_at_12%_88%,rgba(57,139,76,0.24),transparent_60%)]" />
        <div class="relative z-10 [&_*]:text-white">
          <Logo />
        </div>
        <div class="relative z-10 max-w-[520px]">
          <p class="text-xs font-bold tracking-[0.18em] uppercase text-gold-300 mb-4">Reusable Auth Layout</p>
          <h1 class="font-display text-[44px] leading-[1.06] font-extrabold tracking-tight mb-5">
            Build branded auth screens with shared UI primitives.
          </h1>
          <p class="text-white/72 text-base leading-relaxed">
            Dummy LMS layout supports login, register, reset password, and onboarding pages without duplicating shell markup.
          </p>
        </div>
        <div class="relative z-10 text-white/50 text-xs">© 2026 Dummy LMS</div>
      </section>

      <main class="flex min-h-screen items-center justify-center p-6 sm:p-10">
        <div class="w-full max-w-[460px]">
          <div class="lg:hidden mb-9">
            <Logo />
          </div>
          <div class="bg-surface border border-border shadow-lg rounded-3xl p-8 sm:p-10">
            <div class="mb-8">
              <h1 class="font-display text-[30px] leading-tight font-bold text-navy-900 tracking-tight">{props.title}</h1>
              {props.subtitle && <p class="mt-2 text-sm text-neutral-600">{props.subtitle}</p>}
            </div>
            {props.children}
          </div>
        </div>
      </main>
    </div>
  );
}
