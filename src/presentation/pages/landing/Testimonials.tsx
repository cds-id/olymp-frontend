import { Container, Eyebrow } from "./primitives";

const TESTIMONIALS = [
  {
    quote:
      "Kami akhirnya punya satu tempat untuk semua olimpiade. Sertifikat siswa jadi rapi, laporan ke yayasan jauh lebih mudah, dan guru bisa fokus membimbing — bukan administrasi.",
    initials: "UH",
    name: "Ust. Hidayat, M.Pd.",
    role: "Kepala SMP IT Al-Falah, Jakarta",
    featured: true,
  },
  {
    quote:
      "Anak saya naik dari peringkat sekolah ke nasional dalam dua musim. Jalurnya jelas dan terukur, ada pelatih dan rapor digital.",
    initials: "FA",
    name: "Fatimah Az-Zahra",
    role: "Wali siswa kelas 8 — Bandung",
    featured: false,
  },
  {
    quote:
      "Sebagai pelatih, bank soal dan analitik per kompetensi sangat membantu. Saya bisa menyusun program mingguan berbasis data, bukan tebakan.",
    initials: "BR",
    name: "Bpk. Ridwan, S.Si.",
    role: "Pelatih Olimpiade Fisika — Yogyakarta",
    featured: false,
  },
];

export function Testimonials() {
  return (
    <section class="py-24">
      <Container>
        <div class="flex flex-col items-start gap-3.5 max-w-[760px] mb-12">
          <Eyebrow>Suara Sekolah</Eyebrow>
          <h2 class="font-display font-bold text-[clamp(30px,3.4vw,42px)] leading-[1.1] text-text-primary">
            Yang dirasakan kepala sekolah, guru, dan siswa.
          </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr] gap-5">
          {TESTIMONIALS.map((t) => (
            <div
              class={`bg-surface border rounded-[20px] p-7 flex flex-col gap-5 ${
                t.featured
                  ? "bg-linear-to-b from-green-50 to-surface border-green-100"
                  : "border-border"
              }`}
            >
              <span class="font-display font-extrabold text-[50px] text-gold-500 leading-none tracking-tight h-[18px]">
                "
              </span>
              <blockquote
                class={`font-display leading-[1.5] tracking-tight font-medium text-navy-900 m-0 ${
                  t.featured ? "text-[22px]" : "text-[19px]"
                }`}
              >
                {t.quote}
              </blockquote>
              <div class="flex items-center gap-3 mt-auto">
                <div class="w-11 h-11 rounded-full bg-linear-to-br from-navy-900 to-green-500 text-white font-display font-bold flex items-center justify-center text-[15px]">
                  {t.initials}
                </div>
                <div>
                  <b class="block text-[13.5px] text-navy-900 font-display">{t.name}</b>
                  <span class="text-xs text-neutral-600">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
