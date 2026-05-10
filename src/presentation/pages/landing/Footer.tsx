import { For } from "solid-js";
import { Container, Logo } from "./primitives";

const FOOTER_LINKS = [
  {
    title: "Platform",
    links: ["Jenjang Olimpiade", "Program Akademik", "Tryout Nasional", "Sertifikasi Guru"],
  },
  {
    title: "Sekolah",
    links: ["Daftar Sekolah", "Verifikasi NPSN", "Panduan Admin", "Pusat Bantuan"],
  },
  {
    title: "Perusahaan",
    links: ["Tentang Dummy", "Mitra & Yayasan", "Karier", "Berita"],
  },
  {
    title: "Kontak",
    links: ["halo@example.com", "+62 21 5550 0123", "Senin–Jumat, 08–17 WIB"],
  },
];

export function Footer() {
  return (
    <footer class="bg-navy-950 text-white/[0.78] pt-16 pb-8">
      <Container>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-9">
          {/* Brand */}
          <div>
            <Logo />
            <p class="text-sm max-w-[320px] mt-4 leading-relaxed">
              Dummy LMS adalah platform manajemen pembelajaran resmi untuk jaringan sekolah
              digital — mendukung olimpiade berjenjang, pelatihan guru, dan rapor digital.
            </p>
          </div>

          <For each={FOOTER_LINKS}>
            {(col) => (
              <div>
                <h5 class="text-white font-display font-semibold text-[13.5px] tracking-[0.08em] uppercase mb-[18px]">
                  {col.title}
                </h5>
                <ul class="flex flex-col gap-2.5 list-none p-0 m-0">
                  <For each={col.links}>
                    {(link) => (
                      <li>
                        <a href="#" class="text-white/70 text-sm transition-colors hover:text-gold-300">
                          {link}
                        </a>
                      </li>
                    )}
                  </For>
                </ul>
              </div>
            )}
          </For>
        </div>

        <div class="mt-14 pt-[22px] border-t border-white/[0.08] flex justify-between flex-wrap gap-3 text-[12.5px] text-white/50">
          <span>© 2026 Dummy LMS. Semua hak dilindungi.</span>
          <span>Bahasa Indonesia · v2.4 · Status: Operasional ●</span>
        </div>
      </Container>
    </footer>
  );
}
