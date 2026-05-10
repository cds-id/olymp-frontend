import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Badge } from "./Badge";
import { DataTable } from "./DataTable";

type Row = { name: string; school: string; status: string; score: number };
const rows: Row[] = [
  { name: "Alya", school: "Dummy School A", status: "Active", score: 92 },
  { name: "Bima", school: "Dummy School B", status: "Review", score: 84 },
  { name: "Citra", school: "Dummy School C", status: "Active", score: 96 },
];

const meta = { title: "Primitives/DataTable", component: DataTable, tags: ["autodocs"] } satisfies Meta<typeof DataTable>;
export default meta;
type Story = StoryObj<typeof DataTable>;

export const ResponsiveTable: Story = {
  render: () => (
    <DataTable<Row>
      caption="Student scores"
      columns={[
        { key: "name", header: "Name" },
        { key: "school", header: "School" },
        { key: "status", header: "Status", render: (row) => <Badge tone={row.status === "Active" ? "green" : "gold"}>{row.status}</Badge> },
        { key: "score", header: "Score", class: "text-right" },
      ]}
      rows={rows}
    />
  ),
};

export const Empty: Story = {
  render: () => <DataTable columns={[{ key: "name", header: "Name" }]} rows={[]} emptyText="No students yet" />,
};
