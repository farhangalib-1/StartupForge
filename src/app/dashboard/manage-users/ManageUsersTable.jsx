"use client";

import { useState } from "react";
import {
  Table,
  Chip,
  Button,
} from "@heroui/react";
import { Ban, ShieldCheck } from "@gravity-ui/icons";
import Image from "next/image";

export default function ManageUsersTable({ users }) {
  const [userList, setUserList] = useState(users);

  const toggleStatus = (id) => {
    setUserList((prev) =>
      prev.map((user) =>
        user._id === id
          ? {
              ...user,
              status: user.status === "blocked" ? "active" : "blocked",
            }
          : user
      )
    );
  };

  return (
    <div className="space-y-6">
      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold">Manage Users</h1>

        <p className="text-default-500 mt-2">
          View all founders and collaborators. Block or unblock users when
          necessary.
        </p>
      </div>

      {/* Table */}
      <Table className="rounded-2xl border border-default-200 shadow-sm">
        <Table.ScrollContainer>
          <Table.Content aria-label="Manage Users">
            <Table.Header>
              <Table.Column isRowHeader allowsSorting>
                {({ sortDirection }) => (
                  <Table.SortableColumnHeader
                    sortDirection={sortDirection}
                  >
                    User
                  </Table.SortableColumnHeader>
                )}
              </Table.Column>

              <Table.Column>Email</Table.Column>

              <Table.Column allowsSorting>
                {({ sortDirection }) => (
                  <Table.SortableColumnHeader
                    sortDirection={sortDirection}
                  >
                    Role
                  </Table.SortableColumnHeader>
                )}
              </Table.Column>

              <Table.Column>Status</Table.Column>

              <Table.Column align="end">
                Action
              </Table.Column>
            </Table.Header>

            <Table.Body>
              {userList.map((user) => (
                <Table.Row key={user._id}>
                  {/* User */}
                  <Table.Cell>
                    <div className="flex items-center gap-3">
                      <Image
                        src={user.image}
                        alt={user.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />

                      <div>
                        <p className="font-semibold">{user.name}</p>

                        <p className="text-xs text-default-500">
                          ID: {user._id.slice(-6)}
                        </p>
                      </div>
                    </div>
                  </Table.Cell>

                  {/* Email */}
                  <Table.Cell>{user.email}</Table.Cell>

                  {/* Role */}
                  <Table.Cell>
                    <Chip
                      color={
                        user.role === "Founder"
                          ? "primary"
                          : "secondary"
                      }
                      variant="flat"
                    >
                      {user.role}
                    </Chip>
                  </Table.Cell>

                  {/* Status */}
                  <Table.Cell>
                    <Chip
                      color={
                        user.status === "blocked"
                          ? "danger"
                          : "success"
                      }
                      variant="flat"
                    >
                      {user.status === "blocked"
                        ? "Blocked"
                        : "Active"}
                    </Chip>
                  </Table.Cell>

                  {/* Action */}
                  <Table.Cell>
                    {user.status === "blocked" ? (
                      <Button
                        variant="outline"
                        size="sm"
                        onPress={() => toggleStatus(user._id)}
                      >
                        <ShieldCheck className="w-4 h-4 mr-2" />
                        Unblock
                      </Button>
                    ) : (
                      <Button
                        variant="danger-soft"
                        size="sm"
                        onPress={() => toggleStatus(user._id)}
                      >
                        <Ban className="w-4 h-4 mr-2" />
                        Block
                      </Button>
                    )}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>

        <Table.Footer>
          <div className="flex justify-between w-full px-4 py-3 text-sm text-default-500">
            <span>Total Users: {userList.length}</span>

            <span>StartupForge Admin Panel</span>
          </div>
        </Table.Footer>
      </Table>
    </div>
  );
}