"use client";

import { Card, Button } from "@heroui/react";
import { Users, Share2 } from "lucide-react";

export default function EmptyApplicationCard() {
  return (
    <div className="max-w-2xl mx-auto py-16">
      <Card className="rounded-3xl border border-dashed border-default-300 shadow-sm">
        <Card.Content className="flex flex-col items-center text-center p-12">

          <div className="w-24 h-24 rounded-full bg-secondary/10 flex items-center justify-center">
            <Users className="w-12 h-12 text-secondary" />
          </div>

          <h2 className="mt-8 text-3xl font-bold">
            No Applications Yet
          </h2>

          <p className="mt-4 max-w-md text-default-500 leading-7">
            Your opportunity is live, but no collaborators have applied yet.
            Share your opportunity with your network to reach more talented
            developers, designers, and innovators.
          </p>

          <Button
            variant="secondary"
            size="lg"
            className="mt-8"
          >
            Share Opportunity
          </Button>

        </Card.Content>
      </Card>
    </div>
  );
}