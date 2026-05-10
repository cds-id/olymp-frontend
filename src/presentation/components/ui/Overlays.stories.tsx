import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Button } from "./Button";
import { BottomSheet } from "./BottomSheet";
import { Dialog } from "./Dialog";
import { Drawer } from "./Drawer";
import { InfoModal, Modal, SuccessModal } from "./Modal";

const meta = { title: "Primitives/Overlays", tags: ["autodocs"] } satisfies Meta;
export default meta;
type Story = StoryObj;

const footer = (
  <>
    <Button variant="outline" showIcon={false}>Cancel</Button>
    <Button showIcon={false}>Continue</Button>
  </>
);

export const NormalModal: Story = { render: () => <Modal open title="Normal modal" footer={footer}>Responsive centered modal body.</Modal> };
export const Info: Story = { render: () => <InfoModal open title="Info modal" footer={footer}>Useful information for user decision.</InfoModal> };
export const Success: Story = { render: () => <SuccessModal open title="Success modal" footer={footer}>Action completed successfully.</SuccessModal> };
export const DialogHeaderBodyFooter: Story = { render: () => <Dialog open title="Dialog" footer={footer}>Dialog supports header, body, footer.</Dialog> };
export const DialogBodyOnly: Story = { render: () => <Dialog open body="Body-only dialog for compact confirmations." /> };
export const DrawerRight: Story = { render: () => <Drawer open title="Drawer" footer={footer}>Side drawer. Width capped at 420px and 92vw.</Drawer> };
export const BottomSheetMobile: Story = { render: () => <BottomSheet open title="Bottom sheet" footer={footer}>Mobile-first bottom sheet, rounded top on small screens.</BottomSheet> };
