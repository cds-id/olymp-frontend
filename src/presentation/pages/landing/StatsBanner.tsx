import { Container, Eyebrow } from "./primitives";

export function StatsBanner() {
  return (
    <section class="py-16" id="prestasi">
      <Container>
        <div class="bg-navy-900 text-white relative overflow-hidden rounded-3xl py-14 px-12">
          {/* Background gradients */}
          <div class="absolute inset-0 bg-[radial-gradient(500px_320px_at_90%_0%,rgba(201,151,37,0.22),transparent_60%),radial-gradient(380px_240px_at_0%_100%,rgba(57,139,76,0.20),transparent_60%)]" />

          <div class="relative z-10 mb-7 max-w-[600px]">
            <Eyebrow class="text-gold-300!">Dampak Nasional</Eyebrow>
            <h2 class="text-white font-display font-bold text-[clamp(26px,3vw,36px)] mt-3 leading-[1.2]">
              Hasil yang terus tumbuh, generasi yang terus belajar.
            </h2>
          </div>

          <div class="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { val: "2,418", suffix: "+", label: "Sekolah Digital Aktif" },
              { val: "186K", suffix: "", label: "Siswa Mengikuti Olimpiade" },
              { val: "1,850", suffix: "+", label: "Guru Pembimbing Tersertifikasi" },
              { val: "94", suffix: "%", label: "Tingkat Penyelesaian Program" },
            ].map((stat, i) => (
              <div class={`pl-[18px] py-1.5 ${i === 0 ? "border-l-2 border-gold-500" : "border-l-2 border-white/[0.18]"}`}>
                <div class="font-display font-extrabold text-[44px] tracking-tight leading-none">
                  {stat.val}
                  {stat.suffix && <em class="not-italic text-gold-300">{stat.suffix}</em>}
                </div>
                <div class="text-white/70 text-[13.5px] mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
