import { describe, expect, it } from "vitest";
import { renderToString } from "solid-js/web";
import { Button } from "./Button";
import { Badge } from "./Badge";
import { Container } from "./Container";
import { Logo } from "../brand/Logo";

describe("reusable UI components", () => {
  it("renders reusable button variants with supplied content", () => {
    const html = renderToString(() => <Button variant="secondary">Start</Button>);

    expect(html).toContain("Start");
    expect(html).toContain("bg-green-500");
  });

  it("renders badge tone and content", () => {
    const html = renderToString(() => <Badge tone="gold" dot>Active</Badge>);

    expect(html).toContain("Active");
    expect(html).toContain("bg-gold-50");
  });

  it("renders container with custom class", () => {
    const html = renderToString(() => <Container class="demo">Content</Container>);

    expect(html).toContain("max-w-[1240px]");
    expect(html).toContain("demo");
  });

  it("renders generic dummy brand instead of Dummy-specific name", () => {
    const html = renderToString(() => <Logo />);

    expect(html).toContain("DUMMY LMS");
    expect(html).not.toContain("Dummy");
  });
});
