"use client";

import { Card, Button, Chip } from "@heroui/react";
import { Crown, Rocket, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function SlotLimitReached() {
  return (
    <Card className="max-w-2xl mx-auto rounded-3xl border border-warning/30 shadow-lg">
      <Card.Content className="p-10">

        <div className="flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-warning/10">
            <Crown className="h-10 w-10 text-warning" />
          </div>
        </div>

        <div className="mt-6 text-center">
          <Chip color="warning" variant="flat">
            Free Plan Limit Reached
          </Chip>

          <h2 className="mt-4 text-3xl font-bold">
            You've used all 3 free opportunity slots
          </h2>

          <p className="mt-3 text-default-500 text-lg">
            Upgrade your StartupForge subscription to continue posting
            opportunities and unlock premium founder features.
          </p>
        </div>

        <div className="mt-10 space-y-4 rounded-2xl border border-default-200 p-6">

          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-success" size={20} />
            <span>Unlimited Opportunity Posts</span>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-success" size={20} />
            <span>Priority Startup Listing</span>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-success" size={20} />
            <span>Verified Founder Badge</span>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-success" size={20} />
            <span>Premium Analytics</span>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-success" size={20} />
            <span>Priority Support</span>
          </div>

        </div>
        <Link href="/pricing">
        <Button
          size="lg"
          className="mt-8 w-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-semibold"
          startContent={<Rocket size={20} />}
        >
          Upgrade to Pro
        </Button>
        </Link>

        <p className="mt-4 text-center text-sm text-default-400">
          Secure payment powered by Stripe.
        </p>

      </Card.Content>
    </Card>
  );
}