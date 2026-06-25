"use client";

import { Table, Chip, Button } from "@heroui/react";
import { CircleCheckFill, TrashBin } from "@gravity-ui/icons";
import Image from "next/image";

export default function ManageStartupsTable({ startups }) {
  return (
    <div className="space-y-6">

      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold">
          Manage Startups
        </h1>

        <p className="text-default-500 mt-2">
          Review startup submissions, approve pending startups, or remove inappropriate listings.
        </p>
      </div>

      {/* Table */}
      <Table className="rounded-2xl border border-default-200 shadow-sm">

        <Table.ScrollContainer>

          <Table.Content aria-label="Manage Startups">

            <Table.Header>

              <Table.Column isRowHeader allowsSorting>
                {({ sortDirection }) => (
                  <Table.SortableColumnHeader sortDirection={sortDirection}>
                    Startup
                  </Table.SortableColumnHeader>
                )}
              </Table.Column>

              <Table.Column>
                Founder
              </Table.Column>

              <Table.Column>
                Industry
              </Table.Column>

              <Table.Column>
                Funding Stage
              </Table.Column>

              <Table.Column>
                Status
              </Table.Column>

              <Table.Column align="end">
                Action
              </Table.Column>

            </Table.Header>

            <Table.Body>

              {startups.map((startup) => (

                <Table.Row key={startup._id}>

                  {/* Startup */}
                  <Table.Cell>

                    <div className="flex items-center gap-3">

                      <Image
                        src={startup.logoUrl}
                        alt={startup.startupName}
                        width={44}
                        height={44}
                        className="rounded-xl border border-default-200 object-cover"
                      />

                      <div>
                        <p className="font-semibold">
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
                    {startup.email}
                  </Table.Cell>

                  {/* Industry */}
                  <Table.Cell>

                    <Chip
                      color="primary"
                      variant="flat"
                    >
                      {startup.industry}
                    </Chip>

                  </Table.Cell>

                  {/* Funding */}
                  <Table.Cell>

                    <Chip
                      variant="outline"
                    >
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
                      variant="flat"
                    >
                      {startup.status}
                    </Chip>

                  </Table.Cell>

                  {/* Actions */}
                  <Table.Cell>

                    <div className="flex justify-end gap-2">

                      {startup.status !== "approved" && (
                        <Button
                          color="success"
                          variant="flat"
                          size="sm"
                        >
                          <CircleCheckFill className="w-4 h-4 mr-2" />
                          Approve
                        </Button>
                      )}

                      <Button
                        variant="danger-soft"
                        size="sm"
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

            <span>
              Total Startups: {startups.length}
            </span>

            <span>
              StartupForge Admin Panel
            </span>

          </div>

        </Table.Footer>

      </Table>

    </div>
  );
}