import { describe, expect, it } from "vitest";
import { renderToString } from "solid-js/web";
import { StyledToaster } from "./Sonner";

describe("StyledToaster", () => {
  it("renders sonner toaster with project styling hook", () => {
    const html = renderToString(() => <StyledToaster />);

    expect(html).toContain("Notifications");
  });
});
