import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("global styles", () => {
  it("keeps anchor color reset in the base layer so link utilities can override it", () => {
    const css = readFileSync(new URL("./global.css", import.meta.url), "utf8");

    expect(css).toMatch(/@layer\s+base\s*{[\s\S]*a\s*{[\s\S]*color:\s*inherit;[\s\S]*}[\s\S]*}/);
  });
});
