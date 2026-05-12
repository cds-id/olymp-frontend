import { Icon } from "../../components/Icon";
import { Container, Logo } from "./primitives";

export function NavBar() {
  return (
    <header class="sticky top-0 z-50 bg-[rgba(250,250,247,0.85)] backdrop-blur-[10px] backdrop-saturate-[140%] border-b border-[rgba(230,227,216,0.6)]">
      <Container>
        <div class="flex items-center justify-between h-[76px]">
          <Logo />

          <nav class="hidden md:flex gap-1" aria-label="Utama">
            {[
              { href: "#tier", label: "Jenjang", active: true },
              { href: "#program", label: "Program" },
              { href: "#fitur", label: "Fitur" },
              { href: "#prestasi", label: "Prestasi" },
              { href: "#kontak", label: "Kontak" },
            ].map((item) => (
              <a
                href={item.href}
                class={`px-3.5 py-2 rounded-[10px] text-sm font-medium transition-colors duration-150 ${
                  item.active
                    ? "text-green-700"
                    : "text-neutral-700 hover:text-navy-900 hover:bg-neutral-100"
                }`}
              >
                {item.label}
                {item.active && (
                  <span class="block h-0.5 w-[22px] bg-green-500 rounded-full mx-auto mt-1 -mb-0.5" />
                )}
              </a>
            ))}
          </nav>

          <div class="flex gap-2.5 items-center">
            <a href="/components" class="hidden h-9 items-center rounded-lg border border-transparent px-3.5 text-[13px] font-semibold text-green-700 transition-all duration-200 hover:text-green-900 sm:inline-flex">
              Komponen
            </a>
            <a href="/login" class="group inline-flex h-9 items-center gap-2.5 whitespace-nowrap rounded-lg border border-transparent bg-navy-900 px-3.5 text-[13px] font-semibold text-white shadow-[0_6px_18px_rgba(32,27,90,0.25)] transition-all duration-200 hover:bg-[#171442] active:translate-y-px">
              Masuk
              <span class="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                <Icon name="arrow-right" size={16} stroke={2.2} />
              </span>
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
