import { For } from "solid-js";
import { Badge, Container, Eyebrow } from "./primitives";

const TIERS = [
  {
    num: "01", title: "Tingkat Sekolah", scope: "Internal Sekolah",
    desc: "Seleksi kelas dan tryout terkurasi. Guru memantau setiap progres siswa secara real-time.",
    meta: [["Durasi", "2 minggu"], ["Peserta", "Semua kelas"]] as const,
    badge: ["Terbuka", "green"] as const,
  },
  {
    num: "02", title: "Tingkat Kabupaten", scope: "Kab / Kota",
    desc: "20 nominator terbaik tiap sekolah berkompetisi di babak gugus dengan pengawas resmi Dummy.",
    meta: [["Lolos", "Top 5%"], ["Mode", "Online proctored"]] as const,
    badge: ["Berlangsung", "gold"] as const,
  },
  {
    num: "03", title: "Tingkat Provinsi", scope: "34 Provinsi",
    desc: "Babak setengah final dengan studi kasus terapan, presentasi karya, dan ujian tertulis.",
    meta: [["Lolos", "Top 1%"], ["Format", "Hybrid"]] as const,
    badge: ["Akan Datang", "navy"] as const,
  },
  {
    num: "04", title: "Tingkat Nasional", scope: "Indonesia",
    desc: "Final nasional digelar tatap muka dengan dewan juri akademisi dan tokoh pendidikan.",
    meta: [["Hadiah", "Beasiswa Penuh"], ["Sertifikat", "Resmi Dummy"]] as const,
    badge: ["Premium", "gold"] as const,
  },
  {
    num: "05", title: "Tingkat Internasional", scope: "Asia & Dunia",
    desc: "Delegasi terpilih mewakili Indonesia di kompetisi sekolah digital global dan ASEAN Olympiad.",
    meta: [["Lokasi", "Rotating"], ["Mitra", "12 Negara"]] as const,
    badge: ["Eksklusif", "gold"] as const,
  },
];

const markerBg = [
  "bg-green-500",
  "bg-green-700",
  "bg-navy-700",
  "bg-navy-900",
  "bg-linear-to-br from-gold-500 to-gold-700 shadow-[0_8px_18px_rgba(201,151,37,0.35)]",
];

export function TierLadder() {
  return (
    <section class="py-24 bg-surface border-y border-border" id="tier">
      <Container>
        <div class="flex flex-col items-start gap-3.5 max-w-[760px] mb-12">
          <Eyebrow>Jenjang Olimpiade</Eyebrow>
          <h2 class="font-display font-bold text-[clamp(30px,3.4vw,42px)] leading-[1.1] text-text-primary">
            Lima jenjang, satu jalur — dari kelas hingga panggung dunia.
          </h2>
          <p class="text-[16.5px] text-neutral-600 max-w-[600px]">
            Setiap tingkat dirancang sebagai babak resmi: konten, sistem nilai, dan sertifikat
            terhubung dalam satu rapor digital siswa.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
          {/* Dashed connector line (desktop only) */}
          <div class="hidden lg:block absolute top-14 left-[5%] right-[5%] h-0.5 bg-[repeating-linear-gradient(90deg,var(--color-neutral-300)_0_8px,transparent_8px_16px)] z-0" />

          <For each={TIERS}>
            {(tier, i) => (
              <div
                class={`relative z-10 bg-surface border border-border rounded-[18px] p-[22px_20px_20px] flex flex-col min-h-[280px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-border-strong ${
                  i() === 4 ? "bg-linear-to-b from-gold-50 to-surface border-gold-100!" : ""
                }`}
              >
                <div
                  class={`w-14 h-14 rounded-full flex items-center justify-center font-display font-extrabold text-lg text-white mb-[18px] border-4 border-surface shadow-[0_0_0_1px_var(--color-border)] ${markerBg[i()]}`}
                >
                  {tier.num}
                </div>
                <div class="text-xs font-semibold text-green-700 uppercase tracking-[0.08em] mb-3">
                  {tier.scope}
                </div>
                <h4 class="font-display font-bold text-[17px] text-text-primary mb-1.5">
                  {tier.title}
                </h4>
                <p class="text-[13.5px] text-neutral-600 leading-relaxed flex-1 mb-3.5">
                  {tier.desc}
                </p>
                <div class="flex flex-col gap-1.5">
                  <Badge tone={tier.badge[1]}>{tier.badge[0]}</Badge>
                  <For each={tier.meta}>
                    {([k, v]) => (
                      <div class="flex items-center justify-between text-xs text-neutral-700 pt-2 border-t border-dashed border-border">
                        <span>{k}</span>
                        <b class="text-navy-900 font-bold">{v}</b>
                      </div>
                    )}
                  </For>
                </div>
              </div>
            )}
          </For>
        </div>
      </Container>
    </section>
  );
}
