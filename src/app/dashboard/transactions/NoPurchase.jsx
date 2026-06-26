"use client";

import { Card, Button } from "@heroui/react";
import { CreditCard } from "@gravity-ui/icons";

export default function NoPurchase() {
  return (
    <div className="flex items-center justify-center py-20">
      <Card className="max-w-xl w-full rounded-3xl border border-default-200 shadow-sm">
        <Card.Content className="flex flex-col items-center text-center px-8 py-14">
          <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center">
            <CreditCard className="w-10 h-10 text-success" />
          </div>

          <h2 className="text-2xl font-bold mt-6">
            No Purchases Yet
          </h2>

          <p className="text-default-500 mt-3 max-w-md leading-7">
            No subscription payments have been made yet. Once founders
            purchase the <span className="font-semibold">Founder Pro</span>{" "}
            plan, their transaction history will appear here.
          </p>

          <Button
            variant="outline"
            className="mt-8"
            onPress={() => window.location.reload()}
          >
            Refresh
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
}