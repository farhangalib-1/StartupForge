"use client";

import { Card, Button } from "@heroui/react";
import { Rocket } from "@gravity-ui/icons";

export default function NoStartupsAdmin() {
  return (
    <div className="flex items-center justify-center py-20">
      <Card className="max-w-xl w-full rounded-3xl border border-default-200 shadow-sm">
        <Card.Content className="flex flex-col items-center text-center px-8 py-14">

          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
            <Rocket className="w-10 h-10 text-primary" />
          </div>

          <h2 className="text-2xl font-bold mt-6">
            No Startups Found
          </h2>

          <p className="text-default-500 mt-3 max-w-md leading-7">
            There are currently no startup submissions available for review.
            Once founders create and submit their startups, they will appear
            here for approval or removal.
          </p>

          <Button
            variant="outline"
            className="mt-8"
          >
            Refresh
          </Button>

        </Card.Content>
      </Card>
    </div>
  );
}