"use client";

import Link from "next/link";
import { Card, Button } from "@heroui/react";
import { Rocket } from "@gravity-ui/icons";

export default function NoStartupFound() {
  return (
    <div className="flex justify-center items-center py-20 px-4">
      <Card className="max-w-2xl w-full rounded-3xl border border-default-200 shadow-sm">

        <Card.Header className="flex flex-col items-center text-center gap-4 pt-10">

          <div className="w-20 h-20 rounded-full bg-warning/10 flex items-center justify-center">
            <Rocket className="w-10 h-10 text-warning" />
          </div>

          <Card.Title className="text-3xl font-bold">
            Create Your Startup First
          </Card.Title>

          <Card.Description className="max-w-lg text-base leading-7 text-default-500">
            Before publishing opportunities, you need to create your startup.
            Once your startup is registered, you'll be able to post jobs,
            recruit collaborators, and manage applications from your dashboard.
          </Card.Description>

        </Card.Header>

        <Card.Content className="flex justify-center py-4">
          <div className="rounded-2xl bg-default-100 px-6 py-4 text-center">
            <p className="font-semibold">
              🚀 Start by creating your startup profile.
            </p>

            <p className="text-sm text-default-500 mt-2">
              It only takes a few minutes and unlocks opportunity posting.
            </p>
          </div>
        </Card.Content>

        <Card.Footer className="flex justify-center pb-8">
          <Link href="/dashboard/my-startup">
            <Button color="primary" size="lg">
              Create Startup
            </Button>
          </Link>
        </Card.Footer>

      </Card>
    </div>
  );
}