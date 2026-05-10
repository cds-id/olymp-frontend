import { describe, expect, it } from "vitest";
import { renderToString } from "solid-js/web";
import { Field } from "./Field";
import { FileInput } from "./FileInput";
import { FormGroup } from "./FormGroup";
import { Input } from "./Input";
import { Select } from "./Select";
import { Switch } from "./Switch";
import { Textarea } from "./Textarea";
import { SidebarMenu } from "./SidebarMenu";

describe("form and dashboard primitives", () => {
  it("renders form field wrappers with label, helper, error, and proportional sizes", () => {
    const html = renderToString(() => (
      <Field label="Email" helperText="Use work email" error="Required">
        <Input placeholder="admin@example.com" size="lg" />
      </Field>
    ));

    expect(html).toContain("Email");
    expect(html).toContain("Use work email");
    expect(html).toContain("Required");
    expect(html).toContain("admin@example.com");
    expect(html).toContain("h-[52px]");
    expect(html).not.toContain("undefined");
  });

  it("renders textarea, switch, file input, and form group", () => {
    const html = renderToString(() => (
      <FormGroup title="Profile" description="Basic account data">
        <Textarea placeholder="Bio" />
        <Select options={[{ label: "One", value: "one" }]} placeholder="Choose" size="sm" />
        <Switch label="Active" checked />
        <FileInput label="Upload file" helperText="PDF only" />
      </FormGroup>
    ));

    expect(html).toContain("Profile");
    expect(html).toContain("Basic account data");
    expect(html).toContain("Bio");
    expect(html).toContain("h-9");
    expect(html).not.toContain("undefined");
    expect(html).toContain("Active");
    expect(html).toContain("Upload file");
  });

  it("renders sidebar menu groups and active item", () => {
    const html = renderToString(() => (
      <SidebarMenu
        brand="Dashboard"
        groups={[
          { label: "Main", items: [{ label: "Overview", href: "/dashboard", icon: "chart", active: true, badge: "12" }] },
        ]}
      />
    ));

    expect(html).toContain("Dashboard");
    expect(html).toContain("Main");
    expect(html).toContain("Overview");
    expect(html).toContain("12");
  });
});
