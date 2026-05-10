import { Container } from "./primitives";

export function TrustStrip() {
  return (
    <section class="bg-surface border-y border-border py-[22px]">
      <Container>
        <div class="flex items-center justify-between gap-6 flex-wrap">
          <span class="text-[12.5px] text-neutral-600 tracking-[0.06em] uppercase font-semibold">
            Dipercaya oleh jaringan sekolah Digital
          </span>
          <div class="flex items-center gap-9 flex-wrap">
            {[
              "SMP IT Al-Falah",
              "SD IT Nurul Ilmi",
              "SMA IT Ar-Rahman",
              "MA IT Insan Mulia",
              "SD IT Permata Iman",
            ].map((name, i) => (
              <span class="font-display font-bold text-sm text-neutral-500 tracking-wide opacity-90 inline-flex items-center gap-2">
                {i % 2 === 1 && <span class="w-2 h-2 rounded-full bg-neutral-300" />}
                {name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
