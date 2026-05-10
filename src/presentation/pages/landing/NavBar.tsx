import { Btn, Container, Logo } from "./primitives";

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
            <a href="/components" class="hidden sm:inline-flex">
              <Btn variant="ghost" showIcon={false} size="sm">
                Komponen
              </Btn>
            </a>
            <a href="/login">
              <Btn variant="primary" size="sm">
                Masuk
              </Btn>
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
