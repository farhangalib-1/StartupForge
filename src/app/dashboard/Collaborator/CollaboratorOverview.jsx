"use client";

import { authClient } from "@/lib/auth-client";
import { Card, Chip } from "@heroui/react";

export default function CollaboratorOverview() {
    const { data: session } = authClient.useSession();
      const name = session?.user?.name
  return (
    <div className="space-y-8">

      {/* Welcome */}
      <Card className="rounded-3xl border border-default-200 shadow-sm mb-4">
        <Card.Content className="p-8">
            
          <h1 className="text-4xl font-bold">
            Welcome Back 👋, {name}
          </h1>

          <p className="mt-3 text-default-500 text-lg">
            Discover exciting startup opportunities, apply to roles that match
            your skills, and collaborate with innovative founders.
          </p>

        </Card.Content>
      </Card>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        <Card className="rounded-2xl border border-default-200 shadow-sm">
          <Card.Content className="p-6">
            <p className="text-default-500">Applications</p>

            <h2 className="text-4xl font-bold mt-2">
              0
            </h2>

            <p className="text-sm text-default-400 mt-2">
              Jobs you've applied for
            </p>
          </Card.Content>
        </Card>

        <Card className="rounded-2xl border border-default-200 shadow-sm">
          <Card.Content className="p-6">
            <p className="text-default-500">Saved Jobs</p>

            <h2 className="text-4xl font-bold mt-2">
              0
            </h2>

            <p className="text-sm text-default-400 mt-2">
              Opportunities bookmarked
            </p>
          </Card.Content>
        </Card>

        <Card className="rounded-2xl border border-default-200 shadow-sm">
          <Card.Content className="p-6">
            <p className="text-default-500">Interviews</p>

            <h2 className="text-4xl font-bold mt-2">
              0
            </h2>

            <p className="text-sm text-default-400 mt-2">
              Upcoming interview invitations
            </p>
          </Card.Content>
        </Card>

        <Card className="rounded-2xl border border-default-200 shadow-sm">
          <Card.Content className="p-6">
            <p className="text-default-500">Profile Completion</p>

            <h2 className="text-4xl font-bold mt-2">
              60%
            </h2>

            <p className="text-sm text-default-400 mt-2">
              Complete your profile to stand out
            </p>
          </Card.Content>
        </Card>

      </div>

    </div>
  );
}