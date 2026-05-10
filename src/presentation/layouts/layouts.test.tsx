import { describe, expect, it } from "vitest";
import { renderToString } from "solid-js/web";
import { AuthLayout } from "./AuthLayout";
import { PublicLayout } from "./PublicLayout";

describe("layouts", () => {
  it("public layout renders children in full-width surface", () => {
    const html = renderToString(() => <PublicLayout><main>Public content</main></PublicLayout>);

    expect(html).toContain("Public content");
    expect(html).toContain("min-h-screen");
  });

  it("auth layout renders generic brand and children", () => {
    const html = renderToString(() => <AuthLayout title="Masuk"><form>Login form</form></AuthLayout>);

    expect(html).toContain("Masuk");
    expect(html).toContain("Login form");
    expect(html).toContain("DUMMY LMS");
  });
});
