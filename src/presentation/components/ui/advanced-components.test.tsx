import { describe, expect, it } from "vitest";
import { renderToString } from "solid-js/web";
import { DataTable } from "./DataTable";
import { Select } from "./Select";
import { BottomSheet } from "./BottomSheet";
import { BottomNavbar } from "./BottomNavbar";
import { RadioButton } from "./RadioButton";
import { Checkbox } from "./Checkbox";
import { Drawer } from "./Drawer";
import { Modal, InfoModal, SuccessModal } from "./Modal";
import { Dialog } from "./Dialog";
import { Alert, Toaster } from "./Alert";
import { FloatingSpinnerStatus, Spinner, SpinnerOverlay } from "./Spinner";
import { Skeleton } from "./Skeleton";

describe("advanced UI primitives", () => {
  it("renders table headers and rows", () => {
    const html = renderToString(() => <DataTable columns={[{ key: "name", header: "Name" }]} rows={[{ name: "Alya" }]} />);
    expect(html).toContain("Name");
    expect(html).toContain("Alya");
  });

  it("renders select with search input when searchable", () => {
    const html = renderToString(() => <Select label="School" searchable options={[{ label: "One", value: "1" }]} />);
    expect(html).toContain("School");
    expect(html).toContain("Cari");
    expect(html).toContain("One");
  });

  it("renders overlays and feedback components", () => {
    const html = renderToString(() => (
      <>
        <BottomSheet open title="Sheet">Body</BottomSheet>
        <Drawer open title="Drawer">Body</Drawer>
        <Modal open title="Modal">Body</Modal>
        <InfoModal open title="Info">Body</InfoModal>
        <SuccessModal open title="Success">Body</SuccessModal>
        <Dialog open body="Only body" />
      </>
    ));
    expect(html).toContain("Sheet");
    expect(html).toContain("Drawer");
    expect(html).toContain("Modal");
    expect(html).toContain("Info");
    expect(html).toContain("Success");
    expect(html).toContain("Only body");
  });

  it("renders form controls, alerts, loading, and skeleton", () => {
    const html = renderToString(() => (
      <>
        <BottomNavbar items={[{ label: "Home", href: "/", icon: "school" }]} />
        <RadioButton name="x" label="Radio" value="1" />
        <Checkbox label="Check" />
        <Alert title="Alert" message="Message" />
        <Toaster items={[{ title: "Toast", message: "Saved" }]} />
        <Spinner label="Loading" />
        <SpinnerOverlay show>Loading block</SpinnerOverlay>
        <FloatingSpinnerStatus show label="Syncing" />
        <Skeleton lines={2} />
      </>
    ));
    expect(html).toContain("Home");
    expect(html).toContain("Radio");
    expect(html).toContain("Check");
    expect(html).toContain("Alert");
    expect(html).toContain("Toast");
    expect(html).toContain("Loading");
    expect(html).toContain("Syncing");
    expect(html).toContain("animate-pulse");
  });
});
