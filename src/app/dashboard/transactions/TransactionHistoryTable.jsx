"use client";

import { Table, Chip } from "@heroui/react";

export default function TransactionHistoryTable({ payments }) {
  return (
    <div className="space-y-6">
      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold">
          Transaction History
        </h1>

        <p className="text-default-500 mt-2">
          View all subscription payments made by founders.
        </p>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto rounded-2xl border border-default-200 shadow-sm">
        <Table className="min-w-[850px]">
          <Table.ScrollContainer>
            <Table.Content aria-label="Transaction History">
              <Table.Header>
                <Table.Column
                  isRowHeader
                  className="min-w-[280px]"
                >
                  User
                </Table.Column>

                <Table.Column className="min-w-[140px]">
                  Amount
                </Table.Column>

                <Table.Column className="min-w-[180px]">
                  Date
                </Table.Column>

                <Table.Column
                  align="center"
                  className="min-w-[180px]"
                >
                  Payment Status
                </Table.Column>
              </Table.Header>

              <Table.Body>
                {payments.map((payment) => (
                  <Table.Row key={payment._id}>
                    {/* User */}
                    <Table.Cell>
                      <div>
                        <p className="font-semibold">
                          {payment.userName}
                        </p>

                        <p className="text-xs text-default-500">
                          {payment.userEmail}
                        </p>
                      </div>
                    </Table.Cell>

                    {/* Amount */}
                    <Table.Cell>
                      <span className="font-semibold text-success">
                        $9.99
                      </span>
                    </Table.Cell>

                    {/* Date */}
                    <Table.Cell>
                     {new Date(payment.createAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })}
                    </Table.Cell>

                    {/* Payment Status */}
                    <Table.Cell>
                      <div className="flex justify-center">
                        <Chip
                          color={"success"
                          }
                          variant="soft"
                        >
                          paid
                        </Chip>
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
                Total Transactions: {payments.length}
              </span>

              <span>
                StartupForge Admin Panel
              </span>
            </div>
          </Table.Footer>
        </Table>
      </div>
    </div>
  );
}