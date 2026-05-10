import { For } from "solid-js";
import { Icon } from "../../components/Icon";
import { Badge, Container, Eyebrow } from "./primitives";

const FEATURES = [
  {
    ico: "shield", tone: "alt", title: "Identitas Sekolah Terverifikasi",
    desc: "Setiap sekolah Dummy memiliki badan verifikasi resmi — pendaftaran siswa otomatis terhubung dengan NPSN.",
  },
  {
    ico: "calendar", tone: "", title: "Jadwal Olimpiade Sinkron",
    desc: "Tanggal seleksi, pelatihan, dan pengumuman resmi tersinkronisasi nasional dengan pengingat untuk guru dan wali.",
  },
  {
    ico: "chart", tone: "gold", title: "Rapor Multi-Jenjang",
    desc: "Skor siswa terkumpul dari tingkat sekolah hingga internasional dalam satu profil resmi seumur belajar.",
  },
  {
    ico: "leaf", tone: "", title: "Integrasi Karakter",
    desc: "Penilaian akhlaq, tahfizh, dan adab terintegrasi sebagai bagian wajib evaluasi nasional.",
  },
];

const toneIcoClass: Record<string, string> = {
  "": "bg-green-50 text-green-700",
  alt: "bg-navy-50 text-navy-900",
  gold: "bg-gold-50 text-gold-700",
};

export function FeatureSplit() {
  return (
    <section class="py-24 bg-surface border-y border-border" id="fitur">
      <Container>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left text */}
          <div>
            <Eyebrow>Untuk Pengelola Sekolah</Eyebrow>
            <h2 class="font-display font-bold text-[clamp(28px,3.2vw,38px)] leading-[1.15] text-text-primary mt-3 mb-3.5">
              Operasikan kompetisi tingkat nasional langsung dari ruang admin sekolah Anda.
            </h2>
            <p class="text-neutral-600 text-base mb-7 max-w-[540px]">
              Pemberkasan, pendaftaran kolektif, distribusi sertifikat, dan pelaporan rekap sekolah —
              semua dalam satu dashboard yang dirancang bersama pengawas sekolah Dummy.
            </p>
            <div class="flex flex-col gap-[18px]">
              <For each={FEATURES}>
                {(f) => (
                  <div class="grid grid-cols-[56px_1fr] gap-[18px] p-[18px_22px] bg-surface border border-border rounded-2xl">
                    <div class={`w-11 h-11 rounded-xl flex items-center justify-center ${toneIcoClass[f.tone]}`}>
                      <Icon name={f.ico} size={22} />
                    </div>
                    <div>
                      <h4 class="font-display font-bold text-[16.5px] text-text-primary mb-1">{f.title}</h4>
                      <p class="text-sm text-neutral-600">{f.desc}</p>
                    </div>
                  </div>
                )}
              </For>
            </div>
          </div>

          {/* Right mock dashboard */}
          <div class="bg-linear-to-b from-surface to-surface-soft border border-border rounded-[22px] p-3.5 shadow-xl overflow-hidden relative">
            <div class="bg-surface rounded-[14px] border border-border overflow-hidden">
              {/* Browser bar */}
              <div class="flex items-center gap-2 py-2.5 px-3.5 border-b border-border bg-neutral-50">
                <span class="w-2.5 h-2.5 rounded-full bg-[#e16259]" />
                <span class="w-2.5 h-2.5 rounded-full bg-[#e8b840]" />
                <span class="w-2.5 h-2.5 rounded-full bg-[#7fc58d]" />
                <span class="flex-1 h-[22px] rounded-md bg-surface border border-border ml-1.5 text-[11px] text-neutral-500 px-2.5 flex items-center">
                  example.com/dashboard/sekolah
                </span>
              </div>
              {/* Body */}
              <div class="grid grid-cols-[64px_1fr] min-h-[320px]">
                {/* Sidebar */}
                <div class="bg-navy-900 p-3.5 py-3.5 flex flex-col items-center gap-3.5">
                  <div class="w-9 h-9 rounded-[10px] bg-gold-500" />
                  <div class="w-9 h-9 rounded-[10px] bg-white/[0.06]" />
                  <div class="w-9 h-9 rounded-[10px] bg-white/[0.06]" />
                  <div class="w-9 h-9 rounded-[10px] bg-white/[0.06]" />
                  <div class="w-9 h-9 rounded-[10px] bg-white/[0.06]" />
                </div>
                {/* Main */}
                <div class="p-4 flex flex-col gap-3 bg-neutral-50">
                  <div class="flex items-center justify-between">
                    <div>
                      <div class="font-display font-bold text-navy-900 text-sm">SMP IT Al-Falah</div>
                      <div class="text-[11px] text-neutral-500">Provinsi Jawa Barat • Sesi 2026</div>
                    </div>
                    <Badge tone="green" dot>Live</Badge>
                  </div>
                  {/* Stats */}
                  <div class="grid grid-cols-3 gap-2.5">
                    <div class="bg-surface border border-border rounded-[10px] p-2.5">
                      <div class="text-[9.5px] text-neutral-500 uppercase tracking-wide">Siswa Aktif</div>
                      <div class="font-display font-extrabold text-navy-900 text-lg">1,248</div>
                    </div>
                    <div class="bg-surface border border-border rounded-[10px] p-2.5">
                      <div class="text-[9.5px] text-neutral-500 uppercase tracking-wide">Lolos Kab</div>
                      <div class="font-display font-extrabold text-green-700 text-lg">62</div>
                    </div>
                    <div class="bg-surface border border-border rounded-[10px] p-2.5">
                      <div class="text-[9.5px] text-neutral-500 uppercase tracking-wide">Medali</div>
                      <div class="font-display font-extrabold text-gold-700 text-lg">14</div>
                    </div>
                  </div>
                  {/* Chart */}
                  <div class="flex-1 bg-surface border border-border rounded-[10px] p-3.5 relative overflow-hidden">
                    <div class="flex items-center justify-between text-[11px] text-neutral-500 mb-1.5">
                      <span>Performa Olimpiade</span>
                      <span class="text-green-700 font-semibold">+18% YoY</span>
                    </div>
                    <svg viewBox="0 0 320 110" preserveAspectRatio="none" class="w-full h-full">
                      <defs>
                        <linearGradient id="ar" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stop-color="#398B4C" stop-opacity="0.32" />
                          <stop offset="100%" stop-color="#398B4C" stop-opacity="0" />
                        </linearGradient>
                      </defs>
                      {[20, 40, 60, 80].map((y) => (
                        <line x1="0" x2="320" y1={y} y2={y} stroke="#e6e3d8" stroke-dasharray="3 4" />
                      ))}
                      <path d="M0 90 L 40 80 L 80 65 L 120 70 L 160 50 L 200 38 L 240 42 L 280 28 L 320 14 L 320 110 L 0 110 Z" fill="url(#ar)" />
                      <path d="M0 90 L 40 80 L 80 65 L 120 70 L 160 50 L 200 38 L 240 42 L 280 28 L 320 14" fill="none" stroke="#398B4C" stroke-width="2.4" />
                      {[[40, 80], [120, 70], [200, 38], [280, 28]].map(([x, y]) => (
                        <circle cx={x} cy={y} r="3.2" fill="#fff" stroke="#398B4C" stroke-width="2" />
                      ))}
                      <circle cx="320" cy="14" r="4.5" fill="#C99725" stroke="#fff" stroke-width="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
