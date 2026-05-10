import { For } from "solid-js";
import { Icon } from "../../components/Icon";
import { Container, Eyebrow } from "./primitives";

const PROGRAMS = [
  {
    ico: "graduation", color: "navy", title: "Olimpiade Sains Dummy",
    desc: "Matematika, Fisika, Biologi, Kimia, dan Astronomi terintegrasi dengan pendekatan integrasi Sains Terpadu.",
    foot: "5 mata pelajaran • 5 jenjang",
  },
  {
    ico: "book", color: "green", title: "Olimpiade Bahasa & Tahfizh",
    desc: "Bahasa Arab, Bahasa Inggris, dan Tahfizh Al-Qur'an dengan penilaian berbasis tasmi' dan kompetisi karya tulis.",
    foot: "3 cabang • Nasional",
  },
  {
    ico: "spark", color: "gold", title: "Olimpiade Riset Pelajar",
    desc: "Karya inovasi siswa di bidang STEM, sosial, dan riset sosial dengan pembimbing akademisi.",
    foot: "Tim 2-3 siswa",
  },
  {
    ico: "chart", color: "navy", title: "Tryout & Analitik",
    desc: "Bank soal terkurasi 12.000+, ranking nasional otomatis, serta analisis kelemahan per kompetensi siswa.",
    foot: "12.000+ soal aktif",
  },
  {
    ico: "users", color: "green", title: "Pelatihan Guru Pembimbing",
    desc: "Sertifikasi pelatih olimpiade Dummy dengan modul pedagogi terapan dan komunitas praktik nasional.",
    foot: "Sertifikat resmi",
  },
  {
    ico: "trophy", color: "gold", title: "Beasiswa & Apresiasi",
    desc: "Beasiswa lanjutan, bantuan studi luar negeri, dan apresiasi sekolah pengirim peserta terbaik.",
    foot: "Total Rp 5,8 M / tahun",
  },
];

const icoColors: Record<string, string> = {
  navy: "bg-navy-50 text-navy-900",
  green: "bg-green-50 text-green-700",
  gold: "bg-gold-50 text-gold-700",
};

export function Programs() {
  return (
    <section class="py-24 bg-bg" id="program">
      <Container>
        <div class="flex flex-col items-start gap-3.5 max-w-[760px] mb-12">
          <Eyebrow>Program Unggulan</Eyebrow>
          <h2 class="font-display font-bold text-[clamp(30px,3.4vw,42px)] leading-[1.1] text-text-primary">
            Enam program terintegrasi, dibangun untuk ekosistem sekolah digital.
          </h2>
          <p class="text-[16.5px] text-neutral-600 max-w-[600px]">
            Setiap program memiliki kurikulum, dewan kurator, dan jalur sertifikasi terhubung
            dengan sistem rapor pembelajaran.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <For each={PROGRAMS}>
            {(p) => (
              <article class="group bg-surface border border-border rounded-[20px] p-[26px] relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div class={`w-[52px] h-[52px] rounded-[14px] flex items-center justify-center mb-[18px] ${icoColors[p.color]}`}>
                  <Icon name={p.ico} size={26} />
                </div>
                <h3 class="font-display font-bold text-[19px] text-text-primary mb-2">{p.title}</h3>
                <p class="text-[14.5px] text-neutral-600 mb-[18px]">{p.desc}</p>
                <div class="flex items-center justify-between border-t border-border pt-3.5 text-[13px] text-neutral-700">
                  <span>{p.foot}</span>
                  <span class="w-8 h-8 rounded-full bg-neutral-100 text-navy-900 flex items-center justify-center transition-all duration-200 group-hover:bg-navy-900 group-hover:text-white group-hover:translate-x-0.5">
                    <Icon name="arrow-right" size={14} stroke={2.4} />
                  </span>
                </div>
              </article>
            )}
          </For>
        </div>
      </Container>
    </section>
  );
}
