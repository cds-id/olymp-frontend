import { Btn, Container, Eyebrow, FeatherSwoosh } from "./primitives";

export function CTA() {
  return (
    <section class="py-24" id="kontak">
      <Container>
        <div class="relative overflow-hidden rounded-[32px] py-16 px-14 bg-[radial-gradient(circle_at_100%_0%,rgba(201,151,37,0.30),transparent_50%),linear-gradient(140deg,var(--color-navy-900)_0%,var(--color-navy-800)_70%,var(--color-navy-700)_100%)] text-white">
          <FeatherSwoosh class="absolute -right-[60px] -top-[60px] w-[460px] opacity-[0.18] pointer-events-none z-[1]" />

          <div class="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 items-center relative z-[2]">
            <div>
              <Eyebrow class="text-gold-300!">Pendaftaran 2026 Dibuka</Eyebrow>
              <h2 class="text-white font-display font-bold text-[clamp(28px,3.4vw,40px)] leading-[1.15] max-w-[560px] mt-3.5">
                Daftarkan sekolah Anda <em class="not-italic text-gold-300">hari ini</em>, gratis untuk musim pertama.
              </h2>
              <p class="text-white/[0.78] mt-4 text-base max-w-[480px]">
                Bergabung dengan 2,400+ sekolah Dummy lain. Tim onboarding akan menghubungi
                dalam 1×24 jam kerja untuk verifikasi NPSN dan pelatihan awal admin.
              </p>
            </div>

            <div class="bg-white/[0.06] border border-white/[0.14] rounded-[20px] p-[22px] backdrop-blur-lg">
              <label class="block text-xs tracking-[0.08em] uppercase text-white/60 mb-2">
                Email Sekolah
              </label>
              <div class="flex items-center bg-white/95 rounded-xl p-1 gap-1">
                <input
                  type="email"
                  placeholder="admin@sekolah-anda.sch.id"
                  class="flex-1 border-0 outline-none py-3 px-3.5 font-sans text-[14.5px] bg-transparent text-navy-900 placeholder:text-neutral-400"
                />
                <Btn variant="primary" size="sm" showIcon={false}>
                  Daftar
                </Btn>
              </div>
              <div class="mt-3.5 text-xs text-white/60">
                <b class="text-gold-300 font-semibold">Gratis</b> untuk musim 2026 · Tidak perlu kartu kredit · Dukungan dwi-bahasa.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
