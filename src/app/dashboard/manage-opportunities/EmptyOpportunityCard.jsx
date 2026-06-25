"use client";

import Link from "next/link";
import { Card, Button } from "@heroui/react";
import { BriefcaseBusiness, CirclePlus } from "lucide-react";

export default function EmptyOpportunityCard() {
  return (
    <div className="max-w-2xl mx-auto py-16">
      <Card className="rounded-3xl border border-dashed border-default-300 shadow-sm">
        <Card.Content className="flex flex-col items-center text-center p-12">

          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
            <BriefcaseBusiness className="w-12 h-12 text-primary" />
          </div>

          <h2 className="text-3xl font-bold mt-8">
            No Opportunities Yet
          </h2>

          <p className="text-default-500 max-w-md mt-4">
            You haven't posted any opportunities yet. Create your first
            opportunity and start attracting talented people to your startup.
          </p>
        <Link href={"/dashboard/add-opportunity"}>
          <Button
            variant="primary"
            size="lg"
            className="mt-8"
          >
            Create Your First Opportunity
          </Button>
            </Link>
        </Card.Content>
      </Card>
    </div>
  );
}