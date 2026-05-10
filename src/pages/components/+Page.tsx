import { Logo } from "../../presentation/components/brand/Logo";
import { Icon } from "../../presentation/components/Icon";
import { Badge, Button, Container, Eyebrow } from "../../presentation/components/ui";

export default function Page() {
  return (
    <main class="py-16">
      <Container>
        <div class="mb-12">
          <Eyebrow>Component Gallery</Eyebrow>
          <h1 class="font-display text-4xl font-bold text-navy-900 mt-3">Reusable components</h1>
          <p class="text-neutral-600 mt-2 max-w-2xl">
            Lightweight in-app gallery for shared UI primitives. Good enough until Storybook needed.
          </p>
        </div>

        <div class="grid gap-8">
          <section class="bg-surface border border-border rounded-3xl p-8">
            <h2 class="font-display font-bold text-xl text-navy-900 mb-5">Brand</h2>
            <div class="flex flex-wrap gap-8 items-center">
              <Logo />
              <Logo name="ACME Academy" tagline="Demo Learning" />
            </div>
          </section>

          <section class="bg-surface border border-border rounded-3xl p-8">
            <h2 class="font-display font-bold text-xl text-navy-900 mb-5">Buttons</h2>
            <div class="flex flex-wrap gap-3">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="accent">Accent</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button size="sm">Small</Button>
              <Button size="lg">Large</Button>
            </div>
          </section>

          <section class="bg-surface border border-border rounded-3xl p-8">
            <h2 class="font-display font-bold text-xl text-navy-900 mb-5">Badges</h2>
            <div class="flex flex-wrap gap-3">
              <Badge tone="navy" dot>Navy</Badge>
              <Badge tone="green" dot>Green</Badge>
              <Badge tone="gold" dot>Gold</Badge>
              <Badge tone="neutral">Neutral</Badge>
            </div>
          </section>

          <section class="bg-surface border border-border rounded-3xl p-8">
            <h2 class="font-display font-bold text-xl text-navy-900 mb-5">Icons</h2>
            <div class="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-9 gap-4">
              {["arrow-right", "check", "graduation", "book", "users", "trophy", "shield", "spark", "chart", "calendar", "globe", "school", "leaf", "play", "menu", "feather", "medal"].map((name) => (
                <div class="border border-border rounded-2xl p-4 flex flex-col items-center gap-2 text-center text-xs text-neutral-600">
                  <Icon name={name} class="text-navy-900" />
                  {name}
                </div>
              ))}
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}
