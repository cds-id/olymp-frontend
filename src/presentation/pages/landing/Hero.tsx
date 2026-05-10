import { Icon } from "../../components/Icon";
import { Badge, Btn, Container, FeatherSwoosh } from "./primitives";

export function Hero() {
  return (
    <section class="relative overflow-hidden py-16 pb-[84px]">
      {/* Background gradients */}
      <div class="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_360px_at_90%_10%,rgba(201,151,37,0.10),transparent_60%),radial-gradient(620px_320px_at_8%_90%,rgba(57,139,76,0.10),transparent_60%)]" />

      <Container>
        <div class="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center relative">
          {/* Left content */}
          <div>
            <span class="fade-up fade-up-d1 inline-flex items-center gap-2.5 py-[7px] px-3.5 pr-3.5 pl-[7px] rounded-full bg-surface border border-border text-[12.5px] font-semibold text-navy-900 shadow-sm">
              <span class="bg-green-500 text-white text-[11px] py-[3px] px-[9px] rounded-full font-bold tracking-wide">
                BARU
              </span>
              Olimpiade Sains Dummy 2026 — Pendaftaran Tingkat Sekolah Telah Dibuka
            </span>

            <h1 class="fade-up fade-up-d2 font-display font-bold text-[clamp(40px,5vw,60px)] leading-[1.05] mt-[22px] tracking-[-0.025em] text-text-primary">
              Jalur Pembelajaran{" "}
              <em class="not-italic bg-linear-to-r from-gold-500 to-gold-300 bg-clip-text text-transparent relative">
                Berjenjang
                <span
                  class="block h-2 mt-[-2px] bg-no-repeat bg-[length:100%_100%]"
                  style={{
                    "background-image": `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 8' preserveAspectRatio='none'><path d='M2 5 Q 50 1 100 4 T 198 4' fill='none' stroke='%23c99725' stroke-width='2.2' stroke-linecap='round'/></svg>")`,
                  }}
                />
              </em>{" "}
              untuk Sekolah Digital di Seluruh Indonesia.
            </h1>

            <p class="fade-up fade-up-d3 text-[17.5px] text-neutral-700 max-w-[560px] mt-[22px] leading-relaxed">
              Satu platform untuk seleksi, pelatihan, dan kompetisi siswa — dari ruang kelas
              hingga panggung internasional. Dirancang khusus mengikuti kurikulum Dummy, mendukung
              karakter, ilmu, dan kepemimpinan.
            </p>

            <div class="fade-up fade-up-d3 flex gap-3 mt-[30px] flex-wrap">
              <Btn variant="primary" size="lg">Mulai Pendaftaran</Btn>
              <Btn variant="outline" size="lg" icon="play">Tonton Demo Platform</Btn>
            </div>

            <div class="fade-up fade-up-d4 mt-9 flex gap-7 items-center flex-wrap pt-7 border-t border-dashed border-border-strong">
              {[
                { val: "2,400+", label: "Sekolah Terdaftar" },
                { val: "180K", label: "Siswa Aktif Bulan Ini" },
                { val: "34", label: "Provinsi Terjangkau" },
                { val: "5", label: "Tingkat Kompetisi" },
              ].map((item) => (
                <div class="flex flex-col">
                  <b class="font-display text-[22px] text-navy-900 tracking-tight">{item.val}</b>
                  <span class="text-[12.5px] text-neutral-600">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div class="fade-up fade-up-d2 relative w-full aspect-[1/1.05]">
            {/* Background card */}
            <div class="absolute inset-0 rounded-[32px] overflow-hidden shadow-xl bg-[radial-gradient(circle_at_80%_20%,rgba(201,151,37,0.18),transparent_50%),linear-gradient(160deg,var(--color-navy-900),var(--color-navy-800)_60%,var(--color-navy-700))]">
              <div class="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.018)_0_2px,transparent_2px_6px)]" />
              <FeatherSwoosh class="absolute -right-10 -top-10 w-3/4 h-3/4 opacity-55" />
            </div>

            {/* Dashboard stats card */}
            <div class="absolute left-[8%] right-[8%] top-[8%] bg-surface rounded-2xl p-4 shadow-lg border border-border grid grid-cols-3 gap-3.5">
              <div>
                <div class="text-[11px] text-neutral-500 font-medium tracking-wide uppercase">Peringkat Provinsi</div>
                <div class="font-display font-extrabold text-[22px] text-navy-900 mt-1">#3</div>
                <div class="inline-flex items-center gap-1 text-[11px] text-green-600 font-semibold mt-1">
                  <Icon name="arrow-right" size={12} stroke={2.5} /> Naik 4
                </div>
              </div>
              <div>
                <div class="text-[11px] text-neutral-500 font-medium tracking-wide uppercase">Skor Olimpiade</div>
                <div class="font-display font-extrabold text-[22px] text-navy-900 mt-1">872</div>
                <div class="text-[11px] text-green-600 font-semibold mt-1">+ 12% bulan ini</div>
              </div>
              <div>
                <div class="text-[11px] text-neutral-500 font-medium tracking-wide uppercase">Sertifikat</div>
                <div class="font-display font-extrabold text-[22px] text-gold-700 mt-1">14</div>
                <div class="text-[11px] text-gold-700 font-semibold mt-1">3 baru</div>
              </div>
            </div>

            {/* Tier card */}
            <div class="absolute bottom-[8%] left-[8%] right-[28%] bg-surface rounded-2xl p-4 shadow-lg border border-border flex flex-col gap-3">
              <div class="flex items-center justify-between">
                <h4 class="font-display font-bold text-[15px] text-text-primary">Jalur Olimpiade Sains</h4>
                <Badge tone="green" dot>Aktif</Badge>
              </div>
              <div class="flex gap-2">
                {[
                  { label: "Sekolah", cls: "bg-green-50 text-green-700 border-green-200" },
                  { label: "Kab/Kota", cls: "bg-green-50 text-green-700 border-green-200" },
                  { label: "Provinsi", cls: "bg-navy-900 text-white border-navy-700 shadow-[0_6px_14px_rgba(32,27,90,0.25)]" },
                  { label: "Nasional", cls: "bg-neutral-100 text-neutral-600 border-border" },
                  { label: "Int'l", cls: "bg-gold-50 text-gold-700 border-gold-100" },
                ].map((pill) => (
                  <div class={`flex-1 h-9 rounded-lg flex items-center justify-center text-[11px] font-semibold border ${pill.cls}`}>
                    {pill.label}
                  </div>
                ))}
              </div>
              <div class="flex justify-between text-xs text-neutral-600">
                <span>Babak 2 dari 5</span>
                <span class="text-navy-900 font-semibold">Mulai 18 Mei</span>
              </div>
            </div>

            {/* Medal card */}
            <div class="absolute bottom-[16%] right-[6%] bg-surface rounded-2xl py-3.5 px-4 shadow-lg border border-border flex gap-3 items-center">
              <div class="w-12 h-12 rounded-full bg-[conic-gradient(var(--color-gold-500)_0_65%,var(--color-gold-100)_65%_100%)] flex items-center justify-center relative">
                <div class="absolute inset-[5px] rounded-full bg-surface" />
                <span class="relative z-10 font-display font-extrabold text-sm text-gold-700">A+</span>
              </div>
              <div>
                <small class="block text-[11px] text-neutral-500">Akreditasi Program</small>
                <b class="font-display text-[13px] text-navy-900">Unggul Nasional</b>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
