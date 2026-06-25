"use client";

import { Table, Chip, Button } from "@heroui/react";
import { CircleCheckFill, TrashBin } from "@gravity-ui/icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { approveStartup, deleteStartup } from "@/lib/actions/GetData";

export default function ManageStartupsTable({ startups }) {
    const router = useRouter();
    const handleApprove = async (id) => {
  try {
    const result = await approveStartup(id);

    if (result.modifiedCount > 0) {
      alert("Startup approved successfully.");

      router.refresh();
    }
  } catch (error) {
    console.log(error);
  }
};
const handleDelete = async (id) => {
  const confirmed = window.confirm(
    "Are you sure you want to remove this startup?"
  );

  if (!confirmed) return;

  try {
    const result = await deleteStartup(id);

    if (result.deletedCount > 0) {
      alert("Startup removed successfully.");
      router.refresh();
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  }
};
  return (
    <div className="space-y-6">
      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold">Manage Startups</h1>

        <p className="text-default-500 mt-2">
          Review startup submissions, approve pending startups, or remove
          inappropriate listings.
        </p>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto rounded-2xl border border-default-200 shadow-sm">
        <Table className="min-w-[1050px]">
          <Table.ScrollContainer>
            <Table.Content aria-label="Manage Startups">
              <Table.Header>
                <Table.Column isRowHeader className="min-w-[260px]">
                  Startup
                </Table.Column>

                <Table.Column className="min-w-[220px]">
                  Founder
                </Table.Column>

                <Table.Column className="min-w-[150px]">
                  Industry
                </Table.Column>

                <Table.Column className="min-w-[160px]">
                  Funding Stage
                </Table.Column>

                <Table.Column className="min-w-[120px]">
                  Status
                </Table.Column>

                <Table.Column
                  align="center"
                  className="min-w-[220px]"
                >
                  Action
                </Table.Column>
              </Table.Header>

              <Table.Body>
                {startups.map((startup) => (
                  <Table.Row key={startup._id}>
                    {/* Startup */}
                    <Table.Cell>
                      <div className="flex items-center gap-3 min-w-0">
                        <Image
                          src={startup.logoUrl}
                          alt={startup.startupName}
                          width={44}
                          height={44}
                          className="rounded-xl border border-default-200 object-cover shrink-0"
                        />

                        <div className="min-w-0">
                          <p className="font-semibold truncate">
                            {startup.startupName}
                          </p>

                          <p className="text-xs text-default-500">
                            #{startup._id.slice(-6)}
                          </p>
                        </div>
                      </div>
                    </Table.Cell>

                    {/* Founder */}
                    <Table.Cell>
                      <p className="truncate max-w-[220px]">
                        {startup.email}
                      </p>
                    </Table.Cell>

                    {/* Industry */}
                    <Table.Cell>
                      <Chip color="primary" variant="flat">
                        {startup.industry}
                      </Chip>
                    </Table.Cell>

                    {/* Funding Stage */}
                    <Table.Cell>
                      <Chip variant="outline">
                        {startup.fundingStage}
                      </Chip>
                    </Table.Cell>

                    {/* Status */}
                    <Table.Cell>
                      <Chip
                        color={
                          startup.status === "approved"
                            ? "success"
                            : "warning"
                        }
                        variant="soft"
                      >
                        {startup.status}
                      </Chip>
                    </Table.Cell>

                    {/* Actions */}
                    <Table.Cell>
                      <div className="flex items-center justify-center gap-2 whitespace-nowrap w-full">
                        {startup.status !== "approved" && (
                          <Button
                            color="success"
                            variant="outline"
                            size="sm"
                            onClick={() => handleApprove(startup._id)}
                          >
                            <CircleCheckFill className="w-4 h-4 mr-2" />
                            Approve
                          </Button>
                        )}

                        <Button
                          variant="danger-soft"
                          size="sm"
                          onClick={() => handleDelete(startup._id)}
                        >
                          <TrashBin className="w-4 h-4 mr-2" />
                          Remove
                        </Button>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>

          <Table.Footer>
            <div className="flex items-center justify-between w-full px-4 py-3 text-sm text-default-500">
              <span>Total Startups: {startups.length}</span>

              <span>StartupForge Admin Panel</span>
            </div>
          </Table.Footer>
        </Table>
      </div>
    </div>
  );
}