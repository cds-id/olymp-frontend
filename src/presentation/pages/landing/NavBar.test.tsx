import { describe, expect, it } from "vitest";
import { renderToString } from "solid-js/web";
import { NavBar } from "./NavBar";

describe("landing navigation", () => {
  it("renders the login call to action as a navigable link", () => {
    const html = renderToString(() => <NavBar />);
    const loginLink = html.match(/<a\b(?=[^>]*href="\/login")[^>]*>.*?<\/a>/s)?.[0] ?? "";

    expect(loginLink).toContain("Masuk");
    expect(loginLink).not.toContain("<button");
    expect(loginLink).toContain("bg-navy-900");
    expect(loginLink).toContain("text-white");
  });
});
